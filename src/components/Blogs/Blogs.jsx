import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddtoBookmark,handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3  border-red-600">
      <h1>Blogs:{blogs.length}</h1>
      {blogs.map((blog) => (

        <Blog 
        key={blog.id} 
        handleMarkAsRead={handleMarkAsRead}
        handleAddtoBookmark={handleAddtoBookmark}
        blog={blog}>
        </Blog>
        
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddtoBookmark:PropTypes.func,
}

export default Blogs;
