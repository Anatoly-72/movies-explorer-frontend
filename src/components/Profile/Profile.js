import './Profile.css';
import Header from '../Header/Header';
import { useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

function Profile({ loggedIn, onSignOut, openPopup }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [lastName, setLastName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [lastEmail, setLastEmail] = useState(currentUser.email);
  const [isVisibleButton, setVisibleButton] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    mainApi
      .updateUserInfo({ name, email })
      .then(() => {
        setVisibleButton(false);
        setLastName(name);
        setLastEmail(email);
        openPopup('Данные успешно изменены!');
      })
      .catch((err) => {
        openPopup(`Что-то пошло не так! ${err}`);
      });
  };

  function handleNameChange(evt) {
    const value = evt.target.value;
    setName(value);

    if (value !== lastName) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  }

  function handleEmailChange(evt) {
    const value = evt.target.value;
    setEmail(value);

    if (value !== lastEmail) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='profile'>
        <h3 className='profile__title'>Привет, {name}!</h3>
        <form className='profile__form' onSubmit={handleSubmit}>
          <div className='profile__field'>
            <label className='profile__label'>Имя</label>
            <input
              className='profile__input'
              name='name'
              type='text'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className='profile__line'></div>
          <div className='profile__field'>
            <label className='profile__label'>E-mail</label>
            <input
              className='profile__input'
              name='email'
              type='email'
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='profile__button-container'>
            <button
              className={`profile__button ${isVisibleButton? '' : 'profile__button_disabled'}`}
              type='submit'
              disabled={!isVisibleButton}
            >
              Редактировать
            </button>
            <button
              className='profile__button profile__button_type_exit'
              type='button'
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
