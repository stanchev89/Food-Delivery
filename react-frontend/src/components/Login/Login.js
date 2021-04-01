import './Login.css';
import {FiLogIn} from "react-icons/fi";
import userService from "../../services/userService";

const Login = ({setUser, history}) => {
    const onSubmitLoginHandler = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        userService.login(username,password)
            .then(res => setUser(res))
            .then(()=> history.push('/'))
            .catch(console.error)
    }

    return (
        <section className="login">
            <FiLogIn className="login-icon" />
            <article className="login-form">
                <form onSubmit={onSubmitLoginHandler}>
                    <label htmlFor="username">
                        <input type="text" name="username" id="username" placeholder="Потребителско име" required={true}/>
                    </label>
                    <label htmlFor="password">
                        <input type="password" placeholder="Парола" name="password" id="password" required={true}/>
                    </label>
                    <button className="login-form-btn">Влез</button>
                </form>
            </article>
        </section>
    )
}
export default Login;