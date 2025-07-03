'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const salaProductos = [
  {
    id: 10,
    nombre: "Sofá Modular Oslo",
    precio: "₡499.000",
    imagen: "https://images.unsplash.com/photo-1615874959474-d8b2b95600f7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    nombre: "Centro de entretenimiento moderno",
    precio: "₡189.900",
    imagen: "https://images.unsplash.com/photo-1598300052475-bd5d06bcb505?auto=format&fit=crop&w=800&q=80",
  },
  // Agrega más productos según necesidad
];

const SalaPage = () => {
  const [filtro, setFiltro] = useState('');

  const productosFiltrados = salaProductos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="font-poppins bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col">
      <header className="bg-black text-white flex justify-between items-center px-8 py-5 shadow-md">
        <h1 className="text-2xl font-bold text-[var(--accent)]">Sala</h1>
        <Link href="/">
          <span className="hover:text-[var(--accent)] cursor-pointer">Volver al inicio</span>
        </Link>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-orange-50 via-white to-orange-50 dark:from-gray-800 dark:to-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-2">Sala</h2>
        <p className="text-gray-600 dark:text-gray-300">Confort y estilo para tu espacio favorito</p>
      </section>

      {/* Filtro */}
      <div className="flex justify-center py-6">
        <input
          type="text"
          placeholder="Filtrar por nombre..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-3/4 md:w-1/3 p-3 rounded-lg border bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[var(--accent)]"
        />
      </div>

      {/* Productos */}
      <section className="px-10 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productosFiltrados.map((producto) => (
          <Link key={producto.id} href={`/productos/${producto.id}`}>
            <div className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-transform">
              <div
                className="w-full h-56 bg-gray-200 dark:bg-gray-700"
                style={{
                  backgroundImage: `url(${producto.imagen})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="p-5 text-center">
                <h4 className="text-xl font-semibold">{producto.nombre}</h4>
                <p className="text-[var(--accent)] font-bold text-lg">{producto.precio}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <footer className="bg-black dark:bg-gray-800 text-gray-400 text-center py-6 text-sm mt-auto">
        © 2025 MueblesVivo | Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default SalaPage;
