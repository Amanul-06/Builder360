import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await login(email, password);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Left branding panel */}
      <section className="login-brand-panel">
        <div className="login-brand">
          <div className="login-logo">B</div>

          <div>
            <h1>
              Builder<span>360</span>
            </h1>

            <p>Construction Management</p>
          </div>
        </div>

        <div className="brand-message">
          <span className="brand-eyebrow">BUILT FOR BETTER MANAGEMENT</span>

          <h2>Everything your construction business needs.</h2>

          <p>
            Manage your people, projects, attendance, wages, vehicles and
            materials — all from one powerful platform.
          </p>
        </div>

        <div className="brand-footer">
          <ShieldCheck size={17} />
          <span>Secure admin access</span>
        </div>
      </section>

      {/* Login panel */}
      <section className="login-form-panel">
        <div className="login-card">
          <div className="login-card-header">
            <span className="mobile-login-logo">B</span>

            <h2>Welcome back</h2>

            <p>Sign in to your Builder360 admin account.</p>
          </div>

          {error && <div className="login-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                type="email"
                placeholder="admin@builder360.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() => {
                    // Add forgot password flow later
                  }}
                >
                  Forgot password?
                </button>
              </div>

              <div className="password-input">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? (
                <span className="login-loading">Signing in...</span>
              ) : (
                <>
                  <span>Sign in</span>

                  <ArrowRight size={19} />
                </>
              )}
            </button>
          </form>

          <div className="login-security">
            <ShieldCheck size={16} />

            <span>Your account is protected with secure authentication.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
