
import React from 'react';
import { NotificationText } from './Notification.style';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
    <>
        {message && <NotificationText>{message}</NotificationText>}
    </>
);

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};