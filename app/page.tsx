'use client';

import { useState } from 'react';
import { UtensilsCrossed, MapPin, Clock, Phone, ShoppingCart, ChevronRight } from 'lucide-react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      category: 'Tacos',
      items: [
        { name: 'Tacos de Carne Asada', price: '$3.50', desc: 'Jugosos y sabrosos' },
        { name: 'Tacos de Pollo Dorado', price: '$3.00', desc: 'Crujientes y tiernos' },
        { name: 'Tacos de Cochinita', price: '$3.75', desc: 'Auténtica receta yucateca' },
      ],
    },
    {
      category: 'Burrito',
      items: [
        { name: 'Burrito Carne Asada', price: '$6.50', desc: 'Completo y abundante' },
        { name: 'Burrito Pollo BBQ', price: '$6.00', desc: 'Jugoso y ahumado' },
      ],
    },
    {
      category: 'Quesadillas',
      items: [
        { name: 'Quesadilla de Queso', price: '$4.00', desc: 'Derretida y sabrosa' },
        { name: 'Quesadilla de Champiñones', price: '$4.75', desc: 'Vegetariana deliciosa' },
      ],
    },
    {
      category: 'Sopas',
      items: [
        { name: 'Pozole Rojo', price: '$5.99', desc: 'Tradicional y reconfortante' },
        { name: 'Caldo de Pollo', price: '$4.99', desc: 'Con verduras y arroz' },
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <UtensilsCrossed size={32} />
            <span>Antojitos</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#menu" className="hover:text-orange-200 transition">Menú</a>
            <a href="#nosotros" className="hover:text-orange-200 transition">Nosotros</a>
            <a href="#contacto" className="hover:text-orange-200 transition">Contacto</a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-red-700 px-4 py-3 flex flex-col gap-3">
            <a href="#menu" className="hover:text-orange-200 transition">Menú</a>
            <a href="#nosotros" className="hover:text-orange-200 transition">Nosotros</a>
            <a href="#contacto" className="hover:text-orange-200 transition">Contacto</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">¡Bienvenido a Antojitos!</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            La mejor comida rápida auténtica con sabor casero
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-100 transition transform hover:scale-105 flex items-center gap-2 mx-auto">
            <ShoppingCart size={20} />
            Haz tu Pedido
          </button>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">Nuestro Menú</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems.map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-red-600 mb-4">{section.category}</h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b pb-3 last:border-b-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <span className="text-orange-600 font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition">
              Ver Menú Completo
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="nosotros" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-orange-600">¿Por qué Antojitos?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                🔥
              </div>
              <h3 className="text-xl font-bold mb-2">Comida Fresca</h3>
              <p className="text-gray-600">Preparada diariamente con ingredientes de la mejor calidad</p>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-lg hover:shadow-lg transition">
              <div className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2">Rápido y Delicioso</h3>
              <p className="text-gray-600">15 minutos máximo de espera garantizado</p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-lg hover:shadow-lg transition">
              <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold mb-2">Precios Accesibles</h3>
              <p className="text-gray-600">Delicioso sin gastar una fortuna</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg">
            <p className="text-lg text-gray-800 text-center">
              En Antojitos, creemos que la buena comida debe ser accesible para todos. Desde hace 5 años, 
              hemos estado sirviendo a nuestra comunidad con recetas auténticas y amor en cada plato.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS */}
      <section className="bg-gradient-to-r from-orange-400 to-red-500 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Ofertas Especiales esta Semana</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur">
              <h3 className="text-xl font-bold mb-2">Combo de Tacos</h3>
              <p className="text-lg">3 Tacos + Bebida + Postre: Solo $9.99</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur">
              <h3 className="text-xl font-bold mb-2">Burrito Gigante</h3>
              <p className="text-lg">Compra 1, Lleva 2: $12.99 (Aplica con bebida)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contacto" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">Encuéntranos</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow">
              <MapPin className="text-orange-600" size={32} />
              <div>
                <h3 className="font-bold text-lg">Ubicación</h3>
                <p className="text-gray-600">Calle Principal 123, Tu Ciudad</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow">
              <Clock className="text-orange-600" size={32} />
              <div>
                <h3 className="font-bold text-lg">Horario</h3>
                <p className="text-gray-600">Lunes a Domingo: 10am - 11pm</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow">
              <Phone className="text-orange-600" size={32} />
              <div>
                <h3 className="font-bold text-lg">Teléfono</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition flex items-center gap-2 mx-auto">
              Llamar Ahora
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-600">Lo que Dicen Nuestros Clientes</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Juan Pérez', comment: '¡La mejor comida rápida que he probado! Las porciones son gigantes.', rating: '⭐⭐⭐⭐⭐' },
              { name: 'María García', comment: 'Servicio rápido y amable. Recomendado 100%', rating: '⭐⭐⭐⭐⭐' },
              { name: 'Carlos López', comment: 'Auténtico, sabroso y a buen precio. Vienes por comida, te quedas por el trato.', rating: '⭐⭐⭐⭐⭐' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-orange-500">
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-yellow-500">{testimonial.rating}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Antojitos</h3>
              <p className="text-gray-400">Tu restaurante de comida rápida con sabor casero</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#menu" className="hover:text-orange-400 transition">Menú</a></li>
                <li><a href="#nosotros" className="hover:text-orange-400 transition">Nosotros</a></li>
                <li><a href="#contacto" className="hover:text-orange-400 transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Síguenos</h3>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-orange-400 transition">Facebook</a>
                <a href="#" className="hover:text-orange-400 transition">Instagram</a>
                <a href="#" className="hover:text-orange-400 transition">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Antojitos. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
