import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
import Bookmark from './components/Bookmark/Bookmark'

function App() {
const [bookmarks,setBookmarks] = useState([]);
const [marksAsRead,setMarksAsRead] =useState(0);

const handleAddtoBookmark = (blog)=>{
  const newBookmark = [...bookmarks,blog]
  setBookmarks(newBookmark);
}

const handleMarkAsRead=(time,id)=>{
  const newTime = marksAsRead + time;
  setMarksAsRead(newTime);
  const remainingBookmarks = bookmarks.filter(bookmark=> bookmark.id != id);
  setBookmarks(remainingBookmarks);
  console.log('remove',id);
}
  return (
    <>
      
     <Header ></Header>
     <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddtoBookmark={handleAddtoBookmark} ></Blogs>
      <Bookmarks marksAsRead={marksAsRead} bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
