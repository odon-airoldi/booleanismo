import { Link } from 'react-router-dom'
import { useGlobal } from '../context/GlobalContext'
import AppTime from './AppTime'
import { useState, useEffect } from 'react'


export default function AppHeader() {


    const { dataWeather } = useGlobal()

    return (
        <header className="flex">
            <Link to="/" className="p-3">
                Odon Airoldi
            </Link>
            <nav>
                <ul className="flex items-center">
                    <li><Link to="/" className="flex-auto block p-3">Home</Link></li>
                    <li><Link to="/projects" className="flex-auto block p-3">Projects</Link></li>
                    <li><Link to="/contact" className="flex-auto block p-3">Contact</Link></li>
                    <li>
                        {dataWeather.name && <div className="flex items-center p-3">{dataWeather.name} {dataWeather.main?.temp} C° <img className="w-[35px] h-[35px]" src={`https://openweathermap.org/payload/api/media/file/${dataWeather.weather[0]?.icon}.png`} /></div>}
                    </li>
                </ul>
            </nav>
            <AppTime />
        </header>
    )

}