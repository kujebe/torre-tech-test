import React from 'react';
import { Switch, Route } from "react-router-dom";

import Layout from "components/layout/layout.component"
import SearchDetailsPage from "pages/job-search-page/job-search.page.jsx";
import UserProfilePage from "pages/user-profile-page/user-profile.page.jsx";
import JobDetailsPage from "pages/job-details-page/job-details.page.jsx";


function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <SearchDetailsPage />
        </Route>
        <Route path="/profile">
          <UserProfilePage />
        </Route>
        <Route exact path="/job/:id">
          <JobDetailsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
