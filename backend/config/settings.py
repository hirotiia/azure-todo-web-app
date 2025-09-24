from pathlib import Path
import environ
import os

# ──────────────────────────────────────────────────────────────────────────────
# 基本
# ──────────────────────────────────────────────────────────────────────────────
BASE_DIR = Path(__file__).resolve().parent.parent
env = environ.Env(
    DJANGO_ENV=(str, "local"),  # local | staging | production
    DJANGO_DEBUG=(bool, False),
    DJANGO_SECRET_KEY=(str, "unsafe-dev-secret"),
    DJANGO_ALLOWED_HOSTS=(list, []),
    CSRF_TRUSTED_ORIGINS=(list, []),
    CORS_ALLOWED_ORIGINS=(list, []),

    # DB: URL優先（無ければ個別項目でフォールバック）
    DATABASE_URL=(str, ""),
    DB_ENGINE=(str, "django.db.backends.postgresql"),
    DB_HOST=(str, "localhost"),
    DB_PORT=(str, "5432"),
    DB_NAME=(str, "app"),
    DB_USER=(str, "dev"),
    DB_PASSWORD=(str, "dev"),

    # ログ
    DJANGO_LOG_LEVEL=(str, "INFO"),
)

# .env の読み込み場所を環境ごとに出し分け（任意）
env_file_map = {
    "local": BASE_DIR / ".env.local",
    "staging": BASE_DIR / ".env.staging",
    "production": BASE_DIR / ".env.production",
}
dotenv_path = env_file_map.get(env("DJANGO_ENV"), BASE_DIR / ".env")
if dotenv_path.exists():
    environ.Env.read_env(dotenv_path)

DJANGO_ENV = env("DJANGO_ENV")
DEBUG = bool(env("DJANGO_DEBUG"))
SECRET_KEY = env("DJANGO_SECRET_KEY")

ALLOWED_HOSTS = env.list("DJANGO_ALLOWED_HOSTS")
CSRF_TRUSTED_ORIGINS = env.list("CSRF_TRUSTED_ORIGINS")
CORS_ALLOWED_ORIGINS = env.list("CORS_ALLOWED_ORIGINS")

# ──────────────────────────────────────────────────────────────────────────────
# アプリ/ミドルウェア
# ──────────────────────────────────────────────────────────────────────────────
INSTALLED_APPS = [
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "rest_framework",
    "corsheaders",

    # プロジェクトアプリ
    "tasks",
    "users",
]

AUTH_USER_MODEL = "users.User"

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
]

ROOT_URLCONF = "config.urls"
WSGI_APPLICATION = "config.wsgi.application"
ASGI_APPLICATION = "config.asgi.application"

# ──────────────────────────────────────────────────────────────────────────────
# DB（DATABASE_URL > 個別設定 の優先順）
# ──────────────────────────────────────────────────────────────────────────────
if env.str("DATABASE_URL"):
    default_db = env.db("DATABASE_URL")
else:
    default_db = {
        "ENGINE": env("DB_ENGINE"),
        "HOST": env("DB_HOST"),
        "PORT": env("DB_PORT"),
        "NAME": env("DB_NAME"),
        "USER": env("DB_USER"),
        "PASSWORD": env("DB_PASSWORD"),
    }

DATABASES = {
    "default": {
        **default_db,
        # つなぎっぱなし改善（本番は300〜600s程度が目安）
        "CONN_MAX_AGE": 60 if DJANGO_ENV == "local" else 300,
    }
}

# ──────────────────────────────────────────────────────────────────────────────
# DRF / 認可
# ──────────────────────────────────────────────────────────────────────────────
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    "DEFAULT_PERMISSION_CLASSES": (
        "rest_framework.permissions.IsAuthenticatedOrReadOnly",
    ),
}

# ──────────────────────────────────────────────────────────────────────────────
# I18N / TZ
# ──────────────────────────────────────────────────────────────────────────────
LANGUAGE_CODE = "ja"
TIME_ZONE = "Asia/Tokyo"
USE_I18N = True
USE_TZ = True

# ──────────────────────────────────────────────────────────────────────────────
# セキュリティ（環境で自動切替）
# ──────────────────────────────────────────────────────────────────────────────
if DJANGO_ENV in ("staging", "production"):
    SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True

if DJANGO_ENV == "production":
    SECURE_HSTS_SECONDS = 60 * 60 * 24 * 7  # 1週間（徐々に延長）
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_HSTS_PRELOAD = True

# ──────────────────────────────────────────────────────────────────────────────
# ロギング
# ──────────────────────────────────────────────────────────────────────────────
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "root": {"level": env("DJANGO_LOG_LEVEL"), "handlers": ["console"]},
    "handlers": {"console": {"class": "logging.StreamHandler"}},
    "loggers": {
        "django": {
            "handlers": ["console"],
            "level": env("DJANGO_LOG_LEVEL"),
            "propagate": False,
        },
    },
}
