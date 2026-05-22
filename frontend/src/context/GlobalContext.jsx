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


    // Qui dentro metti: variabili globali, state, funzioni, dati condivisi

    const [time, setTime] = useState(new Date())
    const hour = String(time.getHours()).padStart(2, '0')
    const minute = String(time.getMinutes()).padStart(2, '0')
    const second = String(time.getSeconds()).padStart(2, '0')


    useEffect(() => {

        const timeInterval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timeInterval)

    }, [])





    return (

        /*
            GlobalContext.Provider rende disponibili i dati a tutti i componenti figli.
            value={} contiene ciò che vuoi condividere globalmente.
        */
        <GlobalContext.Provider
            value={{
                hour, minute, second
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