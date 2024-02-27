import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={css.text}>
        Good:<span>{good}</span>
      </p>
      <p className={css.text}>
        Neutral:<span>{neutral}</span>
      </p>
      <p className={css.text}>
        Bad:<span>{bad}</span>
      </p>
      <p className={css.text}>
        Total:<span>{total}</span>
      </p>
      <p className={css.text}>
        Positive feedback:<span>{positivePercentage}%</span>
      </p>
    </div>
  );
};

export default Statistics;
