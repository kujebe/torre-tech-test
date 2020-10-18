import React from "react";

import user from "assets/images/user.jpg";

import styles from "./avatar.module.scss";

const Avatar = () => {
    return (
        <div className={styles.wrapper}>
            <img src={user} alt="User Avatar" />
        </div>
    )
}
export default Avatar;