import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Civilizacion = () => {

    const [civilizacion, setCivilizacion] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const obtenerCivilizacion = async() => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const civilizacion = await data.json()
            setCivilizacion(civilizacion)
        }
        obtenerCivilizacion()
    }, [id])

    return (
        <div>
            <h1>Civilizacion</h1>
            <ul className="list-group">
                {
                    civilizacion ? 
                    <>
                    <li className="list-group-item">{ civilizacion.name }</li>
                    <li className="list-group-item">{ civilizacion.expansion }</li>
                    <li className="list-group-item">{ civilizacion.army_type }</li>
                    </>
                    : <li className="list-group-item">No hay tal civilización</li>
                }
            </ul>
        </div>
    )
}
