'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const salaProductos = [
  {
    id: 1,
    nombre: "Sofá Escandinavo",
    precio: "₡450.000",
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", // fondo blanco
  },
  {
    id: 2,
    nombre: "Mesa de Centro Blanca",
    precio: "₡199.900",
    imagen: "https://images.unsplash.com/photo-1633692846540-6e057998db2e?auto=format&fit=crop&w=800&q=80", // fondo blanco
  },
  {
    id: 3,
    nombre: "Sillón Relax Individual",
    precio: "₡259.000",
    imagen: "https://images.unsplash.com/photo-1588854337221-4c1dc3210f8f?auto=format&fit=crop&w=800&q=80", // fondo blanco
  },
  {
    id: 4,
    nombre: "Centro de Entretenimiento Minimal",
    precio: "₡320.500",
    imagen: "https://images.unsplash.com/photo-1598300052475-bd5d06bcb505?auto=format&fit=crop&w=800&q=80", // claro
  },
];

const SalaPage = () => {
  const [filtro, setFiltro] = useState('');

  const productosFiltrados = salaProductos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="font-poppins bg-white text-gray-900 min-h-screen flex flex-col">
      <header className="bg-black text-white flex justify-between items-center px-8 py-5 shadow-md">
        <h1 className="text-2xl font-bold text-[var(--accent)]">Muebles de Sala</h1>
        <Link href="/">
          <span className="hover:text-[var(--accent)] cursor-pointer">Volver al inicio</span>
        </Link>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gray-50 text-center border-b border-gray-200">
        <h2 className="text-4xl font-bold mb-2">Tu sala merece lo mejor</h2>
        <p className="text-gray-600">Explora nuestra selección premium de muebles para sala</p>
      </section>

      {/* Filtro */}
      <div className="flex justify-center py-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-11/12 md:w-1/2 p-3 rounded-lg border bg-gray-100 border-gray-300 focus:ring-2 focus:ring-[var(--accent)]"
        />
      </div>

      {/* Productos en lista */}
      <section className="px-6 md:px-20 pb-20 space-y-10">
        {productosFiltrados.map((producto) => (
          <Link key={producto.id} href={`/productos/${producto.id}`}>
            <div className="cursor-pointer flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
              <div className="w-full md:w-64 h-64 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">{producto.nombre}</h3>
                <p className="text-[var(--accent)] text-xl font-bold">{producto.precio}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <footer className="bg-black text-gray-400 text-center py-6 text-sm mt-auto">
        © 2025 MueblesVivo | Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default SalaPage;

