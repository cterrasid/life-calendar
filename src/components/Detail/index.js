import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import happy from '../../images/happy.png';
import sad from '../../images/sad.png';
import './styles.scss';

const Detail = props => {
  const { detail } = props;

  return (
    <div className="detail__container">
      <img
        className="detail__mood"
        src={detail.mood === ':)' ? happy : sad}
        alt={detail.mood}
      />
      <div className="detail__info">
        <p className="detail__info--date">{detail.date}</p>
        <p className="detail__info--message">{detail.message}</p>
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
