import PropTypes from "prop-types";
import css from "./AppFeedback.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.feedback__box}>
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={onLeaveFeedback}
                    className={css.feedback__button}
                    name={option}
                >
                    {option}
                </button>
            ))}
        </div>

    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};