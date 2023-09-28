import { useForm } from 'react-hook-form';
import './regularForm.css'

interface FormData {
  username: string;
  email: string;
  password: string;
}

function RegularForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => alert(JSON.stringify(data));

  return (
    <div dir='rtl' className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>אני נוצרתי על ידי :<p>react-hook-form' library.'</p></h1>
        <div className="form-group">
          <input
            type='text'
            placeholder='שם משתמש'
            {...register("username", {
              required: 'שדה זה חובה',
              minLength: { value: 2, message: 'שם המשתמש חייב להיות לפחות 2 תווים' }
            })}
          />
          <p className="error-message">{errors.username?.message}</p>
        </div>
        <div className="form-group">
          <input
            type='email'
            placeholder='מייל'
            {...register("email", {
              required: 'שדה זה חובה',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'אימייל שגוי'
              }
            })}
          />
          <p className="error-message">{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <input
            type='password'
            placeholder='סיסמה'
            {...register("password", {
              required: 'שדה זה חובה',
              pattern: {
                value: /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!]).*$/,
                message: 'הסיסמה חייבת להכיל לפחות אות אחת גדולה, אות קטנה אחת, ספרה אחת ותו מיוחד אחד'
              },
              minLength: { value: 8, message: 'הסיסמה חייבת להיות לפחות 8 תווים' },
              maxLength: { value: 20, message: 'הסיסמה יכולה להיות עד 20 תווים' }
            })}
          />
          <p className="error-message">{errors.password?.message}</p>
        </div>
        <button type="submit">שליחה</button>
      </form>
    </div>
  );
}

export default RegularForm;
