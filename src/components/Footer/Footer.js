import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <span className="footer__copyright">
          &copy; {new Date().getFullYear()}
        </span>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru"
              rel="noreferrer"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://github.com/Anatoly-72"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
