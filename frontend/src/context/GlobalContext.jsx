import { createContext, useContext } from 'react'

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

    const saluto = 'ciao'

    return (

        /*
            GlobalContext.Provider rende disponibili i dati a tutti i componenti figli.
            value={} contiene ciò che vuoi condividere globalmente.
        */
        <GlobalContext.Provider
            value={{
                saluto
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