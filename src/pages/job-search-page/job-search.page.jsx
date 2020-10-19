import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

import Spinner from "components/spinner/spinner.component";
import JobCard from "components/job-card/job-card.component"

import styles from "./search-page.module.scss";

const SearchPage = (props) => {
    const [state, setState] = useState({
        opportunities: [],
        offset: 0,
        loading: false
    });

    const fetchOpportunities = async () => {
        try {
            setState({ ...state, loading: true })
            await fetch(`${props.apiUrl}?offset=${state.offset}&size=${props.size}&aggregate=10`, {
                method: "POST",
            })
                .then(response => response.json())
                .then(data => {
                    setState({
                        ...state,
                        opportunities: data.results,
                        pageCount: Math.ceil(data.total / data.size),
                        loading: false
                    })
                })
        }
        catch (error) {
            console.log(error);
        };
    }

    const handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * props.size);
        setState({ ...state, offset: offset });
    };

    useEffect(() => {
        fetchOpportunities();
    }, [state.offset]);


    return (
        <div className={styles.wrapper}>
            {state.loading ? (
                <Spinner />
            ) : (
                    <div className={styles.results_wrapper}>
                        <div className={styles.results_header}>
                            <h4>Open Jobs</h4>
                        </div>
                        <div className={styles.results}>
                            {state.opportunities.map(job => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>
                    </div>
                )
            }
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={styles.pagination}
                subContainerClassName={'pages pagination'}
                activeClassName={styles.active}
            />
        </div>
    )
}

export default SearchPage;

