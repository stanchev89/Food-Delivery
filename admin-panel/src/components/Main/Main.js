import { Link } from 'react-router-dom'
import Aside from '../Aside'
import './Main.css'
function Main(props) {
    const mode = props.match.path.includes('food') ? 'food' : 'user';
    
    return (
        <section className="main">
            <h1>Main</h1>
        </section>
    )
}

export default Main;