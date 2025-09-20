import { useState, useEffect } from "react";

const Login = ({ handleLogin, switchToSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState("");
  const [floatingIcons, setFloatingIcons] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const icons = [
      "🔐", "⚡", "🚀", "💼", "📊", "🎯", "✨", "🔥", "💡", "🌟"
    ];
    const newFloatingIcons = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2
    }));
    setFloatingIcons(newFloatingIcons);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      handleLogin(email, password);
      setEmail("");
      setPassword("");
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden flex items-center justify-center">
      {/* Background animations */}
      <div className="absolute inset-0">
        {/* Floating icons */}
        {floatingIcons.map((icon) => (
          <div
            key={icon.id}
            className="absolute text-2xl opacity-20 animate-bounce"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              animationDelay: `${icon.delay}s`,
              animationDuration: `${icon.duration}s`
            }}
          >
            {icon.icon}
          </div>
        ))}

        {/* Background blur effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Login form container */}
      <div className="relative z-10 w-full max-w-md mx-4 flex items-center justify-center">
        {/* Main login card */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 p-6 w-full">
          {/* Page header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mb-4 shadow-2xl transform hover:scale-110 transition-all duration-300 relative">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping"></div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/70 text-sm">Sign in to continue your journey</p>
          </div>

          <form onSubmit={submitHandler} className="space-y-4">
            {/* Email field */}
            <div className="relative group">
              <label className="flex items-center space-x-2 text-xs font-medium text-white/90 mb-1">
                <span className="text-emerald-400">📧</span>
                <span>Email Address</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className={`w-4 h-4 transition-all duration-200 ${focusedInput === 'email' ? 'text-emerald-400 scale-110' : 'text-white/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput('')}
                  required
                  className={`w-full pl-10 pr-3 py-3 bg-white/10 border-2 rounded-xl font-medium text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:bg-white/20 backdrop-blur-sm ${
                    focusedInput === 'email' 
                      ? 'border-emerald-400 shadow-lg shadow-emerald-400/20' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  type="email"
                  placeholder="Enter your email"
                  />
                  {/* Show checkmark when email is entered */}
                  {email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Password field */}
              <div className="relative group">
                <label className="flex items-center space-x-2 text-xs font-medium text-white/90 mb-1">
                  <span className="text-emerald-400">🔒</span>
                  <span>Password</span>
                </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className={`w-4 h-4 transition-all duration-200 ${focusedInput === 'password' ? 'text-emerald-400 scale-110' : 'text-white/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedInput('password')}
                  onBlur={() => setFocusedInput('')}
                  required
                  className={`w-full pl-10 pr-12 py-3 bg-white/10 border-2 rounded-xl font-medium text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:bg-white/20 backdrop-blur-sm ${
                    focusedInput === 'password' 
                      ? 'border-emerald-400 shadow-lg shadow-emerald-400/20' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                  {/* Password visibility toggle */}
                  {password && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-white/60 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:text-emerald-400"
                        tabIndex={-1}
                      >
                        {showPassword ? (
                          // Eye icon (hide password)
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                          </svg>
                        ) : (
                          // Eye icon (show password)
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Login button */}
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:from-emerald-400 hover:to-teal-500 shadow-lg hover:shadow-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group mt-6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>Sign In</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white/10 backdrop-blur-sm text-white/80 rounded-full border border-white/20">or</span>
              </div>
            </div>

            {/* Signup option */}
            <button
              type="button"
              onClick={switchToSignup}
              className="w-full bg-gradient-to-r from-white/10 to-white/5 border border-emerald-400/30 text-emerald-300 font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:border-emerald-400 hover:text-emerald-200 hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-emerald-400/10 hover:shadow-lg hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 group backdrop-blur-sm"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 transform group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <div className="flex items-center space-x-1">
                  <span className="text-white/70 text-sm">New to our platform?</span>
                  <span className="text-emerald-200 font-bold">Sign Up</span>
                </div>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>

          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Login;