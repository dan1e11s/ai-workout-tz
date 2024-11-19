import { FC } from 'react';

import TimeSvg from '@assets/clock.svg?react';
import ArcherSvg from '@assets/arch.svg?react';

import styles from './index.module.css';

interface ICardProps {
  title: string;
  description: string;
  time: string;
  isButton?: boolean;
  image: string;
  when?: string;
}

const Card: FC<ICardProps> = (props) => {
  return (
    <>
      {props.when && <h2 className={styles.when}>{props.when}</h2>}
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <h3 className={props.isButton ? `${styles.first}` : ''}>
          {props.title}
        </h3>
        <p>{props.description}</p>
        <span>
          <TimeSvg /> {props.time} минут
        </span>
        {props.isButton && (
          <button>
            <ArcherSvg /> Начать
          </button>
        )}
      </div>
    </>
  );
};

export default Card;
