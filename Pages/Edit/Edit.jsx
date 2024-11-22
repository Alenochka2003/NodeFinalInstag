// import React from "react";
// import styles from "./Edit.module.css";
// import UserPhoto from "../../images/png/ava1.png"; 

// function Edit() {
//   return (
//     <div className={styles.container}>
//       <h3 className={styles.title}>Edit profile</h3>
//       <div className={styles.profileHeader}>
//         <img src={UserPhoto} alt="Profile" className={styles.profileImage} />
//         <div className={styles.profileInfo}>
//           <p className={styles.username}>ichschool</p>
//           <p className={styles.description}>
//             • Гарантия помощи с трудоустройством в ведущие IT-компании
//           </p>
//         </div>
//         <button className={styles.newPhotoButton}>New photo</button>
//       </div>
//       <form className={styles.form}>
//         <div className={styles.formInp}>
//           <label className={styles.label}>Username</label>
//           <input type="text" className={styles.input} placeholder="new text" />
//         </div>

//         <div className={styles.formInp}>
//         <label className={styles.label}>Website</label>
//         <input type="text" className={styles.input} placeholder="new text" />
//         </div>

//         <div className={styles.formInp}>
//         <label className={styles.label}>About</label>
//         <textarea
//           className={styles.textarea}
//           placeholder="new text"
//           maxLength="150"
//         />
//         </div>
//         <p className={styles.charCount}>136 / 150</p>

//         <button type="submit" className={styles.saveButton}>
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Edit;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { $api } from "../../utils/api.ts";
import styles from "./Edit.module.css";
import UserPhoto from "../../images/png/ava1.png";

const Edit = () => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState(UserPhoto);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUsername(userData.username);
      setBio(userData.bio);
      setWebsite(userData.website || "");
      setProfileImageUrl(userData.profile_image || UserPhoto);
    } else {
      getUserProfile();
    }
  }, []);

  const getUserProfile = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        setError("User ID not found");
        return;
      }
      const response = await $api.get(`/user/${userId}`);
      const userData = response.data;
      setUsername(userData.username);
      setBio(userData.bio);
      setWebsite(userData.website || "");
      setProfileImageUrl(userData.profile_image || UserPhoto);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      setError("Failed to load profile");
      console.error("Profile fetch error:", error);
    }
  };

  const handleImageUpload = async (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await $api.post("/upload", formData);
      const imageUrl = response.data.url;
      setProfileImageUrl(imageUrl);
    } catch (err) {
      console.error("Image upload error:", err);
      alert("Failed to upload image");
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const updatedData = { username, bio, website, profile_image: profileImageUrl };
    try {
      const response = await $api.put("/user/current", updatedData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(updatedData));
        navigate("/profile");
      } else {
        setError("Profile update failed");
      }
    } catch (error) {
      console.error("Profile update error:", error);
      setError("Profile update failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Edit profile</h3>
      <div className={styles.profileHeader}>
        <img src={profileImageUrl} alt="Profile" className={styles.profileImage} />
        <div className={styles.profileInfo}>
          <p className={styles.username}>{username || "Username"}</p>
          <p className={styles.description}>
            • Update your profile information
          </p>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className={styles.newPhotoInput}
        />
      </div>
      <form onSubmit={handleUpdateProfile} className={styles.form}>
        <div className={styles.formInp}>
          <label className={styles.label}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
            placeholder="Enter username"
          />
        </div>
        <div className={styles.formInp}>
          <label className={styles.label}>Website</label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className={styles.input}
            placeholder="Enter website"
          />
        </div>
        <div className={styles.formInp}>
          <label className={styles.label}>About</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength="150"
            className={styles.textarea}
            placeholder="Tell about yourself"
          />
        </div>
        <p className={styles.charCount}>{bio.length} / 150</p>
        {error && <p className={styles.error}>{error}</p>}
        <button
          type="submit"
          className={styles.saveButton}
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default Edit;
