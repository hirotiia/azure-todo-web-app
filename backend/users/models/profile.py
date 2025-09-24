from django.conf import settings
from django.db import models


class Profile(models.Model):
    """ユーザーの基本情報（認証以外）"""
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,           # ← これでUser削除時に自動削除
        related_name="profile"
    )
    display_name = models.CharField(max_length=50, blank=True, default="")
    avatar_url = models.URLField(blank=True, default="")
    bio = models.TextField(blank=True, default="")
    birthday = models.DateField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "users_profile"

    def __str__(self):
        return f"Profile({self.user.email})"