import axios from "axios";
import { createContext, useContext, useState } from "react";
import cookies from 'react-cookies';


export const PostContext = createContext();
export const usePost = () => useContext(PostContext);

const PostContextProvider = (props) => {

    const [posts, setPosts] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [selectedPost, setSelectedPost] = useState();
    const [obj, setObj] = useState({})

    const getPosts = async () => {
        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
        try {
            const postsData = await axios.get(`${URL}/post`, {
                headers: {
                    Authorization: `Bearer ${cookies.load('token')}`,
                },
            });
            setPosts(postsData.data.posts)
          
        } catch (e) {
            alert(e);
        }
    }

    const deletePost = async (id) => {
        const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
        try {
            const deletedData = await axios.delete(`${URL}/post/${id} `, {
                headers: {
                    Authorization: `Bearer ${cookies.load("token")}`,
                },
            })
            console.log(deletedData)

            alert('Post deleted');
        }
        catch (e) {
            alert(e)
        }
        getPosts()
    }




    const handleEdit = async (e) => {
        e.preventDefault();
        // const URL = process.env.REACT_APP_PORT || 'https://eman-whiteboard.herokuapp.com'
        setEditMode(false);
        getPosts()
    };

    const value = { posts, getPosts, deletePost, handleEdit, setEditMode, editMode, selectedPost, setSelectedPost ,setObj};

    return (
        <PostContext.Provider value={value}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;