import '../Form/Form.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';


function Register({ onRegister }) {
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;

    setInputValues({ ...inputValues, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(inputValues);
  };

  return (
    <section className='form'>
      <div className='form__container'>
        <Link to='/'>
          <img className='form__logo' src={logo} alt='Логотип'></img>
        </Link>
        <h2 className='form__title'>Добро пожаловать!</h2>
        <form className='form__inputs' onSubmit={handleSubmit}>
          <div className='form__list'>
            <label className='form__item'>
              <p className='form__item-text'>Имя</p>
              <input
                className={`form__input ${
                  errors.name ? 'form__input_color-error' : ''
                }`}
                name='name'
                type='text'
                minLength='2'
                maxLength='30'
                autoComplete='name'
                placeholder='Введите имя'
                value={inputValues.name || ''}
                onChange={handleInputChange}
                required
                pattern='^[A-Za-zа-яА-ЯЁё\s\-]+$'
              />
              <p className={`form__error ${
                  errors.name ? 'form__error-display' : ''
                }`}>{errors.name}</p>
            </label>
            <label className='form__item'>
              <p className='form__item-text'>E-mail</p>
              <input
                className={`form__input ${
                  errors.email ? 'form__input_color-error' : ''
                }`}
                name='email'
                type='email'
                autoComplete='email'
                placeholder='Введите почту'
                value={inputValues.email || ''}
                onChange={handleInputChange}
                required
                pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
              />
              <p
                className={`form__error ${
                  errors.email ? 'form__error-display' : ''
                }`}
              >
                {errors.email}
              </p>
            </label>
            <label className='form__item'>
              <p className='form__item-text'>Пароль</p>
              <input
                className={`form__input ${
                  errors.password ? 'form__input_color-error' : ''
                }`}
                name='password'
                type='password'
                minLength='8'
                placeholder='Введите пароль'
                value={inputValues.password || ''}
                onChange={handleInputChange}
                required
              />
              <p
                className={`form__error ${
                  errors.password ? 'form__error-display' : ''
                }`}
              >
                {errors.password}
              </p>
            </label>
          </div>
          <button
            className={`form__button ${isValid ? '' : 'form__button_disabled'}`}
            type='submit'
            disabled={!isValid ? true : ''}
          >
            Зарегистрироваться
          </button>
        </form>
        <p className='form__text'>
          Уже зарегистрированы?
          <Link to='/signin' className='form__link'>
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
