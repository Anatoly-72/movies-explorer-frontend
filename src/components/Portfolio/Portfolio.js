import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            rel='noreferrer'
            href='https://github.com/Anatoly-72/how-to-learn'
            target='_blank'
          >
            Статичный сайт
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            rel='noreferrer'
            href='https://github.com/Anatoly-72/russian-travel'
            target='_blank'
          >
            Адаптивный сайт
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            rel='noreferrer'
            href='http://domainname.anatoly.nomorepartiesxyz.ru/sign-in'
            target='_blank'
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
