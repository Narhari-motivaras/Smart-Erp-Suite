import React, { useState } from 'react';
import axios from "axios";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Sidebar from './Sidebar';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


const BrandMaster = () =>{
  const [brand,setBrand] = useState();

  const [open, setOpen] = React.useState(false);
    
  const onChangeHandler = (event) =>{
    const { value, name } = event.target;

    setBrand((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  
  const onSubmitHandler = (event) => {
    console.log(brand);
    event.preventDefault();
    axios
      .post("http://localhost:5000/Master/addbrand/",brand)
      .then((res) => {
        console.log(res.data);
        setOpen(true);
      });
  };


 return (
   <>
     <div
       className="container-fluid"
       style={{ backgroundColor: "#F5F9FC", height: "100vh" }}
     >
       <div className="row pb-5">
         <Sidebar />
       </div>
       <div className="col-sm-12 col-md-12 col-lg-10  d-table h-100 mx-auto">
         <div class="card" style={{ marginTop: "2rem", marginLeft: "3rem" }}>
           <div class="card-header">
             <h5 class="card-title">Bring in your product Brand</h5>
             <p class="card-subtitle text-muted">
               All of your products Brands will be managed here. Manually create
               brands or import brands using a spreadsheet. You can also sync
               products from your eCommerce store.
             </p>
           </div>
           <div class="card-body">
             <div class="mb-4">
               <button
                 class="btn btn-success"
                 type="button"
                 data-toggle="modal"
                 data-target="#exampleModal"
               >
                 Add Brand
               </button>
               <div
                 class="modal fade"
                 id="exampleModal"
                 tabindex="-1"
                 role="dialog"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true"
               >
                 <div
                   class="modal-dialog modal-dialog-centered"
                   role="document"
                 >
                   <div class="modal-content">
                     <div class="modal-header">
                       <h5 class="modal-title" id="exampleModalLabel">
                         Add New Brand
                       </h5>
                       <button
                         type="button"
                         class="close"
                         data-dismiss="modal"
                         aria-label="Close"
                       >
                         <span aria-hidden="true">&times;</span>
                       </button>
                     </div>
                     <div class="modal-body">
                       <form onSubmit={onSubmitHandler}>
                         <div class="form-group row">
                           <label className="col-form-label col-sm-4 text-sm-right mt-4 mb-3">
                             Brand Name :-
                           </label>
                           <div className="col-sm-6">
                             <input
                               className="form-control mt-4 mb-3"
                               name="brand"
                               onChange={onChangeHandler}
                             />
                           </div>
                         </div>
                       </form>
                     </div>
                     <div class="modal-footer">
                       <button
                         type="submit"
                         class="btn btn-primary mr-3 px-4"
                         data-dismiss="modal"
                         onClick={onSubmitHandler}
                       >
                         Save
                       </button>
                       <button
                         type="button"
                         class="btn btn-primary ml-2 px-4"
                         data-dismiss="modal"
                       >
                         Close
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <Snackbar
           open={open}
           anchorOrigin={{ vertical: "top", horizontal: "right" }}
           autoHideDuration={6000}
           onClose={() => {
             setOpen(false);
           }}
           style={{ marginTop: "3rem" }}
         >
           <Alert
             action={
               <IconButton
                 aria-label="close"
                 color="success"
                 size="small"
                 onClick={() => {
                   setOpen(false);
                 }}
               >
                 <CloseIcon fontSize="inherit" />
               </IconButton>
             }
             severity="success"
             // elevation={4}
           >
             This Brand saved successfully!
           </Alert>
         </Snackbar>
       </div>
     </div>
   </>
 );
};

export default BrandMaster;