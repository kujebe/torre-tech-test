import React from "react";
import { Link } from "react-router-dom"

import Avatar from "components/avatar/avatar.component";

import styles from "./header.module.scss";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Link to="/">Jobs</Link>
            <Link to="/profile/jowongwrites">Profile</Link>
            <Link to="/">Company Reviews</Link>
            <Link to="/">Post Resume</Link>
            <Link to="/">Resources</Link>
            <Link to="/">Contact Us</Link>
            <Avatar />
        </div>
    )
}

export default Header;