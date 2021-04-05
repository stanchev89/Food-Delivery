import './ProfileInfo.css';
import {useState} from 'react';
import userService from "../../../services/userService";

const ProfileInfo = ({user, setUser, setNotification}) => {
    const [editMode, setEditMode] = useState(false)
    const editModeToggle = () => {
        setEditMode(prev => !prev)
    }

    const editUserInfoHandler = (e) => {
        e.preventDefault();
        console.log(e)
        const newData = {
            username: e.target.username.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        };
        if (newData.username === user.username && newData.email === user.email && newData.phone === user.phone) {
            return editModeToggle();
        }
        userService.editUserData(newData)
            .then(res => {
                if (res.message) {
                    const notification = {
                        message: res.message,
                        type: 'error'
                    }
                    return setNotification(notification)
                }
                const notification = {
                    message: 'Промените са запаметени.',
                    type: 'success'
                }
                setNotification(notification);
                editModeToggle();
            })
            .catch(console.error);
    };
    return (
        <article className="profile-info">
            <form className="profile-info-form" onSubmit={editUserInfoHandler}>
                <label htmlFor="username">Потребителско име</label>
                <input type="text"
                       defaultValue={user?.username}
                       name="username"
                       disabled={!editMode}
                       className={editMode ? 'editing' : ''}
                />
                <label htmlFor="email">Е-майл</label>
                <input type="email"
                       defaultValue={user?.email}
                       name="email"
                       disabled={!editMode}
                       className={editMode ? 'editing' : ''}
                />
                <label htmlFor="phone">Телефон</label>
                <input type="phone"
                       defaultValue={user?.phone}
                       name="phone"
                       disabled={!editMode}
                       className={editMode ? 'editing' : ''}
                />
                <article className="profile-info-form-btn-wrapper">
                    <button className={!editMode ? "profile-form-btn edit" : "profile-form-btn back"}
                            type="button"
                            onClick={editModeToggle}
                    >{editMode ? "Назад" : "Редактирай"}
                    </button>
                    {
                        editMode
                            ? <button
                                type="submit"
                                className="profile-form-btn"
                            >Потвърди
                            </button>
                            : null
                    }
                </article>
            </form>

        </article>
    )
}

export default ProfileInfo;
