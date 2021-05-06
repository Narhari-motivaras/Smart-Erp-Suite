import React from 'react';
import { InvoiceContext } from './InvoiceContext';
import html2pdf  from 'html2pdf.js';
import { Link } from 'react-router-dom';


const PrintInvoice = () =>{
    const {invoiceData, setInvoiceData} = React.useContext(InvoiceContext);
    const str = JSON.stringify(invoiceData.date);
    const date=invoiceData.date;
    // console.log(str);
    console.log(date);
    const total = invoiceData.quantity * invoiceData.saleprice;
    const temp = total * (invoiceData.tax / 100);
    const tax = Math.round(temp);
    const charge=Math.round(invoiceData.freightcharge);
    

    // window.onload = function () {
      const onClickHandler = () => {
        
        const invoice = document.getElementById("invoice");
        var opt = {
          margin: 0.5,
          filename: "myfile.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, width:720},
          pagebreak: { avoid: "avoid-all" },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        };
        html2pdf().from(invoice).set(opt).save();
      };
      
      const onSetHandler = async () => {
       await setInvoiceData((preValue) => {
          return {
            ...preValue,
            ["amount"]: 0,
            ["total"]: 0,
            ["boolean"]:true,
          };
        });
        // window.loction.reload(true);
      };
    // };
     
  return (
    <>
      <div
        className="container-fluid d-flex"
        style={{ backgroundColor: "#eee" }}
      >
        <div class="container d-flex justify-content-center mt-5 mb-5">
          <div class="row">
            <div class="col-md-6 text-left mb-3">
              <Link to="/sale/newinvoice">
                <button class="btn btn-primary px-4" id="back" onClick={onSetHandler}>
                  Back
                </button>
              </Link>
            </div>
            <div class="col-md-6 text-right mb-3">
              <button
                class="btn btn-primary"
                id="download"
                onClick={onClickHandler}
              >
                download pdf
              </button>
            </div>
            <div class="col-md-12">
              <div class="card" id="invoice">
                <div class="card-header bg-transparent header-elements-inline">
                  <h5 class="card-title text-primary">Sale invoice</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-4 pull-left">
                        <ul class="list list-unstyled mb-0 text-left">
                          <li>Plot no:102-104,Santej</li>
                          <li>Gandhinagar,Gujarat</li>
                          <li>+914744473747</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-4 ">
                        <div class="text-sm-right">
                          <h4
                            class="invoice-color mb-2 mt-md-2"
                            style={{ color: "#ff0000" }}
                          >
                            Invoice {invoiceData.invoiceno}
                          </h4>
                          <ul class="list list-unstyled mb-0">
                            <li>
                              Date:{" "}
                              <span class="font-weight-semibold">
                                {date}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-md-flex flex-md-wrap">
                    <div class="mb-4 mb-md-2 text-left">
                      {" "}
                      <span class="text-muted">Invoice To:</span>
                      <ul class="list list-unstyled mb-0">
                        <li>
                          <h5 class="my-1">{invoiceData.customername}</h5>
                        </li>
                        <li>
                          <span
                            class="font-weight-semibold"
                            style={{ width: "150px", display: "block" }}
                          >
                            {invoiceData.address}
                          </span>
                        </li>
                        <li>{invoiceData.contactno}</li>
                        {/* <li>
                          <a href="#" data-abc="true">
                            tibco@samantha.com
                          </a>
                        </li> */}
                      </ul>
                    </div>
                    <div class="mb-2 ml-auto">
                      {" "}
                      <span class="text-muted">Customer Details:</span>
                      <div class="d-flex flex-wrap wmin-md-400">
                        <ul class="list list-unstyled mb-0 text-left">
                          <li>Place of Supply:</li>
                          <li>CustomerGSTIN:</li>
                        </ul>
                        <ul class="list list-unstyled text-right mb-0 ml-2">
                          <li>
                            <span class="font-weight-semibold">
                              {invoiceData.poc}
                            </span>
                          </li>
                          <li>
                            <span class="font-weight-semibold">
                              {invoiceData.customergstin}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table table-lg">
                    <thead>
                      <tr>
                        <th style={{ width: "500px" }}>Product Name</th>
                        <th>QTY</th>
                        <th>Unit</th>
                        <th>Price</th>
                        <th>Tax</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h6 class="mb-0">{invoiceData.productname}</h6>{" "}
                        </td>
                        <td>{invoiceData.quantity}</td>
                        <td>{invoiceData.unit}</td>
                        <td>{invoiceData.saleprice}</td>
                        <td>{invoiceData.tax}%</td>
                        <td>{total + tax}</td>
                        {/* <td>
                          <span class="font-weight-semibold">$300</span>
                        </td> */}
                      </tr>
                      <tr>
                        <td>
                          <h6 class="mb-0">freight charge</h6>{" "}
                          {/* <span class="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor
                          </span> */}
                        </td>
                        <td></td>
                        <td></td>
                        <td>{invoiceData.freightcharge}</td>
                        {/* <td>
                          <span class="font-weight-semibold">$240</span>
                        </td> */}
                        <td></td>
                        <td>{invoiceData.freightcharge}</td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="mb-0">Product description</h6>{" "}
                          <span class="text-muted">
                            {invoiceData.productdescription}
                          </span>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        {/* <td>$250</td>
                        <td>$250</td>
                        <td>
                          <span class="font-weight-semibold">$500</span>
                        </td> */}
                      </tr>
                      <tr>
                        <td>
                          <h6 class="mb-0">Payment Terms</h6>{" "}
                          <span class="text-muted">{invoiceData.quantity}</span>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <div className="row ml-2 mt-4">
                        <h6>Vehical Number:</h6>
                        <h6 className="text-muted ml-2">
                          {invoiceData.vehicalno}
                        </h6>
                      </div>
                    </tbody>
                  </table>
                </div>
                <div class="card-body">
                  <div class="d-md-flex flex-md-wrap">
                    <div class="pt-2 mb-3 wmin-md-400 ml-auto">
                      <h6 class="mb-3 text-left">Total Amount</h6>
                      <div class="table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <th class="text-left">Subtotal:</th>
                              <td class="text-right">
                                {total}
                              </td>
                            </tr>
                            <tr>
                              <th class="text-left">
                                Tax:{" "}
                                <span class="font-weight-normal">
                                  ({invoiceData.tax}%)
                                </span>
                              </th>
                              <td class="text-right">
                                {tax}
                              </td>
                            </tr>
                            <tr>
                              <th class="text-left">
                                Freightcharge:{" "}
                              </th>
                              <td class="text-right">
                                {charge}
                              </td>
                            </tr>
                            <tr>
                              <th class="text-left">Total:</th>
                              <td class="text-right text-primary">
                                <h5 class="font-weight-semibold">
                                  RS.{total + tax + charge}
                                </h5>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer text-center">
                {" "}
                <span class="text-muted">
                  This is Computer generated Invoice{"  "}By Smart ERP Suite.
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrintInvoice;

