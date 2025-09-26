from rest_framework.views import exception_handler
from rest_framework.exceptions import ValidationError

# 失敗レスポンスの型を統一するためのカスタムレンダラー
def envelope_exception_handler(exc, context):
    """
    失敗(4xx/5xx)レスポンスを {success:false, error, message, details} に統一
    """
    res = exception_handler(exc, context)
    if res is None:
        return res

    error = getattr(exc, "default_code", None) or exc.__class__.__name__
    message = "エラーが発生しました。"
    details = None

    if isinstance(exc, ValidationError):
        error = "ValidationError"
        message = "入力エラーがあります。"
        details = res.data
    else:
        d = getattr(exc, "detail", None)
        if isinstance(d, (dict, list)):
            details = d
        elif d:
            message = str(d)

    res.data = {"success": False, "error": error, "message": message, "details": details}
    return res
