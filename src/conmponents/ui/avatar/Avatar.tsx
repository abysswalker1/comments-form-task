import React from 'react';
import './avatar.css'
import avatar from '../../../assets/user_avatar.png'

const Avatar: React.FC<{image: string | undefined}> = ({ image }) => {
  return (
    <div className='avatar'>
      <img src={image || avatar} alt="" className="avatar-img" />
    </div>
  );
};

export default Avatar;