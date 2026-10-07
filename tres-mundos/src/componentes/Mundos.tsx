import { useState } from 'react'
import { Link } from "react-router-dom";
import './Mundos.css'
import type { CSSProperties } from "react";

type MundoId = "automovilismo" | "community" | "software";

interface Mundo {
  id: MundoId;
  titulo: string;
  ruta: string;
  fondo: string;
  textHover: string;
}

const mundos: Mundo[] = [
  { id: "automovilismo", titulo: "Automovilismo Simracing", ruta: "/automovilismo", fondo: "/imagenes/home-desk-azul.jpg", textHover: "#cadffb" },
  { id: "software", titulo: "Software Development", ruta: "/software", fondo: "/imagenes/home-desk-verdeagua.jpg", textHover: "#e3fff6" },
  { id: "community", titulo: "Community Manager", ruta: "/community", fondo: "/imagenes/home-desk-rojo.jpg", textHover: "#fcd2d8" }
];

export default function Mundos() {
  const [activa, setActiva] = useState<MundoId | null>(null)

  return (
    <section className='mundos'>

      {/*Imagen default sin hover */}
      <img className='fondo base' src='imagenes/home-desk-verde.jpg' />

      {/* Por cada mundo */}
      {mundos.map((m) => (
        <img
          key={m.id}
          className={`fondo ${activa === m.id ? "visible" : ""}`}
          src={m.fondo}
          alt=''
        />
      ))}

      {/*textos clickeables*/}
      <div className='columnas'>
        {mundos.map((m) => (
          <div className='columna'>
            <Link
              to={m.ruta}
              className="enlace"
              style={{ "--texto-hover": m.textHover } as CSSProperties}
              onMouseEnter={() => setActiva(m.id)}
              onMouseLeave={() => setActiva(null)}
              onFocus={() => setActiva(m.id)}
              onBlur={() => setActiva(null)}
            >
              <h2>{m.titulo}</h2>
            </Link>
          </div>
        ))}
      </div>

    </section>
  )

}
