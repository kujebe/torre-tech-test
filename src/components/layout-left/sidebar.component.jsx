import React from "react";
import { Link } from "react-router-dom";

import logo from "assets/images/logo.png";

import styles from "./sidebar.module.scss";

const Sidebar = () => {
    return (
        <div className={styles.wrapper}>
            <Link to="/" className={styles.logo_wrapper}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </Link>
        </div>
    )
}

export default Sidebar;