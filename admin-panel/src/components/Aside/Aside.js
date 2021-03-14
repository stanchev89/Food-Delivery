import UserPanel from './UserPanel';
import FoodPanel from './FoodPanel';
import './Aside.css'

function Aside(props) {
    return (
        <aside className="aside">
            {
                props.selectedPanel==='user'
                ? <UserPanel></UserPanel>
                : <FoodPanel></FoodPanel>
            }
        </aside>
    )
}

export default Aside;