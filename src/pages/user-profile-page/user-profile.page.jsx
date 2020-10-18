import React from "react";
import useSWR from 'swr'
import { useParams } from "react-router-dom";

import Spinner from "components/spinner/spinner.component";

const UserProfilePage = (props) => {

    const { username } = useParams();

    const { data, error } = useSWR(props.apiUrl + username);
    // const { data, error } = useSWR("https://torre.co/api/opportunities/8W3XEawN");

    if (error) return <div>failed to load</div>;
    if (!data) return <Spinner />;
    return <div>{data.id}</div>
}

export default UserProfilePage;