from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from .models.profile import Profile
from django.db import transaction

User = get_user_model()

class RegisterSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, min_length=8)
    username = serializers.CharField(max_length=30)

    def validate_username(self, value):
        if len(value) > 30:
            raise serializers.ValidationError("ユーザー名は30文字以内で入力してください。")
        return value

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("このメールアドレスは既に登録されています。")
        return value

    def validate_password(self, value):
        validate_password(value)  # Djangoの強度チェックを利用
        return value

    def create(self, validated_data):
        with transaction.atomic():
            user = User.objects.create_user(
                email=validated_data["email"],
                password=validated_data["password"],
                is_active=True,  # メール確認を後で入れるなら False に
            )
            Profile.objects.create(user=user, username=validated_data["username"])
        return user
