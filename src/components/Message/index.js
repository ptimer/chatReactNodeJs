import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

import './Message.scss'

const Message = ({avatar, user, text, date}) => {
	return (
		<div className="message">
			<div className="message__avatar">
				<img src={avatar} alt={`Avatar ${user.fullname}`}/>

			</div>
			<div className="message__content">
				<div className="message__buble">
					<p className="message__text">{text}</p>
				</div>
				<span className="message__date">Вчера, в 12:31</span>
			</div>
		</div>
	)
}

Message.defaultProps = {
	user: {}
}

Message.propTypes = {
	avatar: PropTypes.string,
	text: PropTypes.string,
	date: PropTypes.string,
	user: PropTypes.object
};

export default Message;
