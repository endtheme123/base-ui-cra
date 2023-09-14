import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';

import Blog from './blog/Blog.js';
import BlogContent from './blog/BlogContent.js';

// import gg from '../publi'
import './index.css';



export default function App() {
  const [id, setId] = useState(0);
  return (
    
      <BrowserRouter>
        <Routes>
          <Route index element={<Blog/>}></Route>
          <Route path = "/index" element={<Blog/>}></Route>
          {/* <Route path = "/About" element={<About/>}></Route> */}
          {/* <Route path = "/About" element={<Posts/>}></Route> */}
          <Route path = ":blogId" element={<BlogContent/>}></Route>
        </Routes>
      
      </BrowserRouter>
    
  );
}
