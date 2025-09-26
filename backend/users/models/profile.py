from django.conf import settings
from django.db import models


class Profile(models.Model):
    """ユーザーの基本情報（認証以外）"""
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="profile"
    )
    username = models.CharField(verbose_name="ユーザー名", max_length=30)
    avatar_url = models.URLField(verbose_name="アバターURL", blank=True, default="")
    bio = models.TextField(verbose_name="自己紹介", blank=True, default="")
    created_at = models.DateTimeField(verbose_name="作成日時", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="更新日時", auto_now=True)

    class Meta:
        db_table = "users_profile"

    def __str__(self):
        return f"Profile({self.user.email})"
