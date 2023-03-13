import React from 'react';
import {useParams, Link} from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import './currentPostModal.css'
import Avatar from '../avatar/Avatar';

const CurrentPostModal = () => {
  const { postId = 0 } = useParams();
  const currentPost = useSelector((state: RootState) => {
    return state.posts.postsList.find(item => item.id === +postId)
  })

  return (
      <Modal
        show={ (currentPost) ? true : false }
        backdrop="static"
        size='lg'
      >
        <Modal.Header>
          <h3 className="current-post__text">{}</h3>
          <div className="current-post__user">
            <p className='current-post__user-name'>
              {currentPost?.user.name}
            </p>
            <Avatar image={currentPost?.user.avatar}/>
          </div>
        </Modal.Header>

        <div className="current-post__image-wrap">
          <img src={currentPost?.image} className="current-post__image" />
        </div>

        <div className="current-post__comments">
          <h2 className="current-post__comments-title">Комментарии {currentPost?.comments.length}</h2>
        </div>

        <Link to='/'>
          Close
        </Link>
      </Modal>
  );
};

export default CurrentPostModal;