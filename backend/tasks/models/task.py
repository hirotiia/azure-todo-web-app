import uuid
from django.db import models
from django.conf import settings

class Task(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="tasks",
    )
    title = models.TextField(verbose_name="タイトル", max_length=100)
    description = models.TextField(verbose_name="タスク詳細", blank=True)

    # 必須の監査項目
    created_at = models.DateTimeField(verbose_name="作成日時", auto_now_add=True)  # 生成時自動
    updated_at = models.DateTimeField(verbose_name="更新日時", auto_now=True)      # 更新時自動

    class Meta:
        db_table = "tasks_task"
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["user", "-created_at"]),
        ]

    def __str__(self):
        return self.title
