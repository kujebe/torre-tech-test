import React from "react";
import { Link } from "react-router-dom";

import Avatar from "components/avatar/avatar.component";

import styles from "./header.module.scss";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Link to="/">Jobs</Link>
            <Link to="/profile/jowongwrites">My Profile</Link>
            <Link to="/">Contact Us</Link>
            <Avatar />
        </div>
    )
}

export default Header;