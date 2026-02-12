"use client";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-100 via-white to-purple-100">

      {/* Glass Card */}
      <div className="w-full max-w-md p-10 rounded-3xl backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Create Account
        </h2>

        <p className="text-gray-600 text-center mt-3 mb-8">
          Join the premium experience today ✨
        </p>

        {/* Form */}
        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none transition duration-300 shadow-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 outline-none transition duration-300 shadow-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 outline-none transition duration-300 shadow-sm"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition duration-300 shadow-lg"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-8">
          Already have an account?{" "}
          <span className="font-semibold text-blue-600 hover:underline cursor-pointer">
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;
