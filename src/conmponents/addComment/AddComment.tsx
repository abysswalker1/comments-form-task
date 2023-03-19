import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field} from 'react-final-form'
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/postsSlice';
import { toggleIsModal } from '../../store/authSlice';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import './addComment.css'

const AddComment = (props: {postId: number}) => {
  const today = new Date();
  const auth = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const onSubmit = (values: any) => {
    if( !auth.id ){
      dispatch(toggleIsModal(true));
    }

    const date = values.date || today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    dispatch(addComment({postId: props.postId, text: values.text, date: date, author: auth}))
  }

  const validate = (value: string) => (value) ? undefined : 'Введите текст!';

  return (
    <div className='add-comment'>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
               <Field name="text" validate={validate}>
                {({ input, meta }) => (
                  <div className='add-comment__input-wrap'>
                    {meta.error && meta.touched && <p className='error-label'>{meta.error}</p>}
                    <input {...input} type="text" className={`add-comment__input ${meta.error && meta.touched ? 'input-error' : ''}`} />
                  </div>
                )}
              </Field>
              <Field name="date">
                {({ input }) => (
                  <div className='add-comment__input-wrap'>
                    <input {...input} type="date" />
                  </div>
                )}
              </Field>
              {(auth.id) ? <button type="submit">Submit</button> : <Link to={'/auth'} className='add-comment__redirect'>Создайте аккаунт</Link>}
            </form>
          )
        }
      />
    </div>
  );
};

export default AddComment;