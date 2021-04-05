import './ProfileInfo.css';
import {useState} from 'react';
import userService from "../../../services/userService";

const ProfileInfo = ({user, setUser, setNotification}) => {
    const [editMode, setEditMode] = useState(false)
    const editModeToggle = () => {
        setEditMode(prev => !prev)
    };

    const checkForMinLength = (str, count) => {
        if (str.length < count) {
            const notification = {
                message: `Твърде малко символа - "${str}". Трябва да бъде минимум ${count}.`,
                type: 'error'
            }
            setNotification(notification);
            return Promise.reject('not enough symbols')
        }
        return Promise.resolve()
    }

    const editUserInfoHandler = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const newData = {};
        let invalidInputData = false;
        if (username !== user.username) {
           await checkForMinLength(username, 3)
                .then(() => {
                    newData.username = username
                })
                .catch(() => invalidInputData = true);
            if(invalidInputData) return
        }
        if (phone !== user.phone) {
           await checkForMinLength(phone, 5)
                .then(() => newData.phone = phone)
                .catch(() => invalidInputData = true);
            if(invalidInputData) return
        }
        if (email !== user.email) {
           await checkForMinLength(email, 6)
                .then(() => newData.email = email)
                .catch(() => invalidInputData = true);
            if(invalidInputData) return
        }
        if (Object.keys(newData).length === 0) {
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
                };
                setNotification(notification);
                setUser(res);
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
