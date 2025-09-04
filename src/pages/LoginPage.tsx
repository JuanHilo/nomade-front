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
    <div className="min-h-screen flex">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Luxury hotel lobby"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-nomade-dark-brown/60 to-nomade-green/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 px-8">
            <h2 className="text-4xl font-serif font-bold">Welcome to NOMADE</h2>
            <p className="text-xl opacity-90">Where luxury meets intelligence</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-nomade-off-white flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-nomade-gray hover:text-nomade-dark-brown transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="space-y-6">
            <div className="text-center space-y-4">
              <Logo size="lg" variant="dark" />
              <h1 className="text-3xl font-serif font-bold text-nomade-dark-brown">
                Sign In
              </h1>
              <p className="text-nomade-gray">
                Access your luxury hotel analytics platform
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-nomade-dark-brown mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-nomade-gray/30 rounded-xl focus:ring-2 focus:ring-nomade-green focus:border-transparent transition-all duration-200 bg-white/80"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-nomade-dark-brown mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border border-nomade-gray/30 rounded-xl focus:ring-2 focus:ring-nomade-green focus:border-transparent transition-all duration-200 bg-white/80"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-nomade-gray hover:text-nomade-dark-brown transition-colors"
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
                    className="rounded border-nomade-gray/30 text-nomade-green focus:ring-nomade-green"
                  />
                  <span className="text-sm text-nomade-gray">Remember me</span>
                </label>
                <Link
                  to="#"
                  className="text-sm text-nomade-green hover:text-nomade-light-green transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-nomade-green text-white py-3 rounded-xl hover:bg-nomade-light-green transition-all duration-300 hover:transform hover:scale-105 font-semibold shadow-xl"
              >
                Sign In to Dashboard
              </button>
            </form>

            <div className="text-center text-sm text-nomade-gray">
              Need access?{' '}
              <Link to="#" className="text-nomade-green hover:text-nomade-light-green font-semibold">
                Contact your administrator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;