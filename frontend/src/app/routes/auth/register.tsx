import { EMAIL_REGEX } from '@/utils/valildation/regex';
import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const RegisterRoute = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onSubmit', // 初回の検証は submit 時のみ
    reValidateMode: 'onSubmit', // 送信後の再検証も submit 時のみ
  });
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <main>
      <h1>新規登録</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="田中太郎"
          {...register('username', {
            required: {
              value: true,
              message: 'ユーザー名の入力は必須です。',
            },
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}

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
          {showPassword ? <Eye /> : <EyeClosed />}
        </button>

        <button>登録</button>
      </form>
    </main>
  );
};

export default RegisterRoute;
