import React, { useEffect } from "react";
import { forwardRef } from "react";
import axios from "axios";
import Sidebar from "../Component/Sidebar";
import MaterialTable, { MTablePagination, MTableToolbar } from "material-table";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const Invoicetable = () => {
  const { useState } = React;

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => (
      <FirstPage style={{ color: "#7f7f7f" }} {...props} ref={ref} />
    )),
    LastPage: forwardRef((props, ref) => (
      <LastPage style={{ color: "#7f7f7f" }} {...props} ref={ref} />
    )),
    NextPage: forwardRef((props, ref) => (
      <ChevronRight style={{ color: "#7f7f7f" }} {...props} ref={ref} />
    )),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft style={{ color: "#7f7f7f" }} {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => (
      <Clear style={{ color: "#7f7f7f" }} {...props} ref={ref} />
    )),
    Search: forwardRef((props, ref) => (
      <Search style={{ color: "#7f7f7f" }} {...props} ref={ref} />
    )),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward style={{ color: "" }} {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const [columns, setColumns] = useState([
    {
      title: "Invoicetype",
      field: "invoicetype",
      align: "left",
      editable: "onUpdate",
    },
    {
      title: "Invoice.no",
      field: "invoiceno",
      align: "left",
      editable: "onUpdate",
    },
    {
      title: "Date",
      field: "date",
      align: "left",
      editable: "onUpdate",
    },
    {
      title: "Customername",
      field: "customername",
      align: "left",
      editable: "onUpdate",
    },
    {
      title: "Contact.no",
      field: "contactno",
      align: "left",
      editable: "onUpdate",
    },
    { title: "PlaceofSupply", field: "poc", align: "left", editable: "onUpdate" },
    { title: "address", field: "address", align: "left", editable: "onUpdate" },
    {
      title: "Productname",
      field: "productname",
      align: "left",
      editable: "onUpdate",
    },
    {
      title: "Quantity",
      field: "quantity",
      align: "left",
      editable: "onUpdate",
    },
    {
      title: "Unit",
      field: "unit",
      align: "left",
      editable: "onUpdate",
    },
    {
      title: "SalePrice",
      field: "saleprice",
      align: "left",
      editable: "onUpdate",
    },
    {
      title: "tax",
      field: "tax",
      align: "left",
      editable: "onUpdate",
    },
    {
      title: "freightCharge",
      field: "freightcharge",
      align: "left",
      editable: "onUpdate",
    },
    {
      title: "Amount",
      field: "total",
      align: "left",
      editable: "onUpdate",
    },
    {
      title: "Vehicalno",
      field: "vehicalno",
      align: "left",
      editable: "onUpdate",
    },
  ]);

  const [invoice, setInvoice] = useState([
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
    { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
    { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
    { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
    { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
  ]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios.get("http://localhost:5000/sale/newinvoice/").then((res) => {
      let product = res.data.product;
      console.log(product);
      setInvoice(product);
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row pb-5">
          <Sidebar />
        </div>
        <div className="text-center my-4 overflow-scroll" style={{marginTop:"3rem", marginLeft:"12rem"}}>
          <h4 className="font-weight-normal">
            Manage Your Invoice With Sale Table
          </h4>
        </div>
        <div className="row">
          <div className="col-sm-8 col-md-8 col-lg-8 col-xl-10 d-table h-100 my-2 mx-auto overflow-scroll">
            <div className="shadow bg-white">
              <div className="card" style={{marginBottom:"3rem"}}>
                <div className="card-body">
                  <MaterialTable
                    title="Invoice Details"
                    icons={tableIcons}
                    columns={columns}
                    data={invoice}
                    editable={{
                      // onRowAdd: (newData) =>
                      //   new Promise((resolve, reject) => {
                      //     setTimeout(() => {
                      //       setData([...data, newData]);

                      //       resolve();
                      //     }, 1000);
                      //   }),
                      onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                          setTimeout(() => {
                            const dataUpdate = [...invoice];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setInvoice([...dataUpdate]);

                            resolve();
                          }, 1000);
                        }),
                      onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                          setTimeout(() => {
                            const dataDelete = [...invoice];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setInvoice([...dataDelete]);

                            resolve();
                          }, 1000);
                        }),
                    }}
                    components={{
                      Toolbar: (props) => (
                        <div>
                          <div style={{ padding: "6px 0px" }} />
                          <MTableToolbar {...props} />
                          <div style={{ padding: "6px 0px" }}></div>
                        </div>
                      ),
                      Pagination: (props) => (
                        <div
                          style={{
                            width: "236px",
                            marginLeft: "107rem",
                            marginTop: "1rem",
                          }}
                        >
                          <MTablePagination {...props} />
                        </div>
                      ),
                    }}
                    options={{
                      search: true,
                      Add: false,
                      headerStyle: {
                        backgroundColor: "#ECECEC",
                        color: "#000000",
                        fontWeight: "bold",
                      },
                      paging: true,
                      emptyRowsWhenPaging: true,
                      pageSizeOptions: [5, 10, 20],
                      actionsColumnIndex: -1,
                      exportButton: true,
                      tableLayout: "auto",
                      showEmptyDataSourceMessage: true,
                    }}
                    style={{
                      padding: "0px 20px",
                    }}
                  ></MaterialTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Invoicetable;
