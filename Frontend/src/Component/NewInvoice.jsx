import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Datepicker from "../Shared/Datepicker";
import PrintInvoice from './PrintInvoice';
import { Link } from "react-router-dom";
import { InvoiceContext } from "./InvoiceContext";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";




const NewInvoice = () => {
  const {invoiceData, setInvoiceData} = useContext(InvoiceContext);
   const [open, setOpen] = React.useState(false);
   const total = invoiceData.quantity * invoiceData.saleprice;
   const temp = total * (invoiceData.tax / 100);
   const tax = Math.round(temp);
   const amount= tax + total;
   const boolean= invoiceData.boolean;
   const totalamount= amount + Number(invoiceData.freightcharge);

  //  if(boolean){
  //    window.location.reload();
  //  }

  useEffect(() => {
    console.log("change in page");
  }, [boolean]);
   
   
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
        ["amount"]: amount,
        ["total"]: totalamount,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/sale/newinvoice", invoiceData).then((res) => {
      console.log(res.data);
      setOpen(true);
    });
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#F5F9FC" }}>
        <div className="row pb-5">
          <Sidebar />
        </div>
        <div className="text-center mt-5 overflow-scroll">
          <h4 className="font-weight-normal">Create a new Invoice</h4>
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
                        <Datepicker label="Date" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmitHandler}>
                    <div className="container-fluid mt-3 ml-2">
                      <div className="form-group row">
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Invoice Type
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
                          Invoice No.
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
                          Customer Name
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
                          Contact Number
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
                          Customer GSTIN
                        </label>
                        <div className="col-sm-3">
                          <input
                            className="form-control"
                            name="customergstin"
                            onChange={onChangeHandler}
                          />
                        </div>

                        <label
                          className="col-form-label col-sm-2 text-sm-right"
                          style={{ marginLeft: "12rem" }}
                        >
                          Place of Supply
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
                          Address
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
                          Sale Price
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
                            value={amount}
                            onChange={onChangeHandler}
                            disabled
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
                        <label className="col-form-label col-sm-2 text-sm-right">
                          Total Amount
                        </label>
                        <div className="col-sm-3">
                          <input
                            className="form-control"
                            name="total"
                            value={totalamount}
                            onChange={onChangeHandler}
                            disabled
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
                        Create Invoice
                      </button>
                      <Link to="/sale/printinvoice">
                        <button className="btn btn-pill btn-success ml-2">
                          Print Invoice
                        </button>
                      </Link>
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
                          Invoice Created and saved !
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
      {/* <Invoice.Provider value={invoiceData}><PrintInvoice/></Invoice.Provider> */}
    </>
  );
};

export default NewInvoice;

 
