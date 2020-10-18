import React from "react";

import Sidebar from "components/layout-left/sidebar.component";
import Header from "components/layout-header/header.component";

import styles from "./layout.module.scss"

const Layout = ({ children }) => (
    <div className={styles.container}>
        <Sidebar />
        <div className={styles.main_wrapper}>
            <Header />
            {children}
        </div>
    </div>
);

export default Layout;