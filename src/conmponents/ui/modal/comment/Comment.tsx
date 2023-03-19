import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { toggleIsModal } from '../../../../store/authSlice';
import { likeComment, deleteComment } from '../../../../store/postsSlice';
import { RootState } from '../../../../store/store';
import { CommentType } from '../../../../types';
import Avatar from '../../avatar/Avatar';
import './comment.css';

type Props = {
  comment: CommentType
  index: number
}

const Comment: React.FC<Props> = ({comment, ...props}) => {
  const isModal = useSelector((state: RootState) => state.auth.isModal);
  const [yours, setYours] = React.useState(false);
  const auth = useSelector((state: RootState) => state.auth.user);
  const { user } = comment;
  const [liked, setLiked] = React.useState(false);
  const dispatch = useDispatch(); 

  useEffect(() => {
    if( comment.likes.includes(auth.id) ) {
      setLiked(true);

    } else {
      setLiked(false);
    }
  }, [comment.likes])

  useEffect(() => {
    if(auth === user){
      setYours(true);
    }
  }, [user])

  if( isModal ){
    return <Navigate to={'/auth'}/>
  }

  return (
    <div className='comment'>
      <div className="comment-head">
        <Avatar image={user.avatar} />
        <div className="comment-head__info">
          <p className="comment-name">{user.name} 
            <span className='comment-date'>{comment.date}</span> 
            {yours && <span className="comment-delite" onClick={() => dispatch(deleteComment(props.index))}><i className="bi bi-trash"></i></span>}
          </p>
          <p className="comment-text">{comment.text}</p>
          <div className="comment-likes">
            <p className={(liked ? 'you-liked' : '')}>
              {comment.likes.length}
            </p>
            <button onClick={() => {
              if( auth.id > 0 ){
                dispatch(likeComment({commentId: comment.id, likeId: auth.id}))
              } 
            }}
            >
              { (liked) 
                  ? <i className="bi bi-suit-heart-fill"></i>
                  : <i className="bi bi-suit-heart"></i>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;