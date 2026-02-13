"use client";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Notes / Info */}
        <div className="hidden md:flex flex-col justify-center px-8 space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Welcome to MyApp
          </h2>
          <p className="text-gray-600 text-lg">
            Organize your notes, tasks, and projects in a clean, smooth
            interface. Fast, secure, and beautiful — just like your favorite
            apps.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-lg">
            <li>📌 Create & manage notes effortlessly</li>
            <li>📌 Organize tasks efficiently</li>
            <li>📌 Sync across all devices instantly</li>
          </ul>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white/50 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-2xl">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Sign Up
          </h1>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 py-3 mb-5 rounded-xl border border-gray-300 bg-white/80 hover:bg-white transition text-gray-800 font-medium shadow-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-6 h-6"
            />
            Sign up with Google
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-400 text-sm">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Sign Up Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white/80 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white/80 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white/80 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 rounded-xl bg-blue-400 hover:bg-blue-500 text-white font-semibold shadow-lg transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-700 text-center mt-6">
            Already have an account?{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
