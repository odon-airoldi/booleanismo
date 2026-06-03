import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function AppProjectsPage() {

    const [dataProject, setDataProject] = useState({})

    const [imgActive, setImgActive] = useState(0)

    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
            .then(res => res.json())
            .then(data => {
                setDataProject(data)
            })
    }, [])


    function imgNav(n) {
        const length = dataProject.images?.length

        // se length non esiste esco dalla funzione
        if (!length) return

        let i = imgActive + n

        // se i supera l'ultima immagine
        if (i >= length) {
            i = 0
        }

        // se i va sotto 0
        if (i < 0) {
            i = length - 1
        }

        setImgActive(i)
    }


    return (

        <div>
            <div className="">
                <h2 className="text-8xl">{dataProject.title}</h2>

                {
                    dataProject.images &&
                    dataProject.images.map((img, i) => (
                        <div>
                            <img key={img.id} src={img.url} />
                        </div>
                    )).find((img, i) => i === imgActive)
                }
                <button onClick={() => imgNav(-1)}>Prev</button>
                <button onClick={() => imgNav(1)}>Next</button>
            </div>
        </div>

    )

}