import uuid
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, PermissionsMixin, BaseUserManager
)

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)  # ハッシュ保存
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")
        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    """アプリの正規ユーザーモデル（auth_userの置き換え）"""
    id = models.UUIDField(verbose_name="ユーザーID", primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(verbose_name="メールアドレス", max_length=50, unique=True)
    is_active = models.BooleanField(verbose_name="アクティブ", default=True)
    created_at = models.DateTimeField(verbose_name="作成日時", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="更新日時", auto_now=True)

    objects = UserManager()

    # 認証IDはメールアドレス
    USERNAME_FIELD = "email"

    class Meta:
        db_table = "users_user"
        indexes = [
            models.Index(fields=["email"]),
        ]

    def __str__(self):
        return self.email
