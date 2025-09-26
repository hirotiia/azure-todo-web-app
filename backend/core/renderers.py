from rest_framework.renderers import JSONRenderer

# 成功レスポンスの型を統一するためのカスタムレンダラー
class EnvelopeJSONRenderer(JSONRenderer):
    """
    成功(2xx)レスポンスを {success:true, message, data} で包む
    """
    def render(self, data, accepted_media_type=None, renderer_context=None):
        response = renderer_context["response"]
        if not response.exception:
            msg = getattr(response, "message", None)
            data = {"success": True, "message": msg, "data": data}
        return super().render(data, accepted_media_type, renderer_context)
