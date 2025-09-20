import React, { useState } from "react";
import useApi from "../hooks/useApi";
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
    const { login } = useApi();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos enviados:", form);
    const response = await login(form);
    console.log("Respuesta del servidor:", response);
    localStorage.setItem("token", response.token);

    // acá iría la lógica para autenticar con tu backend
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8  shadow-lg w-96">
        <h1 className="text-2xl font-bold text-white text-center mb-6">Iniciar Sesión</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={form.email}  
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ejemplo@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-blue-700 transition-colors py-2 rounded-lg text-white font-semibold"
          >
            Ingresar
          </button>
        </form>

      
      </div>
    </div>
  );
}

export default Login;
