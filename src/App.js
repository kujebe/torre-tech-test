import React from 'react';
import { Switch, Route } from "react-router-dom";

import Layout from "components/layout/layout.component"
import SearchDetailsPage from "pages/job-search-page/job-search.page.jsx";
import UserProfilePage from "pages/user-profile-page/user-profile.page.jsx";
import JobDetailsPage from "pages/job-details-page/job-details.page.jsx";

const API_URL = "https://search.torre.co";


function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <SearchDetailsPage
            apiUrl={`${API_URL}/opportunities/_search/`}
            size={20} />
        </Route>
        <Route path="/profile">
          <UserProfilePage
            apiUrl={`${API_URL}/people/_search/`} />
        </Route>
        <Route exact path="/job/:id">
          <JobDetailsPage
            apiUrl={`${API_URL}/opportunities/`} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
