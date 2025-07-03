'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const productos = [
  {
    id: 1,
    nombre: "Aparador Kolina 2 puertas 3 cajones 170x45x75cm",
    descripcion: "Este aparador moderno ofrece un diseño elegante con amplio espacio de almacenamiento. Ideal para salas, comedores o espacios de oficina.",
    precio: "₡289.900",
    imagen: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    dimensiones: "170x45x75cm",
    sku: "3048123",
    marca: "Kolina",
    material: "Madera MDF / Acabado mate",
    color: "Blanco con roble claro",
  },
  // Puedes agregar más productos aquí
];

// Esta función indica a Next.js qué páginas generar estáticamente
export async function generateStaticParams() {
  return productos.map(producto => ({
    id: producto.id.toString(),
  }));
}

const ProductoDetalle = ({ params }) => {
  const router = useRouter();
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const productoId = Number(params.id);
  const producto = productos.find(p => p.id === productoId);

  if (!producto) {
    return (
      <div className="p-10 text-center text-gray-600 dark:text-gray-300">
        Producto no encontrado.
      </div>
    );
  }

  const handleAgregarCarrito = () => {
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-poppins transition-colors duration-500 px-4 py-10 md:px-16">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 bg-orange-100 py-2 px-5 rounded-full shadow-sm
          hover:bg-orange-200 hover:text-orange-700 transition-colors duration-300
          focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2
          mb-8"
        aria-label="Volver"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Volver
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden p-6 md:p-10">
        <div className="w-full h-[400px] md:h-auto overflow-hidden rounded-xl">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {producto.nombre}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {producto.descripcion}
            </p>

            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
              <li><span className="font-semibold">Dimensiones:</span> {producto.dimensiones}</li>
              <li><span className="font-semibold">SKU:</span> {producto.sku}</li>
              <li><span className="font-semibold">Marca:</span> {producto.marca}</li>
              <li><span className="font-semibold">Material:</span> {producto.material}</li>
              <li><span className="font-semibold">Color:</span> {producto.color}</li>
            </ul>
          </div>

          <div className="mt-8 space-y-4">
            <div className="text-3xl font-bold text-[var(--accent)]">{producto.precio}</div>

            <div className="flex items-center gap-4">
              <label
                htmlFor="cantidad"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Cantidad:
              </label>
              <input
                id="cantidad"
                type="number"
                min="1"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
                className="w-24 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-center focus:ring-2 focus:ring-[var(--accent)]"
              />
            </div>

            <button
              onClick={handleAgregarCarrito}
              className="w-full bg-[var(--accent)] hover:bg-orange-500 text-white py-3 px-6 rounded-xl text-lg font-medium transition-all shadow-md hover:shadow-xl"
            >
              Agregar al carrito
            </button>

            {agregado && (
              <div className="text-green-500 text-sm font-semibold mt-2 animate-pulse">
                ¡Producto agregado al carrito!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
