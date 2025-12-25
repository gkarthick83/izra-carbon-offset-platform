import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    role: 'buyer',
    phone: '',
    country: 'UAE'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const roleOptions = [
    { value: 'buyer', label: 'مشتري - شراء أرصدة الكربون' },
    { value: 'seller', label: 'بائع - بيع أرصدة الكربون' },
    { value: 'investor', label: 'مستثمر - الاستثمار في رمز IZRA' },
    { value: 'sponsor', label: 'راعي - زراعة الأشجار في الإمارات' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (formData?.password !== formData?.confirmPassword) {
      setError('كلمات المرور غير متطابقة');
      setLoading(false);
      return;
    }

    if (formData?.password?.length < 6) {
      setError('يجب أن تكون كلمة المرور 6 أحرف على الأقل');
      setLoading(false);
      return;
    }

    try {
      const { data, error: signUpError } = await authService?.signUp(
        formData?.email,
        formData?.password,
        formData?.fullName,
        formData?.role,
        formData?.phone,
        formData?.country
      );

      if (signUpError) {
        setError(signUpError?.message);
        setLoading(false);
        return;
      }

      setSuccess(true);
      setLoading(false);
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError(err?.message || 'حدث خطأ أثناء التسجيل');
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4" dir="rtl">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              تم إنشاء الحساب بنجاح!
            </h2>
            <p className="text-gray-600 mb-4">
              يرجى التحقق من بريدك الإلكتروني للحصول على رابط التأكيد.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              بعد تأكيد بريدك الإلكتروني، يمكنك تسجيل الدخول إلى حسابك.
            </p>
            <Button
              onClick={() => navigate('/login')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              الانتقال إلى تسجيل الدخول
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              انضم إلى منصة IZRA
            </h1>
            <p className="text-gray-600">
              أنشئ حسابك لبدء رحلة تعويض الكربون
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الكامل
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={formData?.fullName}
                onChange={handleChange}
                placeholder="أحمد محمد"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData?.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                نوع الحساب
              </label>
              <Select
                id="role"
                name="role"
                value={formData?.role}
                onChange={handleChange}
                options={roleOptions}
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                رقم الهاتف (اختياري)
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData?.phone}
                onChange={handleChange}
                placeholder="+971 50 123 4567"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                كلمة المرور
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData?.password}
                onChange={handleChange}
                placeholder="على الأقل 6 أحرف"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                تأكيد كلمة المرور
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData?.confirmPassword}
                onChange={handleChange}
                placeholder="تأكيد كلمة المرور"
                required
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              disabled={loading}
            >
              {loading ? 'جارٍ إنشاء الحساب...' : 'إنشاء حساب'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              هل لديك حساب بالفعل؟{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                تسجيل الدخول
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}