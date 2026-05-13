import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import emailjs from "@emailjs/browser";

import toast, { Toaster } from "react-hot-toast";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { FaWhatsapp, FaLaptopCode, FaTools, FaShieldAlt } from "react-icons/fa";

import { Menu, X } from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const form = useRef();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_z26k8le",
        "template_kzq1hbl",
        form.current,
        "gWmDrQ3-UFd_NLN3a",
      )
      .then(
        () => {
          toast.success("Solicitud enviada correctamente 🚀");

          form.current.reset();

          setLoading(false);
        },
        () => {
          toast.error("Ocurrió un error ❌");

          setLoading(false);
        },
      );
  };

  return (
    <>
      {/* Loader */}
      {pageLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center"
        >
          <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative text-5xl md:text-7xl font-black tracking-wide"
          >
            TechLink <span className="text-blue-400">Solutions</span>
          </motion.h1>

          <div className="relative mt-10 w-64 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="h-full bg-blue-400 rounded-full"
            ></motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/50 mt-6 tracking-[0.3em] uppercase text-sm"
          >
            Loading Experience
          </motion.p>
        </motion.div>
      )}

      {/* Toast */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0f172a",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "18px",
            padding: "16px",
          },
        }}
      />

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Particles */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },

            fpsLimit: 120,

            particles: {
              color: {
                value: "#3b82f6",
              },

              links: {
                color: "#3b82f6",
                distance: 150,
                enable: true,
                opacity: 0.15,
                width: 1,
              },

              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },

              number: {
                density: {
                  enable: true,
                },
                value: 50,
              },

              opacity: {
                value: 0.3,
              },

              shape: {
                type: "circle",
              },

              size: {
                value: { min: 1, max: 3 },
              },
            },

            detectRetina: true,
          }}
          className="fixed inset-0 z-0"
        />

        {/* Fondo */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%)]"></div>

        {/* Grid */}
        <div className="fixed inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
            <h1 className="text-2xl font-black tracking-wide">
              TechLink <span className="text-blue-400">Solutions</span>
            </h1>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 text-white/70">
              <a href="#inicio" className="hover:text-blue-400 transition-all">
                Inicio
              </a>

              <a
                href="#servicios"
                className="hover:text-blue-400 transition-all"
              >
                Servicios
              </a>

              <a
                href="#contacto"
                className="hover:text-blue-400 transition-all"
              >
                Contacto
              </a>
            </nav>

            {/* Mobile Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden fixed top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 z-40"
          >
            <div className="flex flex-col p-8 gap-6 text-xl">
              <a
                href="#inicio"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400 transition-all"
              >
                Inicio
              </a>

              <a
                href="#servicios"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400 transition-all"
              >
                Servicios
              </a>

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400 transition-all"
              >
                Contacto
              </a>
            </div>
          </motion.div>
        )}

        {/* Hero */}
        <section
          id="inicio"
          className="relative z-10 px-8 py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2 text-blue-300 mb-8">
              Tecnología moderna y soporte profesional
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Soluciones tecnológicas modernas
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
              Reparación, optimización y soporte técnico profesional para
              computadoras y redes.
            </p>

            <div className="flex gap-5 flex-wrap">
              <a
                href="#contacto"
                className="bg-blue-500 hover:bg-blue-400 transition-all px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/20"
              >
                Solicitar soporte
              </a>

              <a
                href="#servicios"
                className="border border-white/10 hover:border-blue-400 hover:text-blue-400 transition-all px-8 py-4 rounded-2xl font-semibold"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[36px] p-10 w-full max-w-md shadow-2xl">
              <div className="space-y-6">
                {[
                  ["Rendimiento", "98%"],
                  ["Seguridad", "95%"],
                  ["Optimización", "100%"],
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2 text-white/70">
                      <span>{item[0]}</span>
                      <span>{item[1]}</span>
                    </div>

                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-400 rounded-full"
                        style={{ width: item[1] }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Servicios */}
        <section
          id="servicios"
          className="relative z-10 px-8 py-24 max-w-7xl mx-auto"
        >
          <div className="mb-16">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Servicios
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Soluciones tecnológicas profesionales
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLaptopCode />,
                title: "Reparación",
              },
              {
                icon: <FaTools />,
                title: "Mantenimiento",
              },
              {
                icon: <FaShieldAlt />,
                title: "Optimización",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                <div className="text-blue-400 text-4xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p className="text-white/60">
                  Servicio moderno y profesional para tus equipos.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section
          id="contacto"
          className="relative z-10 px-8 py-24 max-w-7xl mx-auto"
        >
          <div className="mb-16 text-center">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Contacto
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Hablemos sobre tu proyecto
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl"
            >
              <h3 className="text-3xl font-black mb-8">TechLink Solutions</h3>

              <div className="space-y-6 text-white/70">
                <div>
                  <p className="text-white font-semibold mb-1">WhatsApp</p>

                  <p>+502 0000-0000</p>
                </div>

                <div>
                  <p className="text-white font-semibold mb-1">Facebook</p>

                  <p>TechLink Solutions</p>
                </div>

                <div>
                  <p className="text-white font-semibold mb-1">Horarios</p>

                  <p>Lunes a Sábado — 8:00 AM a 6:00 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl space-y-6"
            >
              <div>
                <label className="block mb-2 text-white/70">Nombre</label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tu nombre"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-400 transition-all"
                />
              </div>

              <div>
                <label className="block mb-2 text-white/70">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="correo@email.com"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-400 transition-all"
                />
              </div>

              <div>
                <label className="block mb-2 text-white/70">
                  Problema o proyecto
                </label>

                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Describe tu problema..."
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-400 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-400 transition-all py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/20"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : (
                  "Enviar solicitud"
                )}
              </button>
            </motion.form>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/10 px-8 py-10 text-center text-white/50">
          <h3 className="text-2xl font-black text-white mb-3">
            TechLink Solutions
          </h3>

          <p>Tecnología moderna y soporte técnico profesional.</p>
        </footer>

        {/* WhatsApp */}
        <a
          href="https://wa.me/50200000000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-5 rounded-full shadow-2xl shadow-green-500/30 z-50 transition-all hover:scale-110"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </div>
    </>
  );
}
