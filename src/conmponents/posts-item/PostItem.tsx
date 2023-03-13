import React from 'react';
import { PostType } from '../../types';
import './postItem.css'
import Avatar from '../ui/avatar/Avatar';
import {Link} from 'react-router-dom';

type Props = {
  post: PostType
}

const PostItem = (props: Props) => {
  const {id, image, user} = props.post

  return (
    <Link to={`/${id}`} className='post-item'>
      <div className="post-item__image-wrap">
        <img src={image} alt="" className="post-item__image" />
      </div>
      <div className="post-item__overlay">
        <div className="post-item__user">
          <p className='post-item__user-name'>{user.name}</p>
          <Avatar image={user.avatar} />
        </div>
      </div>
    </Link>
  );
};

export default PostItem;