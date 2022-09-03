import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Civilizaciones = () => {

  const [civilizaciones, setCivilizaciones] = useState([])

  useEffect(() => {
    obtenerCivilizaciones()
  }, [])

  const obtenerCivilizaciones = async () => {
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    const { civilizations } = await data.json()
    setCivilizaciones(civilizations)
  }

  return (
    <div>
      <h1>Civilizaciones de Age of Empire</h1>
      <ul>
        {
          civilizaciones.length > 0 ? civilizaciones.map((item) => (
            <li key={ item.id }>
              <Link to={`/civilizaciones/${ item.id }`}>
              { item.name } - <mark>{ item.army_type }</mark>
              </Link>  
            </li>
          )) : <li>No hay elementos</li>
        }
      </ul>
    </div>
  )
}
