import { MAIN_API_URL } from './constans';

class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _handleRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // Регистрация пользователя
  registerUser({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._handleRes);
  }

  // Авторизация пользователя
  loginUser({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(this._handleRes);
  }

  // Получаем токен
  getToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleRes);
  }

  // Получаем информацию о пользователе
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleRes);
  }

  // Обновляем информацию о пользователе
  updateUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._handleRes);
  }

  // Получаем фильмы пользователя
  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleRes);
  }

  // Добавляем фильм пользователя
  addMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._handleRes);
  }

  // Удаляем фильм пользователя
  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._handleRes);
  }
  
  // Обнавляем токен
  updateToken() {
    this._headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }
}

const mainApi = new MainApi({
    url: MAIN_API_URL,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
  });

  export default mainApi;
