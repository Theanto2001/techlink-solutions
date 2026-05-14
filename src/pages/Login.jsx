import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { FaLock } from "react-icons/fa";

import { signInWithEmailAndPassword } from "firebase/auth";

import auth from "../firebase/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      localStorage.setItem("auth", "true");

      navigate("/dashboard");
    } catch (err) {
      setError("Correo o contraseña incorrectos");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden">
      {/* Glow */}
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="relative w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-10 shadow-2xl">
        <div className="flex flex-col items-center mb-10">
          <div className="bg-blue-500/20 p-5 rounded-3xl mb-6">
            <FaLock className="text-4xl text-blue-400" />
          </div>

          <h1 className="text-4xl font-black text-white mb-3">
            TechLink Admin
          </h1>

          <p className="text-white/50 text-center">
            Accede al panel administrativo
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-white/70 mb-2">Correo</label>

            <input
              type="email"
              placeholder="admin@techlink.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-400 transition-all"
            />
          </div>

          <div>
            <label className="block text-white/70 mb-2">Contraseña</label>

            <input
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-400 transition-all"
            />
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/20 text-red-300 p-4 rounded-2xl text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-400 transition-all py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/20 text-white"
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
