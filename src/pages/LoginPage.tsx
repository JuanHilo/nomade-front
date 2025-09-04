import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-nomade-dark-brown">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/nomadeholbox.jpeg"
          alt="NOMADE Holbox Resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-nomade-dark-brown/80 via-nomade-dark-brown/60 to-nomade-tan/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-nomade-dark-brown/90 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-nomade-off-white/80 hover:text-nomade-off-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          {/* Login Card */}
          <div className="rounded-2xl p-8 border shadow-2xl bg-nomade-dark-brown/95 border-nomade-tan/20 backdrop-blur-sm relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-nomade-tan/5 via-transparent to-nomade-orange-brown/5 pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Logo size="lg" variant="light" />
                </div>
                <h1 className="text-heading-xl text-nomade-off-white">
                  Welcome Back
                </h1>
                <p className="text-body text-nomade-tan/80">
                  Access your luxury hotel analytics platform
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-label text-nomade-off-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-nomade-tan/30 rounded-xl focus:ring-2 focus:ring-nomade-tan focus:border-nomade-tan transition-all duration-200 bg-nomade-dark-brown/50 text-nomade-off-white placeholder-nomade-tan/50 backdrop-blur-sm"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-label text-nomade-off-white mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 pr-12 border border-nomade-tan/30 rounded-xl focus:ring-2 focus:ring-nomade-tan focus:border-nomade-tan transition-all duration-200 bg-nomade-dark-brown/50 text-nomade-off-white placeholder-nomade-tan/50 backdrop-blur-sm"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-nomade-tan/70 hover:text-nomade-tan transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-nomade-tan/30 text-nomade-tan focus:ring-nomade-tan bg-nomade-dark-brown/50"
                    />
                    <span className="text-sm text-nomade-tan/80">Remember me</span>
                  </label>
                  <Link
                    to="#"
                    className="text-body-sm text-nomade-tan hover:text-nomade-orange-brown transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-nomade-tan text-nomade-dark-brown py-3 rounded-xl hover:bg-nomade-orange-brown hover:text-nomade-off-white transition-all duration-300 hover:transform hover:scale-105 text-button shadow-xl font-semibold"
                >
                  Sign In to Dashboard
                </button>
              </form>

              <div className="text-center text-sm text-nomade-tan/70">
                Need access?{' '}
                <Link to="#" className="text-nomade-tan hover:text-nomade-orange-brown text-button font-medium">
                  Contact your administrator
                </Link>
              </div>
            </div>
          </div>

          {/* Brand Message */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;