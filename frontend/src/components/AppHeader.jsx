import { Link } from 'react-router-dom'
import { useGlobal } from '../context/GlobalContext'


export default function AppHeader() {

    const { hour, minute, second } = useGlobal()

    return (
        <header className="d-flex">
            <Link to="/">
                Booleanismo
            </Link>
            <div className="d-flex text-8xl">
                <span>{hour}</span><span>{minute}</span><span>{second}</span>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )

}