import axios from "axios";
import React, { useState } from "react";
import Datepicker from "../Shared/Datepicker";
import Sidebar from "./Sidebar";

const AddExpense = () => {
  const [addService, setAddService] = useState({
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

    setAddService((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/additem/", addService).then((res) => {
      console.log(res.data);
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
          <h4 className="font-weight-normal">Add a new Expense</h4>
        </div>
        <div className="row">
          <div className="col-sm-8 col-md-8 col-lg-8 d-table h-100 my-n4 mx-auto overflow-scroll">
            <div className="shadow bg-white">
              <div className="card mb-5">
                <div className="card-header">
                  <h5 className="card-title">Expense Details</h5>
                  <h6 className="card-subtitle text-muted">
                    Please provide details of Expense.
                  </h6>
                  <div className="row">
                    <label
                      className="col-form-label col-sm-2 text-sm-right"
                      style={{ marginLeft: "50rem", marginTop: "-3rem" }}
                    >
                      <Datepicker label="Date" />
                    </label>
                  </div>
                </div>
                <div className="card-body mt-4">
                  <form onSubmit={onSubmitHandler}>
                    <div className="form-group row">
                      <label className="col-form-label col-sm-2 text-sm-right">
                        Expense Type
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
                        Expense Ref no.
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
                        Paid To
                      </label>
                      <div className="col-sm-3">
                        <input
                          className="form-control"
                          name="servicecode"
                          onChange={onChangeHandler}
                        />
                      </div>
                      <label className="col-form-label col-sm-2 text-sm-right">
                        Paid By
                      </label>
                      <div className="col-sm-3">
                        <input
                          className="form-control"
                          name="servicecode"
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-sm-2 text-sm-right">
                        Amount
                      </label>
                      <div className="col-sm-3">
                        <input
                          className="form-control"
                          name="servicecharge"
                          onChange={onChangeHandler}
                        />
                      </div>

                      <label className="col-form-label col-sm-2 text-sm-right">
                        pay mode
                      </label>
                      <div className="col-sm-3">
                        <input
                          className="form-control"
                          name="minservicecharge"
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>

                    <div className="form-group row mb-4">
                      <label className="col-form-label col-sm-2 text-sm-right">
                        Remarks
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

                    <div className="mb-4 text-center">
                      <button
                        type="submit"
                        className="btn btn-pill btn-success"
                      >
                        Create Expense
                      </button>
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

export default AddExpense;
