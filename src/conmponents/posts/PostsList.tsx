import React from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';
import PostItem from '../posts-item/PostItem';
import ImageGridUi from '../ui/imageGrid/ImageGrid';
import './postsList.css';

const PostsList = () => {
  const postsList = useSelector((state: RootState) => state.posts.postsList);
  const postsListJSX = postsList.map(item => <PostItem post={item} />)

  return (
    <div className='posts-list'>
      <ImageGridUi list={postsListJSX} />
    </div>
  )
};

export default PostsList;