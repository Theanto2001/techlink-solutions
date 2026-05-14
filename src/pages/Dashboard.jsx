import {
  FaUsers,
  FaTools,
  FaClipboardList,
  FaMoneyBillWave,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white/5 border-r border-white/10 p-8 hidden md:flex flex-col">
        <h1 className="text-3xl font-black mb-12">
          TechLink
          <span className="text-blue-400"> Admin</span>
        </h1>

        <nav className="space-y-4">
          <button className="w-full text-left px-5 py-4 rounded-2xl bg-blue-500/20 border border-blue-500/20 hover:bg-blue-500/30 transition-all">
            Dashboard
          </button>

          <button className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/10 transition-all">
            Clientes
          </button>

          <button className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/10 transition-all">
            Tickets
          </button>

          <button className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/10 transition-all">
            Reparaciones
          </button>

          <button className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/10 transition-all">
            Configuración
          </button>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Top */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-5xl font-black mb-3">Dashboard</h2>

            <p className="text-white/60">
              Bienvenido al panel administrativo de TechLink Solutions.
            </p>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/20 px-6 py-3 rounded-2xl transition-all"
          >
            Cerrar sesión
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {[
            {
              icon: <FaUsers />,
              title: "Clientes",
              value: "128",
            },
            {
              icon: <FaClipboardList />,
              title: "Tickets",
              value: "54",
            },
            {
              icon: <FaTools />,
              title: "Reparaciones",
              value: "23",
            },
            {
              icon: <FaMoneyBillWave />,
              title: "$2,430",
              value2: "Ingresos",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="text-blue-400 text-4xl mb-6">{card.icon}</div>

              <h3 className="text-white/60 mb-2">
                {card.value2 || card.title}
              </h3>

              <p className="text-4xl font-black">{card.value || card.title}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 overflow-x-auto">
          <h3 className="text-3xl font-black mb-8">Últimos Tickets</h3>

          <table className="w-full">
            <thead>
              <tr className="text-left text-white/50 border-b border-white/10">
                <th className="pb-4">Cliente</th>
                <th className="pb-4">Problema</th>
                <th className="pb-4">Estado</th>
                <th className="pb-4">Fecha</th>
              </tr>
            </thead>

            <tbody className="text-white/70">
              {[
                [
                  "Juan Pérez",
                  "Pantalla dañada",
                  "En reparación",
                  "12/05/2026",
                ],
                ["Carlos López", "Virus", "Completado", "11/05/2026"],
                ["María García", "No enciende", "Pendiente", "10/05/2026"],
              ].map((item, index) => (
                <tr key={index} className="border-b border-white/5">
                  <td className="py-5">{item[0]}</td>

                  <td>{item[1]}</td>

                  <td>
                    <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
                      {item[2]}
                    </span>
                  </td>

                  <td>{item[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
