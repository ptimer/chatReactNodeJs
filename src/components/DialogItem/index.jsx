import React from 'react';
import classNames from 'classnames';

import { Time } from '../'

const DialogItem = ({
  user,
  message
}) => (
    <div
      className={classNames('dialogs__item', {})}>
      <div className="dialogs__item-avatar">
        <img src="https://i.pinimg.com/736x/63/4a/6c/634a6c2dc8f5579b3fc1d0147da85b27.jpg" alt="Item" avatar`} />
      </div>

      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>Федор достоевский</b>
          <span>
            <Time date={new Date()} />
          </span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>Какой-то текст сообщения а это продолжение аааа га га</p>
          {isMe && <IconReaded isMe={isMe} isReaded={lastMessage.readed} />}
          {lastMessage.undread > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {lastMessage.undread > 9 ? '+9' : lastMessage.undread}
            </div>
          )}
        </div>
      </div>
    </div>
);

export default DialogItem;