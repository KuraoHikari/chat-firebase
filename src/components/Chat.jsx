import React from 'react';
import Messages from './Messages';
import Input from './Input';
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="icon-chat-navbar" />
          <img src={Add} alt="icon-chat-navbar" />
          <img src={More} alt="icon-chat-navbar" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
