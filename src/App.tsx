import './App.css';
import PostsList from './conmponents/posts/PostsList';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import CurrentPostModal from './conmponents/ui/modal/currentPost/CurrentPostModal';
import AuthModal from './conmponents/ui/modal/auth/AuthModal';
import Profile from './conmponents/profile/Profile';

const App = () => {

  return (
    <div className="app">
      <h1 className="app-title">DoomScrolling <i className="bi bi-file-arrow-down"></i></h1>
      <BrowserRouter>
        <PostsList />
        <Routes>
          <Route path='/' element={<></>}></Route>
          <Route path='/:postId' element={<CurrentPostModal />} ></Route>
          <Route path='/auth' element={<AuthModal />}></Route>
        </Routes>
        <Profile />
      </BrowserRouter>
    </div>
  );
}

export default App;
