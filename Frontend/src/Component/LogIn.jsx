import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img from '../img/Profile.jpg';
import axios from 'axios';



const LogIn = () =>{
    const [loginData, setLoginData] = useState({
      email : "",
      password : "",
    });

   const onSubmitHandler = (event) => {
     event.preventDefault();
     axios
       .post("http://localhost:5000/signin/",loginData)
       .then((res) => {
         // window.location = "http://localhost:3000/";
         if (res.data.status === "error") {
           alert(res.data.error);
         } else {
           window.location = "http://localhost:3000/dashboard";
         }
       })
       .catch((error) => {
         console.log(error.response);
       });
   };   

    const onChangeHandler = event => {
       const { value, name} = event.target;

       setLoginData((preValue) => {
            return{
                ...preValue,
                [name] : value,
            };         
       });
    };

    

    return (
      <>
        <main
          className="main d-flex w-100"
          style={{ backgroundColor: "#F5F9FC" }}
        >
          <div className="container d-flex flex-column" style={{marginBottom:"10rem"}}>
            <div className="row h-100">
              <div className="col-sm-10 col-md-8 col-lg-6  d-table h-100 mx-auto my-4">
                <div className="d-table-cell align-middle">
                  <div className="text-center mt-3">
                    <h1 className="h2">Welcome</h1>
                    <p className="lead mb-4">
                      LogIn in to your account to continue
                    </p>
                  </div>
                  <div className="shadow bg-white rounded">
                    <div className="card">
                      <div className="card-body">
                        <div className="m-sm-4">
                          <div className="text-center">
                            <img
                              src={img}
                              className="img-fluid rounded-circle"
                              alt="profile"
                              width="80"
                              height="80"
                            />
                          </div>
                          <form onSubmit={(event) => onSubmitHandler(event)}>
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                className="form-control form-control-lg"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={onChangeHandler}
                                value={loginData.email}
                                autoComplete="off"
                              />
                            </div>
                            <div className="form-group">
                              <label>Password</label>
                              <input
                                className="form-control form-control-lg"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                onChange={onChangeHandler}
                                value={loginData.password}
                                autoComplete="off"
                              />
                              <div className="form-group">
                                <small>
                                  <a href="pages-reset-password.html">
                                    Forgot password?
                                  </a>
                                </small>
                              </div>
                              <div>
                                <div className="text-center mt-3">
                                  <button
                                    type="submit"
                                    className="btn btn-lg btn-primary ml-0 mr-5"
                                    name="submit"
                                  >
                                    Sign In
                                  </button>

                                  <a
                                    href="/signup"
                                    className="btn btn-lg btn-primary mr-0 ml-5"
                                  >
                                    Sign Up
                                  </a>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );

};

export default LogIn;