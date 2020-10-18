import React from "react";
import useSWR from 'swr'
import { useParams } from "react-router-dom";

import Spinner from "components/spinner/spinner.component";


const JobDetailsPage = (props) => {

    const { id } = useParams();
    console.log(id);

    const { data, error } = useSWR(
        props.apiUrl + id
    );

    if (error) return <div>failed to load</div>;
    if (!data) return <Spinner />;
    return <div>{data.id}</div>

}

export default JobDetailsPage;