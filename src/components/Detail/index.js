import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import happy from '../../images/happy.png';
import sad from '../../images/sad.png';
import './styles.scss';

const Detail = props => {
  const { detail } = props;
  const { mood, date, message } = detail;

  return (
    <div className="detail__container">
      <img
        className="detail__mood"
        src={mood === ':)' ? happy : sad}
        alt={mood}
      />
      <div className="detail__info">
        <p className="detail__info--date">{date}</p>
        <p className="detail__info--message">{message}</p>
      </div>
      <Link to="/">
        <Button value="Go Back" className="button detail__goback-button" />
      </Link>
    </div>
  );
};

Detail.propTypes = {
  detail: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Detail;
