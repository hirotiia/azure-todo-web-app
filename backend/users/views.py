from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer

class RegisterView(APIView):
    # 認証クラスの設定（からの場合、未ログインで使える）
    authentication_classes = []  # 未ログインで使える
    # 権限クラスの設定（からの場合、誰でもアクセス可能）
    permission_classes = []

    def post(self, request):
        # Python データをシリアライザに渡して検証準備
        ser = RegisterSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        # 検証 OK → DB 保存。
        ser.save()

        # クライアントに成功レスポンスを返す
        return Response({"detail": "ユーザーを登録しました。"}, status=status.HTTP_201_CREATED)
