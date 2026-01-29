import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { shape1, shape2, shape3, shape4 } from "../../assets/bg";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRemember(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.email === email && user?.password === password) {
      localStorage.setItem("auth", "true");

      if (remember) {
        localStorage.setItem("rememberEmail", email);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  const forgotPassword = () => {
    const emailPrompt = prompt("Enter your registered email");

    if (!emailPrompt) return;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.email === emailPrompt) {
      alert("Password reset link has been sent to your email.");
    } else {
      alert("Email not found. Please check and try again.");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-auth">
      <img
        src={shape1}
        className="hidden lg:block absolute bottom-0 left-0 w-[360px] xl:w-[420px] pointer-events-none"
        alt="shape_1"
      />

      <img
        src={shape2}
        className="hidden lg:block absolute bottom-0 right-0 w-[360px] xl:w-[420px] pointer-events-none"
        alt="shape_2"
      />

      <img
        src={shape3}
        className="hidden lg:block absolute top-0 right-0 w-[340px] xl:w-[400px] pointer-events-none"
        alt="shape_3"
      />

      <img
        src={shape4}
        className="hidden lg:block absolute top-0 left-0 w-[340px] xl:w-[400px] pointer-events-none"
        alt="shape_4"
      />
      <div className="w-[420px] bg-white rounded-2xl shadow-xl px-8 py-10 mx-2 lg:mx-0">
        <h2 className="text-2xl font-semibold text-center">Login to Account</h2>
        <p className="text-gray-400 text-sm text-center mt-1">
          Please enter your email and password to continue
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Email */}
          <label className="label">Email address:</label>
          <input
            className="input bg-gray-100"
            placeholder="esteban_schiller@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <div className="flex justify-between items-center mt-4">
            <label className="label mb-0">Password</label>
            <button
              type="button"
              onClick={forgotPassword}
              className="text-sm text-blue-500 hover:underline"
            >
              Forget Password?
            </button>
          </div>

          <input
            type="password"
            className="input bg-gray-100 mt-1"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Remember */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span className="text-sm text-gray-600">Remember Password</span>
          </div>

          <button className="btn-primary w-full mt-6">Sign In</button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
