import axios from "axios";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const AddService = () => {
  const [addService, setAddService] = useState({
    servicename: "",
    group: "",
    servicecode: "",
    servicecharge: "",
    minservicecharge: "",
    cgst: "",
    sgst: "",
    igst: "",
  });

  const [open, setOpen] = React.useState(false);

  const onChangeHandler = (event) => {
    const { value, name } = event.target;

    setAddService((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/Master/addservice/", addService).then((res) => {
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
        <div className="text-center my-5 overflow-scroll">
          <h4 className="font-weight-normal">Create a new Service</h4>
        </div>
        <div className="row">
          <div className="col-sm-8 col-md-8 col-lg-8 d-table h-100 my-n4 mx-auto overflow-scroll">
            <div className="shadow bg-white">
              <div className="card mb-5">
                <div className="card-header">
                  <h5 className="card-title">Service Details</h5>
                  <h6 className="card-subtitle text-muted">
                    Please provide details of Service.
                  </h6>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmitHandler}>
                    <div className="form-group row">
                      <label className="col-form-label col-sm-2 text-sm-right">
                        Service Name
                      </label>
                      <div className="col-sm-8">
                        <input
                          className="form-control"
                          name="servicename"
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-sm-2 text-sm-right">
                        Group
                      </label>
                      <div className="col-sm-8">
                        <input
                          className="form-control"
                          name="group"
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-sm-2 text-sm-right">
                        Service Code
                      </label>
                      <div className="col-sm-8">
                        <input
                          className="form-control"
                          name="servicecode"
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>

                    <h5 className="text-muted mt-4 mb-4">
                      Provide initial values to set your Service up with:
                    </h5>

                    <div className="form-group row">
                      <label className="col-form-label col-sm-2 text-sm-right">
                        Service Charge
                      </label>
                      <div className="col-sm-2">
                        <input
                          className="form-control"
                          name="servicecharge"
                          onChange={onChangeHandler}
                        />
                      </div>

                      <label className="col-form-label col-sm-3 text-sm-right">
                        Min. Service Charge
                      </label>
                      <div className="col-sm-2">
                        <input
                          className="form-control"
                          name="minservicecharge"
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-sm-2 text-sm-right">
                        CGST
                      </label>
                      <div className="col-sm-2">
                        <input
                          className="form-control"
                          name="cgst"
                          onChange={onChangeHandler}
                        />
                      </div>
                      <label className="col-form-label col-sm-3 text-sm-right">
                        SGST
                      </label>
                      <div className="col-sm-2">
                        <input
                          className="form-control"
                          name="sgst"
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-sm-2 text-sm-right">
                        IGST
                      </label>
                      <div className="col-sm-2 mb-4">
                        <input
                          className="form-control"
                          name="igst"
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>

                    <div className="mb-4 text-center">
                      <button
                        type="submit"
                        className="btn btn-pill btn-success"
                      >
                        Create Product
                      </button>
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
                          This Service saved successfully!
                        </Alert>
                      </Snackbar>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="shadow-lg bg-white rounded-pill">
          <div
            className="card-footer"
            style={{
              height: "2rem",
              width: "100%",
              backgroundColor: "#ffffff",
              display: "block",
              position: "fixed",
              left: 0,
              bottom: 0,
              zIndex: 999,
            }}
          ></div>
        </div>
      </footer>
    </>
  );
};

export default AddService;
