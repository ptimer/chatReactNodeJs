import React from 'react';
import classNames from 'classnames';

import { Time, IconReaded } from '../'

import './DialogItem.scss'

const DialogItem = ({
  user,
  message,
  isMe,
  unreaded
}) => (
    <div
      className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline})}>
      <div className="dialogs__item-avatar">
        <img src="https://i.pinimg.com/736x/63/4a/6c/634a6c2dc8f5579b3fc1d0147da85b27.jpg" alt="Item" />
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
          {isMe && <IconReaded isMe={isMe} isReaded={false} />}
          {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? "+9" : unreaded}</div>}
        </div>
      </div>
    </div>
);

export default DialogItem;