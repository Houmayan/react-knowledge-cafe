import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';
const Bookmarks = ({bookmarks,marksAsRead}) => {

    return (
        <div className="md:w-1/3 m-5 rounded-xl bg-slate-300">
            <p>Reading Time: {marksAsRead}</p>
            <h1 className="text-center mt-2 ">Bookmarks: {bookmarks.length}</h1>
            {
            bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}  ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
  }

export default Bookmarks;