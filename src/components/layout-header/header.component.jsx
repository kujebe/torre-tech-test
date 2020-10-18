import React from "react";

import Avatar from "components/avatar/avatar.component";

import styles from "./header.module.scss";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <a href="/">Jobs</a>
            <a href="/">Workers</a>
            <a href="/">Company Reviews</a>
            <a href="/">Post Resume</a>
            <a href="/">Resources</a>
            <a href="/">Contact Us</a>
            <Avatar />
        </div>
    )
}

export default Header;