import React, { useEffect, useState } from 'react'

export const Nosotros = () => {

    const [equipo, setEquipo] = useState([])

    useEffect(() => {
        //console.log("useEffect")
        obtenerDatos()
    }, [])

    const obtenerDatos = async() => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        // console.log(users)
        setEquipo(users)
    }

  return (
    <div>
        <h1>Nosotros</h1>
        <ul>
            {
                equipo.map((item, i) => (
                    <li key={item.id}>
                            {item.name} - {item.email}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
