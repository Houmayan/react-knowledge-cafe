import PropTypes from 'prop-types'; // ES6
import { FcBookmark } from 'react-icons/fc';

const Blog = ({blog,handleAddtoBookmark,handleMarkAsRead}) => {
    // console.log(blog);
    const {id,title,cover,reading_time,author_img,author,posted_date,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`The cover photo of the ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        {/* author name */}
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className='flex items-center'>
                    <p className='text-start'>{reading_time} min read</p>
                    <button onClick={()=>handleAddtoBookmark(blog)} className='text-orange-400'><FcBookmark></FcBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>{
            hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash} </a></span>)}</p>
        <button onClick={()=>handleMarkAsRead(reading_time,id)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddtoBookmark: PropTypes.func,
}
export default Blog;