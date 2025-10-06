import { EMAIL_REGEX } from '@/utils/valildation/regex';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};

const API_BASE = import.meta.env.REACT_APP_API_BASE ?? 'http://localhost:8000';
const REGISTER_URL = `${API_BASE}/api/auth/register/`;

const LoginRoute = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    mode: 'onSubmit', // 初回の検証は submit 時のみ
    reValidateMode: 'onSubmit', // 送信後の再検証も submit 時のみ
  });
  const [showPassword, setShowPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Session認証なら CSRF と credentials を付ける（下に例）
          // 'X-CSRFToken': getCookie('csrftoken') ?? '',
        },
        // credentials: 'include', // ← Session/Cookie 認証時のみ
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!res.ok) {
        let payload: any = {};
        try {
          payload = await res.json();
        } catch (error) {
          setError('root', {
            type: 'server',
            message: `登録に失敗しました（${res.status}）`,
          });
        }

        let focused = false;
        (['email', 'password'] as const).forEach((field) => {
          if (payload[field]?.length) {
            setError(
              field,
              {
                type: 'server',
                message: String(payload[field][0]),
              },
              { shouldFocus: focused ? false : true },
            ); // 最初の1件だけフォーカス
            focused = true;
          }
        });

        if (payload.non_field_errors?.length) {
          setError('root', {
            type: 'server',
            message: String(payload.non_field_errors[0]),
          });
        } else if (!focused && typeof payload === 'string') {
          setError('root', { type: 'server', message: payload });
        } else if (!focused) {
          setError('root', {
            type: 'server',
            message: '登録に失敗しました。入力内容をご確認ください。',
          });
        }
        return;
      }

      const body = await res.json();
      setSuccessMsg(
        body.detail ?? '登録が完了しました。ログインしてください。',
      );

      console.log(successMsg);

      reset();
    } catch (error) {
      setError('root', {
        type: 'server',
        message:
          'ネットワークエラーが発生しました。時間をおいて再度お試しください。',
      });
    }
  };
  return (
    <main>
      <h1>新規登録</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="email@example.com"
          {...register('email', {
            required: {
              value: true,
              message: 'メールアドレスの入力は必須です。',
            },
            pattern: {
              value: EMAIL_REGEX,
              message:
                '入力内容に不備があるようです。メールアドレスを正しく入力してください。',
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          type={showPassword ? 'text' : 'password'}
          {...register('password', {
            required: { value: true, message: 'パスワードの入力は必須です。' },
            minLength: {
              value: 6,
              message:
                '入力内容に不備があるようです。パスワードは6文字以上で入力してください。',
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </button>

        <button>ログイン</button>
      </form>
    </main>
  );
};

export default LoginRoute;
