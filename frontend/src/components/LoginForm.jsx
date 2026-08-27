import React, { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="w-full max-w-[800px] rounded-2xl bg-white p-1 text-gray-900 shadow-2xl sm:p-7">

      {/* Heading */}
      <div className="text-center">

        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8dfd2]">
          <span className="text-xl">
            🏛️
          </span>
        </div>

        <h2 className="text-2xl font-bold">
          Login to{" "}
          <span className="text-[#8b6f4e]">
            AGovern
          </span>
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          Access government services
        </p>

      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4"
      >

        {/* Username */}
        <div>

          <label
            htmlFor="username"
            className="mb-1.5 block text-xs font-semibold"
          >
            Username / Email / Mobile
          </label>

          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#8b6f4e] focus:ring-2 focus:ring-[#e8dfd2]"
            required
          />

        </div>

        {/* Password */}
        <div>

          <div className="mb-1.5 flex items-center justify-between">

            <label
              htmlFor="password"
              className="text-xs font-semibold"
            >
              Password
            </label>

            <a
              href="#"
              className="text-xs text-[#8b6f4e] hover:underline"
            >
              Forgot?
            </a>

          </div>

          <div className="relative">

            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-3 py-3 pr-10 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#8b6f4e] focus:ring-2 focus:ring-[#e8dfd2]"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-[#8b6f4e]"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>

          </div>

        </div>

        {/* Remember */}
        <div className="flex items-center gap-2">

          <input
            id="remember"
            type="checkbox"
            className="h-3.5 w-3.5 accent-[#8b6f4e]"
          />

          <label
            htmlFor="remember"
            className="text-xs text-gray-600"
          >
            Remember me
          </label>

        </div>

        {/* Login */}
        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-[#a89468] to-[#8b6f4e] py-3 text-sm font-semibold text-white shadow-md transition hover:from-[#9d8556] hover:to-[#7a5f42] active:shadow-inner"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">

          <div className="h-px flex-1 bg-gray-200" />

          

          <div className="h-px flex-1 bg-gray-200" />

        </div>

        

        

      </form>

      {/* Security */}
      <div className="mt-5 border-t border-gray-100 pt-3 text-center text-[10px] text-gray-400">
        🔒 Secure & protected government portal
      </div>

    </div>
  );
};

export default LoginForm;
