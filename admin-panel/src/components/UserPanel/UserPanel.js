import { useEffect } from 'react';
function UserPanel(props) {

    useEffect(()=> {
        props.setAsideOptions(null);
    },[])

    return(
        // <ul>
        //     <li>
        //         <Link to="/all-users">
        //             <p>All Users</p>
        //         </Link>
        //     </li>
        // </ul>
        <h1>User Panel</h1>
    )
}

export default UserPanel;