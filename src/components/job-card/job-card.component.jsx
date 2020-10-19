import React from "react";
import { Link } from "react-router-dom";

import styles from "./job-card.module.scss";

const JobCard = ({ job }) => {
    console.log(job)
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.company}>
                    <div className={styles.logo}><img src={job.organizations[0].picture} alt="Company logo" /></div>
                    <div className={styles.company_name}>{job.organizations[0].name}</div>
                </div>
            </div>
            <div className={styles.bottom}>
                <Link to={`job/${job.id}`} className={styles.job_title}>{job.objective}</Link>
            </div>
        </div>
    )
}

export default JobCard;