import { GraduationCap } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 h-[250px] rounded-b-[20px] flex flex-col items-center justify-center px-6 relative">
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-lg">
          <GraduationCap className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-white text-[32px] mb-2">LionLink</h1>
        <p className="text-blue-100">Connect. Study. Succeed.</p>
      </div>

      {/* Form Content */}
      <div className="flex-1 px-6 pt-12 flex flex-col">
        <div className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="text-gray-700 text-sm mb-2 block">Email</label>
            <input
              type="email"
              placeholder="your.email@columbia.edu"
              className="w-full h-[50px] px-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="text-gray-700 text-sm mb-2 block">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-[50px] px-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>

          {/* Sign In Button */}
          <button 
            onClick={onLogin}
            className="w-full h-[50px] bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 active:scale-[0.98] transition-all mt-6"
          >
            Continue with your UNI
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <a href="#" className="text-blue-600 text-sm hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-auto pb-8 text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
