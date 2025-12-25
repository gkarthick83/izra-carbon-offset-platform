import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggle from '../../components/ui/LanguageToggle';
import LoginForm from './components/LoginForm';
import LoginHero from './components/LoginHero';
import Icon from '../../components/AppIcon';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      const userRole = localStorage.getItem('userRole');
      const dashboardRoutes = {
        sponsor: '/sponsor-dashboard',
        seller: '/seller-portal',
        buyer: '/buyer-dashboard',
        investor: '/investor-dashboard',
        partner: '/landing-page',
        admin: '/admin-console'
      };
      navigate(dashboardRoutes?.[userRole] || '/landing-page');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <LanguageToggle />
      </div>
      <div className="min-h-screen grid lg:grid-cols-2">
        <div className="hidden lg:block">
          <LoginHero />
        </div>

        <div className="flex items-center justify-center p-4 md:p-6 lg:p-8">
          <div className="w-full max-w-md">
            <button
              onClick={() => navigate('/landing-page')}
              className="inline-flex items-center gap-2 mb-6 md:mb-8 text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Icon name="ArrowLeft" size={20} />
              <span className="text-sm font-medium">
                العودة للرئيسية
              </span>
            </button>

            <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
              <LoginForm />
            </div>

            <div className="mt-6 md:mt-8 text-center">
              <p className="text-xs md:text-sm text-muted-foreground">
                © ${new Date()?.getFullYear()} IZRA. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;