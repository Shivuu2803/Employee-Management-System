import { useState, useEffect } from "react";

const Signup = ({ handleSignup, switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState("");
  const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState([]);

  useEffect(() => {
    // Generate floating icons
    const icons = [
      "👤", "📧", "🔒", "✨", "🚀", "💼", "⚡", "🎯", "📊", "🔥"
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }

  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      setTimeout(() => {
        handleSignup({
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
        
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
        setIsLoading(false);
      }, 1000);
    }
  };

  const getPasswordValidation = (password) => {
    const checks = {
      length: password.length >= 8,
      capital: /[A-Z]/.test(password),
      small: /[a-z]/.test(password),
      digit: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    const passedChecks = Object.values(checks).filter(Boolean).length;
    let strength = 0;
    let text = "";
    let color = "text-gray-400";
    
    if (passedChecks >= 5) {
      strength = 3;
      text = "Strong";
      color = "text-green-500";
    } else if (passedChecks >= 3) {
      strength = 2;
      text = "Good";
      color = "text-yellow-500";
    } else if (passedChecks >= 1) {
      strength = 1;
      text = "Weak";
      color = "text-red-500";
    }
    
    return { strength, text, color, checks, passedChecks };
  };

  const passwordValidation = getPasswordValidation(formData.password);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
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

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-md mx-4 flex items-center justify-center">
        {/* Card container */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 p-6 w-full">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mb-4 shadow-2xl transform hover:scale-110 transition-all duration-300 relative">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping"></div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Join Our Team</h1>
            <p className="text-white/70 text-sm">Create your employee account</p>
          </div>

          <form onSubmit={submitHandler} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="relative group">
                <label className="flex items-center space-x-2 text-xs font-medium text-white/90 mb-1">
                  <span className="text-emerald-400">👤</span>
                  <span>Name</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className={`w-4 h-4 transition-all duration-200 ${focusedInput === 'name' ? 'text-emerald-400 scale-110' : 'text-white/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('name')}
                    onBlur={() => setFocusedInput('')}
                    required
                    className={`w-full pl-10 pr-3 py-3 bg-white/10 border-2 rounded-xl font-medium text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:bg-white/20 backdrop-blur-sm ${
                      errors.name 
                        ? 'border-red-400 shadow-lg shadow-red-400/20' 
                        : focusedInput === 'name' 
                          ? 'border-emerald-400 shadow-lg shadow-emerald-400/20' 
                          : 'border-white/20 hover:border-white/40'
                    }`}
                    type="text"
                    placeholder="Enter your name"
                  />
                  {formData.name && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.name && (
                  <div className="flex items-center mt-2 text-red-400 text-sm animate-shake">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email */}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput('')}
                    required
                    className={`w-full pl-10 pr-3 py-3 bg-white/10 border-2 rounded-xl font-medium text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:bg-white/20 backdrop-blur-sm ${
                      errors.email 
                        ? 'border-red-400 shadow-lg shadow-red-400/20' 
                        : focusedInput === 'email' 
                          ? 'border-emerald-400 shadow-lg shadow-emerald-400/20' 
                          : 'border-white/20 hover:border-white/40'
                    }`}
                    type="email"
                    placeholder="Enter your email"
                  />
                  {formData.email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-400 text-sm animate-shake">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Password */}
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('password')}
                    onBlur={() => setFocusedInput('')}
                    onMouseEnter={() => setShowPasswordTooltip(true)}
                    onMouseLeave={() => setShowPasswordTooltip(false)}
                    required
                    className={`w-full pl-10 pr-3 py-3 bg-white/10 border-2 rounded-xl font-medium text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:bg-white/20 backdrop-blur-sm ${
                      errors.password 
                        ? 'border-red-400 shadow-lg shadow-red-400/20' 
                        : focusedInput === 'password' 
                          ? 'border-emerald-400 shadow-lg shadow-emerald-400/20' 
                          : 'border-white/20 hover:border-white/40'
                    }`}
                    type="password"
                    placeholder="Create password"
                  />
                  
                  {/* Password Requirements Tooltip */}
                  {showPasswordTooltip && (
                    <div className="absolute left-0 top-full mt-2 z-50 w-72 bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-2xl">
                      <div className="text-white/90 text-sm font-medium mb-3">Password Requirements:</div>
                      <div className="space-y-2">
                        <div className={`flex items-center space-x-2 text-xs ${passwordValidation.checks.length ? 'text-green-400' : 'text-white/60'}`}>
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${passwordValidation.checks.length ? 'bg-green-500 border-green-500' : 'border-white/30'}`}>
                            {passwordValidation.checks.length && <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                          </div>
                          <span>At least 8 characters</span>
                        </div>
                        
                        <div className={`flex items-center space-x-2 text-xs ${passwordValidation.checks.capital ? 'text-green-400' : 'text-white/60'}`}>
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${passwordValidation.checks.capital ? 'bg-green-500 border-green-500' : 'border-white/30'}`}>
                            {passwordValidation.checks.capital && <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                          </div>
                          <span>One uppercase letter (A-Z)</span>
                        </div>
                        
                        <div className={`flex items-center space-x-2 text-xs ${passwordValidation.checks.small ? 'text-green-400' : 'text-white/60'}`}>
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${passwordValidation.checks.small ? 'bg-green-500 border-green-500' : 'border-white/30'}`}>
                            {passwordValidation.checks.small && <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                          </div>
                          <span>One lowercase letter (a-z)</span>
                        </div>
                        
                        <div className={`flex items-center space-x-2 text-xs ${passwordValidation.checks.digit ? 'text-green-400' : 'text-white/60'}`}>
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${passwordValidation.checks.digit ? 'bg-green-500 border-green-500' : 'border-white/30'}`}>
                            {passwordValidation.checks.digit && <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                          </div>
                          <span>One number (0-9)</span>
                        </div>
                        
                        <div className={`flex items-center space-x-2 text-xs ${passwordValidation.checks.special ? 'text-green-400' : 'text-white/60'}`}>
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${passwordValidation.checks.special ? 'bg-green-500 border-green-500' : 'border-white/30'}`}>
                            {passwordValidation.checks.special && <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                          </div>
                          <span>One special character (!@#$%^&*)</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white/70">Progress:</span>
                          <span className={`font-medium ${passwordValidation.color}`}>
                            {passwordValidation.passedChecks}/5 requirements met
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Password strength */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className={`font-medium ${passwordValidation.color}`}>
                        {passwordValidation.text}
                      </span>
                      <span className="text-white/50">
                        {formData.password.length}/8+ chars
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          passwordValidation.strength === 1 ? 'bg-red-400 w-1/3' :
                          passwordValidation.strength === 2 ? 'bg-yellow-400 w-2/3' :
                          passwordValidation.strength === 3 ? 'bg-emerald-400 w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  </div>
                )}
                {errors.password && (
                  <div className="flex items-center mt-2 text-red-400 text-sm animate-shake">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.password}
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="relative group">
                <label className="flex items-center space-x-2 text-xs font-medium text-white/90 mb-1">
                  <span className="text-emerald-400">✅</span>
                  <span>Confirm Password</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className={`w-4 h-4 transition-all duration-200 ${focusedInput === 'confirmPassword' ? 'text-emerald-400 scale-110' : 'text-white/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onFocus={() => setFocusedInput('confirmPassword')}
                    onBlur={() => setFocusedInput('')}
                    required
                    className={`w-full pl-10 pr-3 py-3 bg-white/10 border-2 rounded-xl font-medium text-white placeholder-white/50 transition-all duration-300 focus:outline-none focus:bg-white/20 backdrop-blur-sm ${
                      errors.confirmPassword 
                        ? 'border-red-400 shadow-lg shadow-red-400/20' 
                        : focusedInput === 'confirmPassword' 
                          ? 'border-emerald-400 shadow-lg shadow-emerald-400/20' 
                          : 'border-white/20 hover:border-white/40'
                    }`}
                    type="password"
                    placeholder="Confirm password"
                  />
                  {/* Password match indicator */}
                  {formData.confirmPassword && formData.password && (
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                      {formData.password === formData.confirmPassword ? (
                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
                {errors.confirmPassword && (
                  <div className="flex items-center mt-2 text-red-400 text-sm animate-shake">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:from-emerald-400 hover:to-teal-500 shadow-lg hover:shadow-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group mt-6"
            >
              {/* Button shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Creating Account...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>Create Account</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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

            {/* Login link */}
            <button
              type="button"
              onClick={switchToLogin}
              className="w-full bg-gradient-to-r from-white/10 to-white/5 border border-emerald-400/30 text-emerald-300 font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:border-emerald-400 hover:text-emerald-200 hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-emerald-400/10 hover:shadow-lg hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 group backdrop-blur-sm"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-4 h-4 transform group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div className="flex items-center space-x-1">
                  <span className="text-white/70 text-sm">Already have an account?</span>
                  <span className="text-emerald-200 font-bold">Sign In</span>
                </div>
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </div>
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Signup;