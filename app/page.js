'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MueblesVivo = () => {
  const [agregado, setAgregado] = useState(null);
  const [chatVisible, setChatVisible] = useState(false);
  const [filteredProductos, setFilteredProductos] = useState([]);

  const handleAgregar = (nombre) => {
    setAgregado(nombre);
    setTimeout(() => {
      setAgregado(null);
    }, 2000);
  };

  const handleChatSearch = (query) => {
    const results = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProductos(results);
  };

  return (
    <div className="font-poppins bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black dark:bg-gray-800 text-white flex justify-between items-center px-8 py-5 shadow-md">
        <h1 className="text-2xl font-bold text-[var(--accent)]">Muebles</h1>
        <nav className="space-x-6 text-sm">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Inicio</Link>
          <Link href="/sala" className="hover:text-[var(--accent)] transition-colors">Sala</Link>
          <Link href="/dormitorio" className="hover:text-[var(--accent)] transition-colors">Dormitorio</Link>
          <Link href="/decoracion" className="hover:text-[var(--accent)] transition-colors">Decoración</Link>
          <Link href="/ofertas" className="hover:text-[var(--accent)] transition-colors">Ofertas</Link>
        </nav>
        <Link href="/login">
          <button className="bg-[var(--accent)] text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors">
            Iniciar sesión/Registrarse
          </button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 via-white to-orange-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-24 text-center relative overflow-hidden transition-all">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">Muebles</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Descubre muebles únicos para cada rincón de tu hogar
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-orange-50 to-transparent dark:via-gray-700 animate-[gradientMove_6s_infinite_alternate] opacity-30" />
      </section>

      {/* Buscador */}
      <div className="flex justify-center py-8 bg-white dark:bg-gray-800 shadow-inner transition-all">
        <input
          type="text"
          placeholder="Buscar muebles, decoración, ofertas..."
          className="w-3/4 md:w-2/4 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
        />
      </div>

      {/* Productos */}
      <section className="flex-grow p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productos.map((producto) => (
          <Link key={producto.id} href={`/productos/${producto.id}`}>
            <div className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-lg card-hover overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div
                className="w-full h-56 bg-gray-200 dark:bg-gray-700"
                style={{
                  backgroundImage: `url(${producto.imagen || '/placeholder.jpg'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="p-5 text-center flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-xl font-semibold mb-2">{producto.nombre}</h4>
                  <p className="text-[var(--accent)] font-bold text-lg">{producto.precio}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Chatbot Button & Box */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setChatVisible(!chatVisible)}
          className="bg-[var(--accent)] hover:bg-orange-500 text-white p-3 rounded-full shadow-lg focus:outline-none transition-transform transform hover:scale-110"
          title="¿Necesitas ayuda?"
        >
          💬
        </button>

        {chatVisible && (
          <div className="mt-4 w-80 bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-lg p-4">
            <h4 className="text-lg font-semibold mb-2">Asistente Virtual</h4>
            <p className="text-sm mb-2">¿Qué estás buscando? Escribe una palabra clave como "sofá", "mesa", "oferta"...</p>
            <input
              type="text"
              placeholder="Buscar con el bot..."
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none mb-2"
              onChange={(e) => handleChatSearch(e.target.value)}
            />
            {filteredProductos.length > 0 ? (
              <ul className="text-sm max-h-40 overflow-y-auto">
                {filteredProductos.map((p) => (
                  <li key={p.id} className="py-1 border-b border-gray-200 dark:border-gray-700">
                    <Link href={`/productos/${p.id}`} className="text-[var(--accent)] hover:underline">
                      {p.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-gray-500">No se encontraron coincidencias.</p>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black dark:bg-gray-800 text-gray-400 text-center py-6 mt-12 text-sm">
        © 2025 MueblesVivo | Todos los derechos reservados.
      </footer>
    </div>
  );
};

// Lista de productos
const productos = [
  {
    id: 1,
    nombre: "Aparador Kolina 2 puertas 3 cajones",
    precio: "₡289.900",
    imagen: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    nombre: "Sofá elegante L-Shape",
    precio: "₡395.000",
    imagen: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    nombre: "Silla minimalista beige",
    precio: "₡89.000",
    imagen: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    nombre: "Mesa comedor 6 puestos",
    precio: "₡249.900",
    imagen: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=700&q=80",
  }
];

export default MueblesVivo;

