"use client";

const FirstOneCom = () => {
  return (
    <div>
      <main className="min-h-screen bg-slate-800 text-white px-6 md:px-16 py-20">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Build Your <span className="text-blue-500">Premium</span> Digital
              Experience
            </h1>

            <p className="text-slate-300 mb-8">
              Create modern, fast and responsive web applications with clean UI
              and powerful performance.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-full font-medium">
                Get Started
              </button>

              <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition px-6 py-3 rounded-full font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div></div>
        </section>

        {/* Features Section */}
        <section className="mt-24 flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-slate-800 p-8 rounded-2xl w-full md:w-80 text-center hover:bg-slate-700 transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3">⚡ Fast Performance</h3>
            <p className="text-slate-300">
              Optimized structure for high speed and smooth UI.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl w-full md:w-80 text-center hover:bg-slate-700 transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3">🎨 Modern Design</h3>
            <p className="text-slate-300">
              Minimal and premium layout with clean typography.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl w-full md:w-80 text-center hover:bg-slate-700 transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3">🔒 Secure System</h3>
            <p className="text-slate-300">
              Secure and scalable architecture for production apps.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FirstOneCom;
