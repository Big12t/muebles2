'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const salaProductos = [
  {
    id: 1,
    nombre: "Sofá Escandinavo",
    precio: "₡450.000",
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    nombre: "Mesa de Centro Blanca",
    precio: "₡199.900",
    imagen: "https://images.unsplash.com/photo-1633692846540-6e057998db2e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    nombre: "Sillón Relax Individual",
    precio: "₡259.000",
    imagen: "https://images.unsplash.com/photo-1588854337221-4c1dc3210f8f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    nombre: "Centro de Entretenimiento Minimal",
    precio: "₡320.500",
    imagen: "https://images.unsplash.com/photo-1598300052475-bd5d06bcb505?auto=format&fit=800&q=80",
  },
];

const SalaPage = () => {
  const [filtro, setFiltro] = useState('');

  const productosFiltrados = salaProductos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <style>{`
        :root {
          --main-background: #222B45; /* Azul oscuro/grisáceo del fondo principal (cuerpo de la página y buscador) */
          --header-footer-bg: #222B45; 
          --text-primary: #FFFFFF;     /* Texto blanco para la mayoría de elementos */
          --accent-orange: #f97316;    /* Naranja vibrante de acento */
          --card-bg: #1A202C;         /* Gris oscuro para las tarjetas de producto, ligeramente más oscuro que main-background */
          --card-text-light: #E2E8F0;  /* Color de texto claro para las tarjetas (sobre fondo oscuro) */
          --search-input-border: #4A5568; /* Borde gris medio para el input del buscador */
          --placeholder-text: #A0AEC0; /* Color del placeholder (gray-400) */
          --hero-text-color: #FFFFFF; /* Texto del hero en blanco */
          --footer-border-color: #4A5568; /* Color para la línea del footer */
        }
      `}</style>

      <div className="font-poppins bg-[var(--main-background)] text-[var(--text-primary)] min-h-screen flex flex-col">
        {/* Header - Ahora usa la variable correctamente definida como negro puro */}
        <header className="text-[var(--text-primary)] flex justify-between items-center px-8 py-5 shadow-md"
                style={{ backgroundColor: 'var(--header-footer-bg)' }}>
          <h1 className="text-2xl font-extrabold tracking-wide">Muebles de Sala</h1>
          <Link href="/">
            <span className="hover:text-[var(--accent-orange)] cursor-pointer font-semibold transition-colors duration-300">
              Volver al inicio
            </span>
          </Link>
        </header>

        {/* Hero Section - con fondo oscuro y texto blanco */}
        <section className="py-20 text-center border-b border-[var(--search-input-border)]"
                 style={{ backgroundColor: 'var(--main-background)' }}>
          <h2 className="text-4xl font-extrabold mb-3 tracking-tight" style={{ color: 'var(--hero-text-color)' }}>
            Tu sala merece lo mejor
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--hero-text-color)' }}>
            Explora nuestra selección premium de muebles para sala
          </p>
        </section>

        {/* Filtro */}
        <div className="flex justify-center py-8 bg-[var(--main-background)]">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="w-11/12 md:w-1/3 p-3 rounded-xl border border-[var(--search-input-border)] bg-[var(--card-bg)] text-[var(--card-text-light)] placeholder-[var(--placeholder-text)]
            focus:outline-none focus:ring-4 focus:ring-[var(--accent-orange)] focus:ring-opacity-50 transition"
            aria-label="Buscar productos"
          />
        </div>

        {/* Products List */}
        <section className="px-6 md:px-20 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {productosFiltrados.length === 0 && (
            <p className="text-center col-span-full text-[var(--text-primary)] text-lg">
              No se encontraron productos que coincidan con la búsqueda.
            </p>
          )}

          {productosFiltrados.map((producto) => (
            <Link
              key={producto.id}
              href={`/productos/${producto.id}`}
              className="group cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 border border-transparent hover:border-[var(--accent-orange)]"
              style={{ backgroundColor: 'var(--card-bg)' }}
              aria-label={`Ver detalles de ${producto.nombre}`}
            >
              <div className="w-full h-64 bg-gray-100 rounded-xl overflow-hidden mb-6 flex items-center justify-center">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl font-semibold text-[var(--card-text-light)] mb-2 text-center group-hover:text-[var(--accent-orange)] transition-colors duration-300">
                {producto.nombre}
              </h3>
              <p className="font-extrabold text-lg" style={{ color: 'var(--accent-orange)' }}>{producto.precio}</p>
            </Link>
          ))}
        </section>

        {/* Footer con línea divisoria - Ahora usa la variable correctamente definida como negro puro */}
        <footer className="text-[var(--placeholder-text)] text-center py-6 text-sm mt-auto select-none border-t border-[var(--footer-border-color)]"
                style={{ backgroundColor: 'var(--header-footer-bg)' }}>
          © 2025 MueblesVivo | Todos los derechos reservados.
        </footer>
      </div>
    </>
  );
};

export default SalaPage;