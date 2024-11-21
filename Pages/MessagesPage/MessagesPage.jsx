import React from "react";
import MessageText from "./MessageText";
import { useState } from 'react';
import "./MessagePage.css";


import avatar2 from './Avatar2.svg';
import avatar1 from './Avatar1.svg';

function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const chats = [
    { id: 1, name: 'nikita', lastMessage: 'Nikita sent a message...', time: '2 wek', avatar: avatar2 },
    { id: 2, name: 'sashaa', lastMessage: 'Sashaa sent a message...', time: '2 wek', avatar: avatar1 }
  ];

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="messages">
      <div className="chat-list">
        <h2>itcareerhub</h2>
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${selectedChat === chat ? 'selected' : ''}`}
            onClick={() => handleSelectChat(chat)}
          >
            <img src={chat.avatar} alt={`${chat.name} avatar`} className="avatar" />
            <div className="chat_info">
              <p className="chat_name">{chat.name}</p>
             
        
              <p className="chat-lastMessage">{chat.lastMessage}</p>
              <span className="chat-time">{chat.time}</span>
              </div>
          </div>
        ))}
      </div>
      {selectedChat && <MessageText chat={selectedChat} />}
      
    </div>

    
  );
}

  

// function MessagesPage() {
//   return (
//     <div className={styles.container}>
//       <ItCareer />
//       <div className={styles.message}>
//         <div className={styles.message_up}>
//           <div className={styles.message_img}>
//             <img src={Nik} alt="avatar" />
//           </div>
//           <div className={styles.message_content}>
//             <p className="p_16Bold">nikita</p>
//           </div>
//         </div>
//         <div className={styles.message_down}>
//           <div className={styles.message_avatar}>
//             <div className={styles.message_avatar_img}>
//               <img src={Nik} alt="avatar" />
//             </div>
//             <div className={styles.message_avatar_name}>
//               <h3 className="h3">nikita</h3>
//               <p className="p_14SmallGrey">nikiita · ICHgram</p>
//             </div>
//             <div className={styles.message_avatar_btn}>
//               <Link className={styles.message_avatar_Link}>
//                 <p>View profile</p>
//               </Link>
//             </div>
//           </div>
//           <div className={styles.message_down_time}>
//             <p className="p_12SmallGrey">Jun 26, 2024, 08:49 PM.</p>
//           </div>
//           <div className={styles.message_mess}>
//             <MessageText />
//           </div>
//           <div className={styles.message_write}>
//             <input type="text" className="p_14Small" placeholder="Write message" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default MessagesPage;
