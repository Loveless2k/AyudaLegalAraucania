import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Scale, Award, ArrowUpRight, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 bg-accent-400/10 rounded-full blur-xl"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <motion.div
                className="relative"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Scale className="h-10 w-10 text-accent-400" />
                <motion.div
                  className="absolute inset-0 bg-accent-400/20 rounded-full blur-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <div className="ml-3">
                <span className="text-2xl font-display font-bold">Abogado</span>
                <div className="text-xs text-white/70 font-medium tracking-wider">
                  PROFESIONAL
                </div>
              </div>
            </div>

            <p className="text-white/80 mb-6 leading-relaxed">
              Servicios jurídicos de excelencia con más de 15 años de experiencia.
              Comprometidos con la defensa de sus derechos e intereses.
            </p>

            {/* Professional Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <Award className="w-4 h-4 mr-2 text-accent-400" />
              Colegio de Abogados Certificado
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white/70 hover:text-white hover:bg-accent-500/20 transition-all duration-300"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text-gold">Áreas de Práctica</h3>
            <ul className="space-y-3">
              {[
                { name: "Derecho Civil", href: "/areas-practica#derecho-civil" },
                { name: "Derecho Penal", href: "/areas-practica#derecho-penal" },
                { name: "Derecho Laboral", href: "/areas-practica#derecho-laboral" },
                { name: "Derecho de Familia", href: "/areas-practica#derecho-familia" },
                { name: "Derecho Comercial", href: "/areas-practica#derecho-comercial" }
              ].map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={service.href}
                    className="group flex items-center text-white/80 hover:text-accent-400 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text-gold">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: "Sobre el Abogado", href: "/sobre-mi" },
                { name: "Casos Destacados", href: "/casos" },
                { name: "Testimonios", href: "/testimonios" },
                { name: "Blog Jurídico", href: "/blog" },
                { name: "Contacto", href: "/contacto" }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.href}
                    className="group flex items-center text-white/80 hover:text-accent-400 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text-gold">Contacto</h3>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: "+56 9 8224 3242", href: "tel:+56982243242" },
                { icon: Mail, text: "Ayuda.legal.araucania@gmail.com", href: "mailto:Ayuda.legal.araucania@gmail.com" },
                { icon: MapPin, text: "Edificio Capital, Antonio Varas #989, Of. 1302, Temuco", href: "#" }
              ].map(({ icon: Icon, text, href }, index) => (
                <motion.li
                  key={text}
                  className="group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={href}
                    className="flex items-start text-white/80 hover:text-accent-400 transition-all duration-300 group-hover:translate-x-1"
                  >
                    <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg mr-3 mt-0.5 group-hover:bg-accent-500/20 transition-all duration-300">
                      <Icon size={16} className="flex-shrink-0" />
                    </div>
                    <span className="leading-relaxed">{text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Office Hours */}
            <motion.div
              className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-2">
                <Clock className="w-4 h-4 mr-2 text-accent-400" />
                <span className="text-sm font-medium text-white/90">Horarios de Atención</span>
              </div>
              <p className="text-sm text-white/70">
                Lun - Vie: 9:00 - 18:00<br />
                Sáb: 9:00 - 13:00
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Separator */}
        <motion.div
          className="my-12"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <p className="text-sm text-white/70 mb-2 md:mb-0 md:mr-6">
              &copy; {currentYear} Abogado Profesional. Todos los derechos reservados.
            </p>
            <div className="flex items-center text-xs text-white/50">
              <span>Desarrollado con</span>
              <motion.span
                className="mx-1 text-accent-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ⚖️
              </motion.span>
              <span>para la justicia</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            {[
              { name: "Política de Privacidad", href: "/politica-privacidad" },
              { name: "Términos y Condiciones", href: "/terminos-condiciones" },
              { name: "Código de Ética", href: "/codigo-etica" }
            ].map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  to={link.href}
                  className="text-white/70 hover:text-accent-400 transition-all duration-300 hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back to Top Button */}
    
      </div>
    </footer>
  );
};

export default Footer;