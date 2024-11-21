// import React from "react";
// import Ava1 from "../../images/png/ava1.png";
// import Ava2 from "../../images/png/ava2.png";
// import styles from "./MessageText.module.css";

// function MessageText() {
//   return (
//     <div className={styles.chatContainer}>
//       <div className={styles.chatContainerCont}>
//         <img src={Ava1} alt="User Avatar" className={styles.avatar} />
//         <div className={`${styles.message} ${styles.messageLeft}`}>
//           <div className={styles.messageText}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//           </div>
//         </div>
//       </div>

//       <div className={styles.chatContainerCont}>
//         <div className={`${styles.message} ${styles.messageRight}`}>
//           <div className={styles.messageText}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do Lorem ipsum dolor sit amet,
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do Lorem ipsum dolor sit amet,
            
//           </div>
//         </div>
//         <img src={Ava2} alt="User Avatar" className={styles.avatar} />
//       </div>
      
//     </div>
//   );
// }

// export default MessageText;


import { useState } from 'react';
import PropTypes from 'prop-types';
import  "./MessageText.css";


function Chat({ chat }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      sender: 'nikita',
      isUser: false,
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      sender: 'user',
      isUser: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        isUser: true,
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat">
      <div className="log_name">
           <img src={chat.avatar} alt={`${chat.name} avatar`} className="chat-avatar1" />
           <h3>{chat.name}</h3>
           </div>
      <div className="chat-header">
        <img src={chat.avatar} alt={`${chat.name} avatar`} className="chat-avatar" />
        {/* <div className='chatAll'> */}
          <h3>{chat.name}</h3>
          <p>{chat.name} · ICHgram</p>
          <button className="profile-button">View profile</button>
          </div>
        {/* </div> */}
        <div className="chat-timestamp">Jun 26, 2024, 08:49 PM.</div>
      
      {/* <div className="chat-timestamp">Jun 26, 2024, 08:49 PM.</div> */}

      <div className="messages-thread">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.isUser ? 'user-message' : 'other-message'}`}>
            {!message.isUser && <img src={chat.avatar} alt={`${message.sender} avatar`} className="message-avatar" />}
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Write message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="chat-input"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
     
    </div>
    
  );

 
}

Chat.propTypes = {
  chat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default Chat;