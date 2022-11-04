import './AboutMe.css';
import pic from '../../images/pic-1.jpg';

function AboutMe() {
   return (
      <section id='about-me' className='about-me'>
         <h2 className='about-me__title'>Студент</h2>
         <div className='about-me__container'>
            <div className='about-me__info'>
               <h3 className='about-me__name'>Анатолий</h3>
               <p className='about-me__job'>Фронтенд-разработчик, 50 лет</p>
               <p className='about-me__description'>
                  Я живу в Перми. По образованию инженер-технолог. Заинтересовался программированием и решил пройти курсы Яндекс-Практикума по специальности "Веб-разработчик". Обучение очень понравилось, появилось большое желание овладеть всеми тонкостями профессии и стать востребованным специалистом.
               </p>
               <a className='about-me__link' href='https://github.com/Anatoly-72' target='_blank' rel='noreferrer'>Github</a>
            </div>
            <img className='about-me__pic' src={pic} alt='Фото' />
         </div>
      </section>
   )
}

export default AboutMe;