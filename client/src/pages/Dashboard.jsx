import React, { useState, useEffect } from 'react';
import UserPosts from '../component/UserPosts';
import UserCard from '../component/UserCard';
import { useAuth } from '../context/authContext';
import "../styles/Dashboard.css"
import ProfilePic from "../img/worfie.jpg"
import Fuji from "../img/fuji.png"
import PostEdit from '../component/PostEdit';
import { Button } from '../component/Button';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const [post, setPost] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const getPost = async () => {
    try {
      const response = await fetch("http://localhost:8080/post_table");
      const jsonData = await response.json();
      console.log(jsonData);
      setPost(jsonData.rows);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePostButton = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      const slug = title.toLowerCase().replace(/\s+/g, '-'); // Generate slug from title
      const body = { description, title, slug ,body:description};
      const response = await fetch("http://localhost:8080/post_table", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        // If the response is successful, update the post state with the new post
        const jsonData = await response.json();
        setPost([...post, jsonData]);
        // Clear the description and title input fields after posting
        setDescription("");
        setTitle("");
      } else {
        console.error("Failed to add post");
      }
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <div className="card-header">
          {/* <img src={ProfilePic} alt="wolf" /> */}
        </div>
        <div className="card-body">
          <p>{user}</p>
          <p>@MarioLuigi</p>
          <div>
            <p>Princess Saver. Guardian of the galaxy</p>
          </div>
        </div>
      </div>
      <form onSubmit={handlePostButton}>
        <div className="add-post">
          <p>Title</p>
          <input
            type="text"
            className="add-post-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <PostEdit
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ height: '100px' }}
          />
          <button className="post-btn" type="submit">
            Post
          </button>
        </div>
      </form>
      <div className="post-area">
        <UserPosts />
      </div>
    </>
  );
};

export default Dashboard;
