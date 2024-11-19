import Card from '../Card';

import styles from './index.module.css';

import today from '@assets/today.png';
import yesterday from '@assets/yesterday.png';
import thursday14 from '@assets/14.png';
import saturday16 from '@assets/16.png';
import monday18 from '@assets/18.png';
import wednesday20 from '@assets/20.png';
import friday22 from '@assets/22.png';
import sunday24 from '@assets/24.png';
import tuesday26 from '@assets/26.png';
import thursday28 from '@assets/28.png';

interface ICard {
  title: string;
  description: string;
  time: string;
  isButton?: boolean;
  image: string;
  when?: string;
}

const data: ICard[] = [
  {
    title: 'Сегодня',
    description: 'Комплекс ОФП для тела (корпус, кор)',
    time: '30',
    isButton: true,
    image: today,
  },
  {
    title: 'Персональная тренировка',
    description: 'Тренировка для окрепших любителей среднего уровня и выше',
    time: '15',
    image: yesterday,
    when: 'Завтра',
  },
  {
    title: 'Корпус, кор',
    description: 'Тренировка для окрепших любителей среднего уровня и выше',
    time: '25',
    image: thursday14,
    when: 'Чт, 14 ноября',
  },
  {
    title: 'Своя тренировка',
    description: 'Тренировка для окрепших любителей среднего уровня и выше',
    time: '25',
    image: saturday16,
    when: 'Сб, 16 ноября',
  },
  {
    title: 'Присед с весом',
    description: 'Тренировка для окрепших любителей среднего уровня и выше',
    time: '25',
    image: monday18,
    when: 'Пн, 18 ноября',
  },
  {
    title: 'Бегаем на дорожке',
    description: 'Тренировка для окрепших любителей среднего уровня и выше',
    time: '25',
    image: wednesday20,
    when: 'Ср, 20 ноября',
  },
  {
    title: 'Спринты',
    description: 'Тренировка для окрепших любителей среднего уровня и выше',
    time: '25',
    image: friday22,
    when: 'Пт, 22 ноября',
  },
  {
    title: 'Выносливость',
    description: 'Тренировка для окрепших любителей среднего уровня и выше',
    time: '25',
    image: sunday24,
    when: 'Вс, 24 ноября',
  },
  {
    title: 'Бегаем на дорожке',
    description: 'Тренировка для окрепших любителей среднего уровня и выше',
    time: '25',
    image: tuesday26,
    when: 'Вт, 26 ноября',
  },
  {
    title: 'Прыжки на скакалке',
    description: 'Тренировка для окрепших любителей среднего уровня и выше',
    time: '25',
    image: thursday28,
    when: 'Чт, 28 ноября',
  },
  {
    title: 'Своя тренировка',
    description: 'Тренировка для окрепших любителей среднего уровня и выше',
    time: '25',
    image: saturday16,
    when: 'Сб, 30 ноября',
  },
  {
    title: 'Прыжки на скакалке',
    description: 'Тренировка для окрепших любителей среднего уровня и выше',
    time: '25',
    image: yesterday,
    when: 'Пн, 2 декабря',
  },
];

const CardList = () => {
  return (
    <div className={styles['card-list']}>
      {data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
