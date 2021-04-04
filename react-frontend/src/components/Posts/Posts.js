import './Posts.css';
import {useEffect, useState} from 'react';
import postService from "../../services/postService";

export const Posts = ({user, setUser, setNotification}) => {
    const [allPosts, setAllPosts] = useState([])

    const addNewPostHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    useEffect(() => {
        postService.getPosts()
            .then(posts => {
                setAllPosts(posts)
            }).catch(console.error)
    }, [])

    return (
        <section className="posts">
            <article className="post-list">
                {
                    allPosts.length === 0
                        ? <p>Няма предишни мнения...</p>
                        : allPosts?.map(post => (
                            <h1 key={post.description}>{post.title}</h1>
                        ))
                }
            </article>
            {
                user
                    ? <article className="post-create">
                        <h3>Сподели мнение</h3>
                        <form onSubmit={addNewPostHandler} className="new-post-form">
                            <input type="text" placeholder='Заглавие' name='title'/>
                            <textarea
                                name="description"
                                placeholder="Вашето мнение..."
                                cols="30"
                                rows="10">
                            </textarea>
                            <button className='post-create-btn'>Сподели</button>
                        </form>
                    </article>
                    : null
            }

        </section>
    )
};

export default Posts;
