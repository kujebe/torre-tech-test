import React from 'react';
import { Switch, Route } from "react-router-dom";
import { SWRConfig } from "swr";

import Layout from "components/layout/layout.component"
import SearchDetailsPage from "pages/job-search-page/job-search.page.jsx";
import UserProfilePage from "pages/user-profile-page/user-profile.page.jsx";
import JobDetailsPage from "pages/job-details-page/job-details.page.jsx";

const SEARCH_API_URL = "https://search.torre.co";
const BIO_API_URL = " https://torre.bio/api/bios";
const JOB_API_URL = "https://torre.co/api/opportunities"

const fetcher = (...args) => fetch(...args).then((response) => response.json());

function App() {
  return (
    <Layout>

      <SWRConfig value={{ fetcher }}>
        <Switch>
          <Route exact path="/">
            <SearchDetailsPage
              apiUrl={`${SEARCH_API_URL}/opportunities/_search/`}
              size={20} />
          </Route>
          <Route exact path="/job/:id">
            <JobDetailsPage
              apiUrl={`${JOB_API_URL}/`} />
          </Route>
          <Route path="/profile/:id">
            <UserProfilePage
              apiUrl={`${BIO_API_URL}/`} />
          </Route>
        </Switch>
      </SWRConfig>
    </Layout>
  );
}

export default App;
