import axios from "axios";
import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import Datepicker from "../Shared/Datepicker";
import PrintInvoice from "./PrintInvoice";
import { Link } from "react-router-dom";
import { InvoiceContext } from "./InvoiceContext";

const Purchasebill = () => {
  const { invoiceData, setInvoiceData } = useContext(InvoiceContext);
  // const [invoiceData, setInvoiceData] = useState({
  //   invoicetype: "GST",
  //   invoiceno: "",
  //   customername: "",
  //   contactno: "",
  //   customergstin: "",
  //   poc: "",
  //   address: "",
  //   productname: "",
  //   quantity: "",
  //   unit: "",
  //   productdescription: "",
  //   saleprice: "",
  //   tax: "",
  //   amount:"",
  //   freightcharge:"",
  //   paymentterms: "",
  //   vehicalno:"",
  // });

  const invoiceMeta = {
    data: [invoiceData],
  };

  const onChangeHandler = (event) => {
    const { value, name } = event.target;

    setInvoiceData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/invoice/", invoiceData).then((res) => {
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
          <h4 className="font-weight-normal">Create a new Purchase Bill</h4>
        </div>
        <div className="row">
          <div className="col-sm-8  col-md-8 col-lg-10 h-100 mt-4 mx-auto overflow-scroll">
            <div className="shadow bg-white">
              <div className="card mb-5">
                <div className="card-header">
                  <h5 className="card-title">Provide Details</h5>
                  <div className="card-subtitle">
                    <h6 className="text-muted">
                      Please provide details of this product.
                    </h6>
                    <div className="row">
                      <label
                        className="col-form-label col-sm-2 text-sm-right"
                        style={{ marginLeft: "60rem", marginTop: "-3rem" }}
                      >
                        <Datepicker label="Purchase Date" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmitHandler}>
                    <div className="container-fluid mt-3 ml-2">
                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Purchase Type
                        </label>
                        <div className="col-sm-3 mr-5">
                          <input
                            className="form-control"
                            name="invoicetype"
                            disabled
                            value="GST"
                            onChange={onChangeHandler}
                          />
                        </div>
                        <label
                          className="col-form-label col-sm-2 text-sm-right"
                          style={{ marginLeft: "9rem" }}
                        >
                          PurchaseBill No.
                        </label>
                        <div className="col-sm-2">
                          <input
                            className="form-control"
                            name="invoiceno"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Supplier Name
                        </label>
                        <div className="col-sm-3 mr-5">
                          <input
                            className="form-control"
                            name="customername"
                            onChange={onChangeHandler}
                          />
                        </div>
                        <label
                          className="col-form-label col-sm-2 text-sm-right"
                          style={{ marginLeft: "9rem" }}
                        >
                          Place of Supply
                        </label>
                        <div className="col-sm-2">
                          <input
                            className="form-control"
                            name="contactno"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Product Name
                        </label>
                        <div className="col-sm-2">
                          <input
                            className="form-control"
                            name="productname"
                            onChange={onChangeHandler}
                          />
                        </div>
                        <label className="col-form-label col-sm-2 text-sm-right mr-n2 ml-n4">
                          Quantity
                        </label>
                        <div className="col-sm-2 mr-n5">
                          <input
                            className="form-control"
                            name="quantity"
                            onChange={onChangeHandler}
                          />
                        </div>
                        <label className="col-form-label col-sm-2 text-sm-right ml-n4">
                          Unit
                        </label>
                        <div className="col-sm-2">
                          <input
                            className="form-control"
                            name="unit"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Product Description
                        </label>
                        <div className="col-sm-5">
                          <textarea
                            className="form-control"
                            rows="3"
                            name="productdescription"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Purchase Price
                        </label>
                        <div className="col-sm-2">
                          <input
                            className="form-control"
                            name="saleprice"
                            onChange={onChangeHandler}
                          />
                        </div>
                        <label className="col-form-label col-sm-2 text-sm-right mr-n2 ml-n4">
                          Tax
                        </label>
                        <div className="col-sm-2 mr-n5">
                          <input
                            className="form-control"
                            name="tax"
                            onChange={onChangeHandler}
                          />
                        </div>
                        <label className="col-form-label col-sm-2 text-sm-right ml-n4">
                          Amount
                        </label>
                        <div className="col-sm-2">
                          <input
                            className="form-control"
                            name="amount"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <div className="form-group row"></div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          freight Charge
                        </label>
                        <div className="col-sm-3">
                          <input
                            className="form-control"
                            name="freightcharge"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Payment Terms
                        </label>
                        <div className="col-sm-5">
                          <textarea
                            className="form-control"
                            rows="3"
                            name="paymentterms"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Vehical Number
                        </label>
                        <div className="col-sm-3 mb-4">
                          <input
                            className="form-control"
                            name="vehicalno"
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="mb-3 text-right"
                      style={{ marginRight: "6rem", marginTop: "-2rem" }}
                    >
                      <button
                        type="submit"
                        className="btn btn-pill btn-success mr-4"
                      >
                        Create Purchase Bill
                      </button>
                        <button className="btn btn-pill btn-success ml-2">
                          Print Purchase Bill
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Invoice.Provider value={invoiceData}><PrintInvoice/></Invoice.Provider> */}
    </>
  );
};

export default Purchasebill;
