import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { Field, Form } from 'react-final-form';
import './authModal.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthData, toggleIsModal } from '../../../../store/authSlice';
import { Navigate } from 'react-router-dom';

const AuthModal = () => {
  const auth = useSelector((state: RootState) => state.auth.user);
  const isModal = useSelector((state: RootState) => state.auth.isModal);
  const dispatch = useDispatch();

  const onSubmit = (values: {userName: string}) => {
    dispatch(setAuthData(values.userName));
    dispatch(toggleIsModal(false))
  }

  const validate = (value: string) => {
    if( !value ){
      return 'Введите имя'
    }
    else if( value.length > 30 ){
      return 'Слишком длинное'
    } 
    return undefined;
  }

  if( !isModal ){
    return <Navigate to={'/'} />
  }

  return (
    <Modal show={true}>
      <Modal.Header>
        <h2 className='auth-modal__title'>Создайте свой профиль</h2>
      </Modal.Header>
      <Form
        initialValues={ {userName: auth.name} }
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className='auth-modal__form'>
               <Field name="userName" validate={validate}>
                {({ input, meta }) => (
                  <div>
                    { meta.error && meta.touched 
                      && <p className='error-label'>{meta.error}</p> 
                      || <p className='modal-label'>Имя:</p>}
                    <input {...input} type="text" className={`add-comment__input ${meta.error && meta.touched ? 'input-error' : ''}`} />
                  </div>
                )}
              </Field>
              <button type="submit">Submit</button>
              {!auth.id && <Link to={'/'} className='auth-modal__skip'>Я просто посмотреть</Link>}
            </form>
          )
        }
      />
    </Modal>
  );
};

export default AuthModal;