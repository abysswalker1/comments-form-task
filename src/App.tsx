import React from 'react';
import './App.css';
import PostsList from './conmponents/posts/PostsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrentPostModal from './conmponents/ui/modal/CurrentPostModal';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <PostsList />
          <Routes>
              <Route path='/' element={<></>}></Route>
              <Route path='/:postId' element={<CurrentPostModal />} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
