import { createContext, useContext, useState, useEffect } from 'react'

/*
    createContext() crea un "contenitore globale" che potrà condividere dati tra componenti
    senza passare props manualmente.
*/
const GlobalContext = createContext();

/*
    Questo è il Provider. Serve ad avvolgere l'app e fornire i dati globali.
    children = tutti i componenti figli racchiusi nel provider
*/
function GlobalProvider({ children }) {


    // Orologio
    const [time, setTime] = useState(new Date())
    const hour = String(time.getHours()).padStart(2, '0')
    const minute = String(time.getMinutes()).padStart(2, '0')
    const second = String(time.getSeconds()).padStart(2, '0')

    const [dataProjects, setDataProjects] = useState([])

    // Chiamata AJAX tramite fetch API, salvo dati
    useEffect(() => {
        fetch('http://localhost:3000/projects/')
            .then(res => res.json())
            .then(data => {
                setDataProjects(data)
            })
    }, [])


    //
    const apiKey = import.meta.env.VITE_API_KEY_OWM

    const [dataWeather, setDataWeather] = useState({})

    // Chiamata AJAX tramite fetch API openweathermap

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Lecco&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(data => {
                setDataWeather(data)
            })
    }, [apiKey])


    return (

        /*
            GlobalContext.Provider rende disponibili i dati a tutti i componenti figli.
            value={} contiene ciò che vuoi condividere globalmente.
        */
        <GlobalContext.Provider
            value={{
                hour,
                minute,
                second,
                dataProjects,
                dataWeather
            }}
        >
            {children}
        </GlobalContext.Provider>

    )

}

/*
    Custom Hook personalizzato.
    Serve per usare il context più facilmente senza scrivere ogni volta:
    useContext(GlobalContext)
*/
function useGlobal() {

    // recupera i dati dal context
    const context = useContext(GlobalContext)

    // restituisce i dati
    return context

}

/*
    Esportiamo:
    - GlobalProvider per avvolgere l'app
    - useGlobal per leggere i dati globali
*/
export { GlobalProvider, useGlobal }