import { Link } from 'react-router-dom';
import "../styles/Dashboard.css"
import "../styles/Button.css"
import SinglePost from './SinglePost';
import Fuji from "../img/fuji.png"


const PostCard = ({ title, body, id }) => {
  return (
    <>
      <div className="postCard">
        <h3>{title}</h3>
        <p>{body}</p>
        {/* <Link to={`/post/${id}`}>Read More</Link> */}
      </div>
        <div className='user-post-card'>
          <img className='user-post-card-image' src={Fuji}></img>
          <div className='user-post-card-text'>
            <h3>Title</h3>
            <p>Text</p>
          </div>
        </div>
    </>
  );
};
export default PostCard;
