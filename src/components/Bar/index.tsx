import WorkoutSvg from '@assets/workout.svg?react';
import MenuSvg from '@assets/menu.svg?react';

import styles from './index.module.css';

const Bar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles['bar-item']}>
        <WorkoutSvg />
        <p className={styles['bar-item_text']}>Тренировки</p>
      </div>
      <div className={styles['bar-item']}>
        <MenuSvg />
        <p className={styles['bar-item_text']}>Ещё</p>
      </div>
    </div>
  );
};

export default Bar;
