import React from "react";


import LogoName from "../../images/svg/ICHGRA 5.svg";
import Home from "../../images/svg/Vector.svg";
import Search from "../../images/svg/search.svg";
import Explore from "../../images/svg/Explore.svg";
import Messanger from "../../images/svg/Messanger.svg";
import Notification from "../../images/svg/Notification.svg";
import Create from "../../images/svg/Create.svg";
import Profile from "../../images/svg/Profile.svg";

import ListItem from "./ListItem";

import styles from "./Container.module.css";

  
    function Container() {
  



        return (
            <div className={styles.container}>
                <div className={styles.container_img}>
                    <img src={LogoName} alt="logo" />
                </div>
                <div className={styles.container_list}>
                <ListItem icon={Home} textKey="home" path="/home" />
                    <ListItem icon={Search} textKey="search" path="/search" />
                    <ListItem icon={Explore} textKey="explore" path="/explore" />
                    <ListItem icon={Messanger} textKey="messages" path="/messages" />
                    <ListItem icon={Notification} textKey="notification" path="/notifications" />
                    <ListItem icon={Create} textKey="create" path="/create" />
                </div>
                <div className={styles.container_profile}>
                    <ListItem icon={Profile} textKey="profile" path="/profile" />
                </div>
             
            </div>
        );
    }

export default Container;