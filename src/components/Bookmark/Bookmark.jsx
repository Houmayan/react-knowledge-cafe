import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 rounded-xl p-4 m-4'>
            <h3>{title}</h3>
            {/* <p>Reading Time: {marksAsRead}</p> */}
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
  }

export default Bookmark;