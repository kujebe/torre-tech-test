import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import corporatePhoto from "assets/images/corporate.png";
import { ReactComponent as LocationIcon } from "assets/images/location.svg";

import styles from "./job-card.module.scss";

const JobCard = ({ job }) => {
    console.log(job)
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.company}>
                    <div className={styles.logo}>
                        {job.organizations[0] ? <img src={job.organizations[0].picture} alt="Company logo" /> : <img src={corporatePhoto} alt="Company logo" />}
                    </div>
                    <div className={styles.company_name}>{job.organizations[0] ? job.organizations[0].name : "Company Name"}</div>
                </div>
            </div>
            <div className={styles.bottom}>
                <Link to={`job/${job.id}`} className={styles.job_title}>{job.objective}</Link>
                <div className={styles.pay}>
                    {job.compensation ?
                        <Fragment>
                            From: {job.compensation.data ? job.compensation.data.currency + job.compensation.data.minAmount : "$"}
                        </Fragment>
                        :
                        "Salary not specified"
                    }
                </div>
                <div className={styles.location}>
                    <LocationIcon />
                    <div>{job.locations.length > 0 ? job.locations.join(", ") : "Anywhere"}</div>
                </div>
            </div>
        </div>
    )
}

export default JobCard;