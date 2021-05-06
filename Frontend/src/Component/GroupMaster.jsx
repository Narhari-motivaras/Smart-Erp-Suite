import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Sidebar from "./Sidebar";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";


const GroupMaster = () => {
  const [group, setGroup] = useState({
    groupname: "",
    cgst: "",
    sgst: "",
    igst: "",
  });

  const [open, setOpen] = React.useState(false);
    
    const onChangeHandler = (event) =>{
      const { value, name } = event.target;

       setGroup((preValue) => {
         return {
           ...preValue,
           [name]: value,
         };
       });    
    }

     const onSubmitHandler = (event) => {
       console.log(group);
       event.preventDefault();
       axios
         .post("http://localhost:5000/Master/addgroup/", group)
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
              <h5 class="card-title">Bring in your Prouduct Group</h5>
              <p class="card-subtitle text-muted">
                All of your products Groups will be managed here. Manually
                create groups or import groups using a spreadsheet. You can also
                sync products from your eCommerce store.
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
                  Add Group
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
                    class="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Add New Group
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
                        <form>
                          <div class="form-group row">
                            <label className="col-form-label col-sm-3 text-sm-right mt-4 mb-2">
                              Group Name :-
                            </label>
                            <div className="col-sm-6 mt-4 mb-2">
                              <input
                                className="form-control"
                                name="groupname"
                                onChange={onChangeHandler}
                              />
                            </div>
                          </div>
                          <div class="form-group row">
                            <label className="col-form-label col-sm-3 text-sm-right mb-2">
                              CGST :-
                            </label>
                            <div className="col-sm-2 mb-2">
                              <input
                                className="form-control"
                                name="cgst"
                                onChange={onChangeHandler}
                              />
                            </div>
                            <label className="col-form-label col-sm-2 text-sm-right">
                              SGST :-
                            </label>
                            <div className="col-sm-2">
                              <input
                                className="form-control"
                                name="sgst"
                                onChange={onChangeHandler}
                              />
                            </div>
                          </div>
                          <div class="form-group row">
                            <label className="col-form-label col-sm-3 text-sm-right">
                              IGST :-
                            </label>
                            <div className="col-sm-2 mb-4">
                              <input
                                className="form-control"
                                name="igst"
                                onChange={onChangeHandler}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
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
              This Group saved successfully!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </>
  );
};

export default GroupMaster;
