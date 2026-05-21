import { Link } from 'react-router-dom'
import { useGlobal } from '../context/GlobalContext'


export default function AppHeader() {

    const { saluto } = useGlobal()

    return (
        <header className="font-bold">
            <Link to="/">
                Booleanismo
            </Link>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            {
                saluto
            }
        </header>
    )

}