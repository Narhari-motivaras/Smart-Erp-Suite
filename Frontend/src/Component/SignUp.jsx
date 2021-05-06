import React, { useState } from 'react';
import signup from '../img/Signup.jpg';
import axios from 'axios';


const SignIn = () =>{
  const [user, setUser] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
  });

   const onChangeHandler = (event) =>{
      const { value, name} = event.target;

       setUser((preValue) => {
            return{
                ...preValue,
                [name] : value,
            };         
       });
  } 

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/signup/",user).then((res) => {
      // window.location = "http://localhost:3000/";
      if(res.data.status==="error"){
       alert(res.data.error);
      }else{
        window.location = "http://localhost:3000/";
      }
    }).catch((error) => {
      console.log(error.response)});
  };    
 return (
   <>
     <main className="main d-flex w-100 h-100" style={{backgroundColor: "#F5F9FC"}}>
       <div
         className="container d-flex flex-column mb-4"
       >
         <div className="row h-100">
           <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
             <div className="d-table-cell align-middle">
               <div className="text-center mt-4">
                 <h1 className="h2">Get started</h1>
                 <p className="lead">
                   Start creating the best possible user experience for you
                   customers.
                 </p>
               </div>
               <div className="shadow bg-white rounded">
                 <div className="card">
                   <div className="card-body">
                     <div className="m-sm-4">
                       <div className="text-center">
                         <img
                           src={signup}
                           className="img-fluid rounded"
                           alt="profile"
                           width="80"
                           height="80"
                         />
                       </div>
                       <form>
                         <div className="form-group">
                           <label>Name</label>
                           <input
                             className="form-control form-control-lg"
                             type="text"
                             name="name"
                             placeholder="Enter your name"
                             onChange={onChangeHandler}
                           />
                         </div>
                         <div className="form-group">
                           <label>Company</label>
                           <input
                             className="form-control form-control-lg"
                             type="text"
                             name="company"
                             placeholder="Enter your company name"
                             onChange={onChangeHandler}
                           />
                         </div>
                         <div className="form-group">
                           <label>Email</label>
                           <input
                             className="form-control form-control-lg"
                             type="email"
                             name="email"
                             placeholder="Enter your email"
                             onChange={onChangeHandler}
                           />
                         </div>
                         <div className="form-group">
                           <label>Password</label>
                           <input
                             className="form-control form-control-lg"
                             type="password"
                             name="password"
                             placeholder="Enter password"
                             onChange={onChangeHandler}
                           />
                         </div>
                         <div className="text-center mt-3">
                           <button
                             className="btn btn-lg btn-primary mr-4 ml-0 mt-1"
                             onClick={onSubmitHandler}
                             style={{ fontSize: "18px" }}
                           >
                             Sign Up
                           </button>
                           <a
                             href="/"
                             className="btn btn-lg btn-primary mr-0 ml-5 mt-1"
                             style={{ fontSize: "18px" }}
                           >
                             Sign In
                           </a>
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

export default SignIn;