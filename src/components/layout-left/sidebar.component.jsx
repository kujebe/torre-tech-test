import React from "react";

import logo from "assets/images/logo.png";

import styles from "./sidebar.module.scss";

const Sidebar = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo_wrapper}>
                <img src={logo} alt="Logo" className={styles.logo} />
            </div>
        </div>
    )
}

export default Sidebar;