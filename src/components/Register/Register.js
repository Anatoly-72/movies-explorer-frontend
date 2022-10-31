import "../Form/Form.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="form">
      <div className="form__container">
        <Link to="/">
          <img className="form__logo" src={logo} alt="Логотип"></img>
        </Link>
        <h2 className="form__title">Добро пожаловать!</h2>
        <form className="form__inputs">
          <div className="form__list">
            <label className="form__item">
              <p className="form__item-text">Имя</p>
              <input
                className="form__input"
                name="name"
                type="text"
                minLength="2"
                maxLength="30"
                required
              />
              <p className="form__error">Что-то пошло не так...</p>
            </label>
            <label className="form__item">
              <p className="form__item-text">E-mail</p>
              <input
                className="form__input"
                name="name"
                type="email"
                required
              />
              <p className="form__error">Что-то пошло не так...</p>
            </label>
            <label className="form__item">
              <p className="form__item-text">Пароль</p>
              <input
                className="form__input form__input_color-error"
                name="password"
                type="password"
                minLength="8"
                required
              />
              <p className="form__error form__error-display">Что-то пошло не так...</p>
            </label>
          </div>
          <button
            className='form__button'
            type="submit"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="form__text">
          Уже зарегистрированы?
          <Link to="/signin" className="form__link">Войти</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
