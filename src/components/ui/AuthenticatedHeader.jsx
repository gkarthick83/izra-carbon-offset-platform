import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from './Button';

export default function AuthenticatedHeader({ isAuthenticated = true }) {
  const { user, userProfile, signOut } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    setSigningOut(true);
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Sign out error:', error);
      setSigningOut(false);
    }
  };

  // If not authenticated, show the public header
  if (!isAuthenticated || !user) {
    return (
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <button
                onClick={() => navigate('/')}
                className="text-2xl font-bold text-emerald-600 hover:text-emerald-700"
              >
                IZRA
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              <button 
                onClick={() => navigate('/learn-about-izra')}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
              >
                عن إيزرا
              </button>
              <button 
                onClick={() => navigate('/tokenomics')}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
              >
                اقتصاديات العملة
              </button>
              <button 
                onClick={() => navigate('/invest-in-izra')}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
              >
                استثمر
              </button>
              <button 
                onClick={() => navigate('/carbon-credit-marketplace')}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
              >
                السوق
              </button>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <button
                onClick={() => navigate('/login')}
                className="text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-md text-sm font-medium"
              >
                تسجيل الدخول
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700"
              >
                إنشاء حساب
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  const userInitials = userProfile?.full_name
    ?.split(' ')?.map(n => n?.[0])?.join('')?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'U';

  const roleLabels = {
    admin: 'مدير',
    seller: 'بائع',
    buyer: 'مشتري',
    investor: 'مستثمر',
    sponsor: 'راعي'
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-bold text-emerald-600 hover:text-emerald-700"
            >
              IZRA
            </button>
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-3 focus:outline-none"
            >
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="text-left hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">
                    {userProfile?.full_name || user?.email?.split('@')?.[0]}
                  </p>
                  <p className="text-xs text-gray-500">
                    {roleLabels?.[userProfile?.role] || 'مستخدم'}
                  </p>
                </div>
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {userInitials}
                </div>
              </div>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10 border border-gray-200">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900">
                    {userProfile?.full_name}
                  </p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    navigate('/dashboard');
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  لوحة التحكم
                </button>
                <button
                  onClick={handleSignOut}
                  disabled={signingOut}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 disabled:opacity-50"
                >
                  {signingOut ? 'جارٍ تسجيل الخروج...' : 'تسجيل الخروج'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}