import { Link } from 'react-router-dom'
import { useGlobal } from '../context/GlobalContext'


export default function AppHeader() {

    const { hour, minute, second } = useGlobal()

    return (
        <header className="flex">
            <Link to="/" className="p-3">
                Booleanismo
            </Link>
            <nav>
                <ul className="flex">
                    <li><Link to="/" className="flex-auto block p-3">Home</Link></li>
                    <li><Link to="/projects" className="flex-auto block p-3">Projects</Link></li>
                    <li><Link to="/contact" className="flex-auto block p-3">Contact</Link></li>
                </ul>
            </nav>
            <div className="absolute right-0">
                <div className="d-flex text-8xl">
                    <span>{hour}</span><span>{minute}</span><span>{second}</span>
                </div>
            </div>
        </header>
    )

}