from django.db import models
from django.conf import settings

class TaskCsvImportLog(models.Model):
    uploaded_by = models.ForeignKey(verbose_name="ユーザー名", to=settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)
    uploaded_at = models.DateTimeField(verbose_name="アップロード日時", auto_now_add=True)
    total_rows = models.IntegerField(verbose_name="総行数", default=0)
    success_rows = models.IntegerField(verbose_name="成功行数", default=0)
    error_rows = models.IntegerField(verbose_name="エラー行数", default=0)
    error_detail = models.TextField(verbose_name="エラー詳細", blank=True)
