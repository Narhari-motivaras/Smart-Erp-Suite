import axios from "axios";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const AddClient = () => {
  const [addItem, setAddItem] = useState({
    productname: "",
    supplier: "",
    productgroup: "",
    brand: "",
    productdescription: "",
    weights: "",
    tags: "",
    initialstock: "",
    initialstocklocation: "",
    purchaseprice: "",
    saleprice: "",
    wholesaleprice: "",
    retailprice: "",
    cgst: "",
    sgst: "",
  });

  const onChangeHandler = (event) => {
    const { value, name } = event.target;

    setAddItem((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/additem/", addItem).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#F5F9FC"}}>
        <div className="row pb-5">
          <Sidebar />
        </div>
        <div className="text-center my-5 overflow-scroll">
          <h4 className="font-weight-normal">Create a new Client</h4>
        </div>
        <div className="row">
          <div className="col-sm-8 col-md-8 col-lg-9 d-table  h-100 my-n4 mx-auto overflow-scroll">
            <div className="shadow bg-white">
              <div className="card mb-5">
                <div className="card-header">
                  <h5 className="card-title">Client Details</h5>
                  <h6 className="card-subtitle text-muted">
                    Please provide details of this.
                  </h6>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmitHandler}>
                    <div className="container-fluid ml-n3 pt-4">
                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Client Name 
                        </label>
                        <div className="col-sm-3 mr-5">
                          <input
                            className="form-control"
                            name="clientname"
                            onChange={onChangeHandler}
                          />
                        </div>

                        <label className="col-form-label col-sm-2 ml-5 text-sm-right">
                          Email ID 
                        </label>
                        <div className="col-sm-3">
                          <input
                            className="form-control"
                            name="Email"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          City
                        </label>
                        <div className="col-sm-3 mr-5">
                          <input
                            className="form-control"
                            name="clientname"
                            onChange={onChangeHandler}
                          />
                        </div>

                        <label className="col-form-label col-sm-2 ml-5 text-sm-right">
                          State
                        </label>
                        <div className="col-sm-3">
                          <input
                            className="form-control"
                            name="state"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Country
                        </label>
                        <div className="col-sm-3 mr-5">
                          <input
                            className="form-control"
                            name="country"
                            onChange={onChangeHandler}
                          />
                        </div>

                        <label className="col-form-label col-sm-2 ml-5 text-sm-right">
                          PIN Code
                        </label>
                        <div className="col-sm-3">
                          <input
                            className="form-control"
                            name="productgroup"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Billing Address
                        </label>
                        <div className="col-sm-5">
                          <textarea
                            className="form-control"
                            rows="3"
                            name="billingaddress"
                            onChange={onChangeHandler}
                          ></textarea>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          contact No
                        </label>
                        <div className="col-sm-3">
                          <input
                            className="form-control"
                            name="contactno"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>
                      <h6 className="text-muted ml-3">Tax Details</h6>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          PAN No
                        </label>
                        <div className="col-sm-3 mr-5">
                          <input
                            className="form-control"
                            name="initialstock"
                            onChange={onChangeHandler}
                          />
                        </div>
                        <label className="col-form-label col-sm-2 ml-5 text-sm-right">
                          GSTIN
                        </label>
                        <div className="col-sm-3">
                          <input
                            className="form-control"
                            name="initialstock"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <h6 className="text-muted ml-3">Account Details</h6>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Type 
                        </label>
                        <div className="col-form-label col-sm-4">
                          <div className="form-check form-check-inline">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="actype"
                              id="exampleRadios1"
                              value="debit"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="exampleRadios1"
                            >
                              Debit
                            </label>
                          </div>
                          <div class="form-check form-check-inline mr-5">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="actype"
                              id="exampleRadios2"
                              value="credit"
                            />
                            <label
                              className="form-check-label"
                              for="exampleRadios2"
                              
                            >
                              Credit
                            </label>
                          </div>
                        </div>

                        <label className="col-form-label col-sm-2  ml-2 text-sm-right">
                          Opening Balance
                        </label>
                        <div className="col-sm-3">
                          <input
                            className="form-control"
                            name="openingbalance"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <h6 className="text-muted ml-3">Other Details</h6>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Credit Allowed
                        </label>
                        <div className="col-form-label col-sm-4">
                        <div className="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="cred"
                            id="exampleRadios3"
                            value="yes"
                            checked
                          />
                          <label class="form-check-label" for="exampleRadios3">
                            yes
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="cred"
                            id="exampleRadios2"
                            value="no"
                          />
                          <label class="form-check-label" for="exampleRadios2">
                            No
                          </label>
                          </div>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Credit Limit
                        </label>
                        <div className="col-sm-3">
                          <input
                            className="form-control"
                            name="creditlimit"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Credit Remark
                        </label>
                        <div className="col-sm-6 mb-4">
                          <textarea
                            className="form-control"
                            rows="3"
                            name="creditremark"
                            onChange={onChangeHandler}
                          ></textarea>
                        </div>
                      </div>
                      <div className="mb-4 text-center">
                        <button
                          type="submit"
                          className="btn btn-pill btn-success"
                        >
                          Add Client
                        </button>
                      </div>
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

export default AddClient;
