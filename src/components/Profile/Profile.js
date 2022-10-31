import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Profile = ({ loggedIn }) => {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='profile'>
        <h3 className='profile__title'>Привет, Анатолий!</h3>
        <form className='profile__form'>
          <div className='profile__field'>
            <label className='profile__label'>Имя</label>
            <input className='profile__input' name='name' type='text' />
          </div>
          <div className='profile__line'></div>
          <div className='profile__field'>
            <label className='profile__label'>E-mail</label>
            <input className='profile__input' name='email' type='email' />
          </div>
          <div className='profile__button-container'>
            <button
              className='profile__button profile__button_type_edit'
              type='submit'
            >
              Редактировать
            </button>
            <Link to='/'>
            <button
              className='profile__button profile__button_type_exit'
              type='button'
            >
              Выйти из аккаунта
            </button>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Profile;
