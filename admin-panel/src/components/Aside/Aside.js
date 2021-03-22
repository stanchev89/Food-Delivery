import './Aside.css';
import { Link } from 'react-router-dom'
function Aside(props) {
    const options = props.options;

    return (
        options
            ? <aside className="aside">

                <ul>
                    {
                        Object.entries(options).map(([option, route]) => {
                            return (<li key={option}>
                                <Link to={route}><p>{option}</p></Link>
                            </li>)
                        })

                    }
                </ul>


            </aside>
            : null
    )
}

export default Aside;