import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import Avatar from '../ui/avatar/Avatar';
import { toggleIsModal } from '../../store/authSlice';
import './profile.css';

const Profile = () => {
  const auth = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(auth.id)
  //   if( !auth.id ){
  //     toggleIsModal(false);
  //   }
  // },[auth])

  return (
    <Link to='/auth' className='profile'>
      { (auth.id) 
          ? <div className="profile-user" onClick={() => dispatch(toggleIsModal(true))}>
              <p className='profile-user__name'>{auth.name}</p>
              <Avatar image={auth.avatar}/>
            </div>
          : <p className="profile-register">Создать профиль</p>
      }
    </Link>
  );
};

export default Profile;