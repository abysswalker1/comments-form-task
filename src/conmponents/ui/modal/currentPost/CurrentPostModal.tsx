import React, { useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import './currentPostModal.css'
import Avatar from '../../avatar/Avatar';
import Comment from '../comment/Comment';
import { setCurrentPost } from '../../../../store/postsSlice';
import AddComment from '../../../addComment/AddComment';

const CurrentPostModal = () => {
  const { postId = 0 } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if( postId ){
      dispatch(setCurrentPost(+postId))
    }
  },[postId])

  const currentPost = useSelector((state: RootState) => state.posts.currentPost);

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

        <AddComment postId={currentPost?.id || 0}/>

        <div className="current-post__comments">
          <h2 className="current-post__comments-title">Комментарии {currentPost?.comments.length}</h2>
          <div className="current-post__comments-list">
            {currentPost?.comments.map((item, index) => <Comment comment={item} index={index}/>)}
          </div>
        </div>

        <Link to='/' className='current-post__close'>
          <i className="bi bi-arrow-left"></i>
        </Link>
      </Modal>
  );
};

export default CurrentPostModal;