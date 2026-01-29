import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { shape1, shape2, shape3, shape4 } from "../../assets/bg";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!acceptTerms) {
      alert("Please accept terms and conditions to continue");
      return;
    }
    localStorage.setItem("user", JSON.stringify(form));
    alert("Account created successfully! Please login.");
    navigate("/login");
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
        <h2 className="text-2xl font-semibold text-center">
          Create an Account
        </h2>
        <p className="text-gray-400 text-sm text-center mt-1">
          Create an account to continue
        </p>

        <form onSubmit={submitHandler} className="mt-6">
          {/* Email */}
          <label className="label">Email address</label>
          <input
            className="input bg-gray-100"
            placeholder="esteban_schiller@gmail.com"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          {/* Username */}
          <label className="label mt-4">Username</label>
          <input
            className="input bg-gray-100"
            placeholder="Username"
            required
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />

          {/* Password */}
          <label className="label mt-4">Password</label>
          <input
            type="password"
            className="input bg-gray-100"
            placeholder="••••••••"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />
            <span className="text-sm text-gray-600">
              I accept terms and conditions
            </span>
          </div>

          <button className="btn-primary w-full mt-6">Sign Up</button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
