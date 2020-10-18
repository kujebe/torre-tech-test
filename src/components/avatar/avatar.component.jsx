import React from "react";
import { Link } from "react-router-dom";

import user from "assets/images/user.jpg";

import styles from "./avatar.module.scss";

const Avatar = () => {
    return (
        <Link to="/profile/jowongwrites" className={styles.wrapper}>
            <img src={user} alt="User Avatar" />
        </Link>
    )
}
export default Avatar;