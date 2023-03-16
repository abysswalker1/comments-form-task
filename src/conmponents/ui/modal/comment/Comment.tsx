import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const [yours, setYours] = React.useState(false);
  const auth = useSelector((state: RootState) => state.auth.user);
  const { user } = comment;
  const dispatch = useDispatch(); 

  useEffect(() => {
    if(auth === user){
      setYours(true);
    }
  }, [user])

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
            <p>{comment.likes.length}</p>
            <button onClick={() => dispatch(likeComment({commentId: comment.id, likeId: user.id}))}>
              <i className="bi bi-suit-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;