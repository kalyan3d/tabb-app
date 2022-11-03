import React, { Fragment, useEffect } from "react";
import { Spinner } from "../layout/Spinner";

const Profile = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="row">Profile page</div>
    </Fragment>
  );
};

export default Profile;
