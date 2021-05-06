import axios from 'axios';
import React, { useState } from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Sidebar from './Sidebar';


const AddItem = () =>{
  const [addItem, setAddItem] = useState({
    productname : "",
    supplier : "",
    productgroup : "",
    brand : "",
    productdescription : "",
    weights : "",
    tags : "",
    initialstock : "",
    initialstocklocation : "",
    purchaseprice : "",
    saleprice : "",
    wholesaleprice : "",
    retailprice : "",
  });   
 const [open, setOpen] = React.useState(false);

  const onChangeHandler = (event) =>{
      const { value, name} = event.target;

       setAddItem((preValue) => {
            return{
                ...preValue,
                [name] : value,
            };         
       });
  } 

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/additem/",addItem).then(res=>{console.log(res.data);
      setOpen(true);})
  };    

return (
  <>
    <div className="container-fluid" style={{ backgroundColor: "#F5F9FC" }}>
      <div className="row pb-5">
        <Sidebar />
      </div>
      <div className="text-center my-5 overflow-scroll">
        <h4 className="font-weight-normal">Create a new purchased product</h4>
      </div>
      <div className="row">
        <div className="col-sm-8 col-md-8 col-lg-8 d-table h-100 my-n4 mx-auto overflow-scroll">
          <div className="shadow bg-white">
            <div className="card mb-5">
              <div className="card-header">
                <h5 className="card-title">Product Details</h5>
                <h6 className="card-subtitle text-muted">
                  Please provide details of this product.
                </h6>
              </div>
              <div className="card-body">
                <form onSubmit={onSubmitHandler}>
                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Product Name
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        name="productname"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Supplier
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        name="supplier"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Product Group
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        name="productgroup"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Brand
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        name="brand"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Product Description
                    </label>
                    <div className="col-sm-8">
                      <textarea
                        className="form-control"
                        rows="3"
                        name="productdescription"
                        onChange={onChangeHandler}
                      ></textarea>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Weights
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        name="weights"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Tags
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        name="tags"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>

                  <h5>Provide initial values to set your product up with:</h5>

                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Initial Stock
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        name="initialstock"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Initial Stock Location
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        name="initialstocklocation"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Purchase Price
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        name="purchaseprice"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Sale Price
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        name="saleprice"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Wholesale Price
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        name="wholesaleprice"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-form-label col-sm-2 text-sm-right">
                      Retail Price
                    </label>
                    <div className="col-sm-8">
                      <input
                        className="form-control"
                        name="retailprice"
                        onChange={onChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button
                      className="btn btn-pill btn-success ml-5 mr-5"
                      type="submit"
                    >
                      Create Product
                    </button>
                    <a
                      href="/product/table"
                      className="btn btn-pill btn-success mr-5 ml-0"
                    >
                      Manage Product
                    </a>
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
                        This Product saved successfully!
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

export default AddItem;

 