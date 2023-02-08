import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

//style
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up/ Register</h2>
        <label>
          <span>Email:</span>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!isPending && <button className="btn">Log In</button>}
        {isPending && (
          <button className="btn" disabled>
            Loading...
          </button>
        )}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
