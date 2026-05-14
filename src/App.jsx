import { useRef, useState } from "react";

import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaFacebook,
  FaTools,
  FaLaptopCode,
  FaShieldAlt,
} from "react-icons/fa";

import { Toaster, toast } from "react-hot-toast";

import db from "./firebase/firestore";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function App() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData(form.current);

      const ticketData = {
        name: formData.get("name"),

        email: formData.get("email"),

        message: formData.get("message"),

        status: "Pendiente",

        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "tickets"), ticketData);

      toast.success("Solicitud enviada correctamente 🔥");

      form.current.reset();
    } catch (error) {
      console.log(error);

      toast.error("Error al enviar solicitud");
    }

    setLoading(false);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <Toaster position="top-right" />

      {/* Glow */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black mb-8"
        >
          TechLink <span className="text-blue-400">Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white/60 text-xl max-w-2xl mb-10"
        >
          Soluciones tecnológicas profesionales para computadoras, redes,
          mantenimiento y soporte técnico.
        </motion.p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#contacto"
          className="bg-blue-500 hover:bg-blue-400 transition-all px-10 py-5 rounded-3xl text-xl font-semibold shadow-2xl shadow-blue-500/30"
        >
          Solicitar servicio
        </motion.a>
      </section>

      {/* Servicios */}
      <section className="px-6 py-24">
        <h2 className="text-5xl font-black text-center mb-16">Servicios</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <FaTools />,
              title: "Mantenimiento",
              desc: "Optimización y reparación profesional.",
            },

            {
              icon: <FaLaptopCode />,
              title: "Software",
              desc: "Instalación de programas y sistemas.",
            },

            {
              icon: <FaShieldAlt />,
              title: "Seguridad",
              desc: "Protección y eliminación de virus.",
            },
          ].map((service, index) => (
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              key={index}
              className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl"
            >
              <div className="text-blue-400 text-5xl mb-8">{service.icon}</div>

              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>

              <p className="text-white/60">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Info */}
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl">
            <h2 className="text-5xl font-black mb-10">TechLink Solutions</h2>

            <div className="space-y-8 text-white/70">
              <div>
                <h3 className="font-bold text-white text-xl mb-2">WhatsApp</h3>

                <p>+502 0000-0000</p>
              </div>

              <div>
                <h3 className="font-bold text-white text-xl mb-2">Facebook</h3>

                <p>TechLink Solutions</p>
              </div>

              <div>
                <h3 className="font-bold text-white text-xl mb-2">Servicios</h3>

                <p>
                  Reparación, optimización, soporte remoto y mantenimiento
                  profesional.
                </p>
              </div>
            </div>

            <div className="flex gap-5 mt-10">
              <a
                href="#"
                className="bg-green-500/20 p-5 rounded-2xl hover:scale-110 transition-all"
              >
                <FaWhatsapp className="text-3xl text-green-400" />
              </a>

              <a
                href="#"
                className="bg-blue-500/20 p-5 rounded-2xl hover:scale-110 transition-all"
              >
                <FaFacebook className="text-3xl text-blue-400" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl space-y-6"
          >
            <div>
              <label className="block text-white/70 mb-2">Nombre</label>

              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-white/70 mb-2">
                Correo electrónico
              </label>

              <input
                type="email"
                name="email"
                placeholder="correo@email.com"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-white/70 mb-2">
                Problema o proyecto
              </label>

              <textarea
                rows="6"
                name="message"
                placeholder="Describe tu problema o proyecto..."
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-400 transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-400 transition-all py-5 rounded-2xl text-xl font-semibold shadow-2xl shadow-blue-500/20"
            >
              {loading ? "Enviando..." : "Enviar solicitud"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
