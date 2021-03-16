import UserPanel from './UserPanel';
import FoodPanel from './FoodPanel';
import './Aside.css'

function Aside(props) {
    return (
        <aside className="aside">
            {
                props.match.path.includes('user')
                ? <UserPanel></UserPanel>
                : <FoodPanel></FoodPanel>
            }
        </aside>
    )
}

export default Aside;