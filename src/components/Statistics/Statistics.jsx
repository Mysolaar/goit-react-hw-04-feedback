import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={css.statistics__container}>
            <span className={css.statistics__info}><p className={css.statistics__title}>Good:</p> <p className={css.statistics__value}>{good}</p></span>
            <span className={css.statistics__info}><p className={css.statistics__title}>Neutral:</p> <p className={css.statistics__value}>{neutral}</p></span>
            <span className={css.statistics__info}><p className={css.statistics__title}>Bad:</p> <p className={css.statistics__value}>{bad}</p></span>
            <span className={css.statistics__info}><p className={css.statistics__title}>Total:</p> <p className={css.statistics__value}>{total}</p></span>
            <span className={css.statistics__info}><p className={css.statistics__title}>Positive Feedback:</p> <p className={css.statistics__value}>{positivePercentage.toFixed(2)}%</p></span>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;