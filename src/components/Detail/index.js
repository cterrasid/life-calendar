import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import happy from '../../images/happy.png';
import sad from '../../images/sad.png';
import './styles.scss';

const Detail = props => {
  const { date, mood, message } = props;

  return (
    <div className="detail__container">
      <img
        className="detail__mood"
        src={mood === ':)' ? happy : sad}
        alt={mood}
      />
      <p className="detail__date">{date}</p>
      <p className="detail__message">{message}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

Detail.propTypes = {
  mood: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Detail;
