import axios from "axios";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Datepicker from "../Shared/Datepicker"

const DeliveryChallan = () => {
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
      <div className="container-fluid" style={{ backgroundColor: "#F5F9FC" }}>
        <div className="row pb-5">
          <Sidebar />
        </div>
        <div className="text-center mt-5 overflow-scroll">
          <h4 className="font-weight-normal">Create a new Delivery Challan</h4>
        </div>
        <div className="row">
          <div className="col-sm-8  col-md-8 col-lg-10 h-100 mt-4 mx-auto overflow-scroll">
            <div className="shadow bg-white">
              <div className="card mb-5">
                <div className="card-header">
                  <h5 className="card-title">Provide Details</h5>
                  <h6 className="card-subtitle text-muted">
                    Please provide details of this.
                  </h6>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmitHandler}>
                    <div className="container-fluid mt-3">
                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Challan Number :-
                        </label>
                        <div className="col-sm-3 mr-5">
                          <input
                            className="form-control"
                            name="invoicenumber"
                            onChange={onChangeHandler}
                          />
                        </div>
                        <label className="col-form-label col-sm-2  ml-5 text-sm-right">
                          Date :-
                        </label>
                        <div className="col-sm-2">
                          <Datepicker />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Customer Name :-
                        </label>
                        <div className="col-sm-3 mr-5">
                          <input
                            className="form-control"
                            name="customername"
                            onChange={onChangeHandler}
                          />
                        </div>
                        <label className="col-form-label col-sm-2  ml-5 text-sm-right">
                          Contact Number :-
                        </label>
                        <div className="col-sm-3">
                          <input
                            className="form-control"
                            name="contactno"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Address
                        </label>
                        <div className="col-sm-4">
                          <textarea
                            className="form-control"
                            rows="3"
                            name="address"
                            onChange={onChangeHandler}
                          ></textarea>
                        </div>

                        <label className="col-form-label col-sm-2 text-sm-right">
                          Place of Supply :-
                        </label>
                        <div className="col-sm-2">
                          <input
                            className="form-control"
                            name="poc"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Customer GSTIN
                        </label>
                        <div className="col-sm-3 mr-5">
                          <input
                            className="form-control"
                            name="customergstin"
                            onChange={onChangeHandler}
                          />
                        </div>
                        <label className="col-form-label col-sm-2 ml-5 text-sm-right">
                          Product Name
                        </label>
                        <div className="col-sm-3">
                          <input
                            className="form-control"
                            name="productname"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Quantity
                        </label>
                        <div className="col-sm-3 mr-5">
                          <input
                            className="form-control"
                            name="quantity"
                            onChange={onChangeHandler}
                          />
                        </div>

                        <label className="col-form-label col-sm-2 ml-5 text-sm-right">
                          Unit
                        </label>
                        <div className="col-sm-2">
                          <input
                            className="form-control"
                            name="productname"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <div className="form-group row"></div>
                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Product Description
                        </label>
                        <div className="col-sm-5">
                          <textarea
                            className="form-control"
                            rows="3"
                            name="address"
                            onChange={onChangeHandler}
                          ></textarea>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Delivery Terms
                        </label>
                        <div className="col-sm-5">
                          <textarea
                            className="form-control"
                            rows="3"
                            name="address"
                            onChange={onChangeHandler}
                          ></textarea>
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Vehical Number
                        </label>
                        <div className="col-sm-4">
                          <input
                            className="form-control"
                            name="retailprice"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="text-right"
                      style={{ marginRight: "5rem", marginBottom: "1rem" }}
                    >
                      <button
                        type="submit"
                        className="btn btn-pill btn-success"
                      >
                        Create Challan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryChallan;
