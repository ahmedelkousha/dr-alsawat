'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import BlogDashboard from '@/components/dashboard/BlogDashboard';
import {
  Lock,
  Mail,
  KeyRound,
  LogOut,
  ShieldCheck,
  Loader2,
  AlertCircle,
} from 'lucide-react';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // Login form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Listen for auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsCheckingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setIsLoggingIn(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (err: any) {
      console.error('Firebase Auth Error:', err);
      if (
        err.code === 'auth/invalid-credential' ||
        err.code === 'auth/user-not-found' ||
        err.code === 'auth/wrong-password'
      ) {
        setLoginError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      } else if (err.code === 'auth/too-many-requests') {
        setLoginError(
          'تم حظر المحاولات مؤقتاً لكثرة المحاولات الخاطئة. حاول لاحقاً.'
        );
      } else {
        setLoginError(err.message || 'فشل تسجيل الدخول إلى لوحة التحكم');
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  // Loading state
  if (isCheckingAuth) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-10 h-10 text-brand animate-spin" />
        <p className="text-xs font-semibold text-slate-500">
          جاري التحقق من صلاحيات الدخول...
        </p>
      </div>
    );
  }

  // Not logged in: Show Login Screen
  if (!user) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-32 bg-slate-50">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-100 space-y-8 relative overflow-hidden">
          {/* Top Gold Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-navy via-brand to-accent-gold" />

          {/* Logo & Title */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mx-auto border border-brand/20">
              <Lock className="w-8 h-8" />
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              لوحة تحكم عيادة د. عبدالله الصواط
            </h1>
            <p className="text-xs text-slate-500">
              يرجى تسجيل الدخول بحساب المشرف لإدارة المدونة والمقالات الطبية.
            </p>
          </div>

          {/* Error Message */}
          {loginError && (
            <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@dralsawat.com"
                  className="w-full pr-10 pl-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-brand focus:outline-none"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                كلمة المرور
              </label>
              <div className="relative">
                <KeyRound className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pr-10 pl-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-brand focus:outline-none"
                  dir="ltr"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3 px-4 rounded-xl bg-brand hover:bg-accent-goldHover text-slate-950 font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>جاري تسجيل الدخول...</span>
                </>
              ) : (
                <span>تسجيل الدخول</span>
              )}
            </button>
          </form>

          <div className="text-center pt-2 text-[11px] text-slate-400 border-t border-slate-100 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-brand" />
            <span>نظام محمي بواسطة Google Firebase Auth</span>
          </div>
        </div>
      </div>
    );
  }

  // Logged in: Show Full Dashboard with Topbar
  return (
    <div className="min-h-screen pt-10 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Admin Top Utility Strip */}
        <div className="bg-white rounded-2xl p-4 py-1 shadow-sm border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="sm:w-40 sm:h-14 w-30 h-10 rounded-xl text-accent-gold flex items-center justify-center font-bold text-xs">
              <Image
                src={'/images/logo.webp'}
                width={1024}
                height={286}
                alt="Logo"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">
                {user.email}
              </div>
              <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                متصل بلوحة الإدارة
              </div>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-slate-600 text-xs font-semibold transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>تسجيل الخروج</span>
          </button>
        </div>

        {/* Dashboard Main Content */}
        <BlogDashboard />
      </div>
    </div>
  );
}
