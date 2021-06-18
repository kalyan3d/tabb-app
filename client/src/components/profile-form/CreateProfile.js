import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fragment } from "react";

const CreateProfile = (props) => {
  const [formData, setFormData] = useState({
    studio: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    githubusername: "",
    youtube: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  });

  const {
    studio,
    website,
    location,
    status,
    skills,
    bio,
    githubusername,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = formData;

  return (
    <Fragment>
      <h1 className="text-primary">Create your profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required fields</small>
      <form>
        <div className="row">
          <div className="col">
            <h4>Personal information</h4>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                  />
                  <label for="firstName">First Name</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                  />
                  <label for="lastName">Last Name</label>
                </div>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email address"
              />
              <label for="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="confirmEmail"
                placeholder="Confirm email address"
              />
              <label for="confirmEmail">Confirm email address</label>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="dateOfBirth"
                    placeholder="Date of birth"
                  />
                  <label for="dateOfBirth">Date of birth</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="gender"
                    placeholder="Gender"
                  />
                  <label for="lastName">Gender</label>
                </div>
              </div>
            </div>
            <h4>Educational information</h4>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="qualification"
                    placeholder="Qualification"
                  />
                  <label for="qualification">Qualification</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="yearOfPassing"
                    placeholder="Year of passing"
                  />
                  <label for="yearOfPassing">Year of passing</label>
                </div>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="college"
                placeholder="College"
              />
              <label for="college">College</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="noFormalEducation"
              />
              <label class="form-check-label" for="noFormalEducation">
                No formal education in arts
              </label>
            </div>
            <h4>Professional information</h4>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="studio"
                    placeholder="studio"
                  />
                  <label for="studio">Studio</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="medium"
                    placeholder="Medium"
                  />
                  <label for="medium">Medium</label>
                </div>
              </div>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="website"
                placeholder="Website"
              />
              <label for="website">Website</label>
            </div>
          </div>
          <div className="col">
            <h4>Address for communication</h4>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
              />
              <label for="address">Address</label>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="City"
                  />
                  <label for="city">City</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="State"
                  />
                  <label for="state">State</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="Country"
                  />
                  <label for="country">Country</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="zipcode"
                    placeholder="Zipcode"
                  />
                  <label for="zipcode">Zipcode</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Phone"
                  />
                  <label for="phone">Phone</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="whatsapp"
                    placeholder="Whatsapp"
                  />
                  <label for="whatsapp">Whatsapp</label>
                </div>
              </div>
            </div>
            <h4>Address for communication</h4>
            <div class="input-group mb-3">
              <input
                type="file"
                class="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Upload"
              />
              <button
                class="btn btn-secondary"
                type="button"
                id="inputGroupFileAddon04"
              >
                Button
              </button>
            </div>
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="About you"
                id="aboutYou"
              ></textarea>
              <label for="aboutYou">About you</label>
            </div>
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="Shows / Camps / Achivements"
                id="shows"
              ></textarea>
              <label for="aboutYou">Shows / Camps / Achivements</label>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
