import React from 'react';
import ProfilePostCont from './ProfilePostCont'; // Убедитесь, что путь правильный
import styles from './ProfilePosts.module.css'; // Добавьте стили, если они есть

const ProfilePosts = ({ post, onClose, currentUser, onCancel, onDelete }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <ProfilePostCont post={post} currentUser={currentUser} />
        <div className={styles.actions}>
          {/* Кнопка закрытия */}
          <button onClick={onClose} className={styles.closeButton}>
            Закрыть
          </button>
          {/* Добавьте другие действия, если необходимо */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePosts;
