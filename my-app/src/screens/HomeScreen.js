import React, { useEffect, useState } from "react";
import Header from "../components/Header";

function Login() {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <Header/>
      <h2 className="d-flex justify-content-center mt-5 mb-3">
        Automatic Diet Recommendation
      </h2>
      <div className="container border rounded ">
        <form className="p-5" onSubmit={submitHandler}>
          <div class="form-group row my-3">
            <label for="inputAge" class="col-sm-2 col-form-label">
              Age
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputAge"
                placeholder="Enter The Age"
              />
            </div>
          </div>
          <div class="form-group row my-3">
            <label for="inputHeight" class="col-sm-2 col-form-label">
              Height(cm)
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputHeight"
                placeholder="Enter The Height"
              />
            </div>
          </div>
          <div class="form-group row my-3">
            <label for="inputWeight" class="col-sm-2 col-form-label">
              Weight(kg)
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputWeight"
                placeholder="Enter The Weight"
              />
            </div>
          </div>
          <fieldset class="form-group my-3">
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
              <div class="col-sm-10 d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Male
                  </label>
                </div>
                <div class="form-check mx-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="form-group my-3">
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">Activity</legend>
              <div class="col-sm-10 d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    Little/no exercise
                  </label>
                </div>
                <div class="form-check mx-1">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Light exercise
                  </label>
                </div>
                <div class="form-check mx-1">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Moderate exercise(2-4 days/week)
                  </label>
                </div>
                <div class="form-check mx-1">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Very activity(5-6 days/week)
                  </label>
                </div>
                <div class="form-check mx-1">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    Extra active(everyday)
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="form-group my-3">
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">
                Meals per day
              </legend>
              <div class="col-sm-10 d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="gridRadios1">
                    3
                  </label>
                </div>
                <div class="form-check mx-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    4
                  </label>
                </div>
                <div class="form-check mx-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label class="form-check-label" for="gridRadios2">
                    5
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">
                Generate
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
