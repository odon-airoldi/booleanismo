import { Link, useParams } from "react-router-dom"
import { useGlobal } from "../context/GlobalContext"


export default function AppProjectsPage() {

    const { dataProjects } = useGlobal()

    return (

        <div>
            <div className="grid grid-cols-4 gap-3">
                {
                    dataProjects.map(project => (
                        <div key={project.id}>
                            <div className="text-center p-3">
                                <h2 className="text-xl">{project.title}</h2>
                                <Link to={`/projects/${project.id}`}>view</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}