import  React from 'react';
import { forwardRef } from "react";
import MaterialTable ,{MTablePagination,MTableToolbar } from "material-table";
import Sidebar from "../Component/Sidebar";

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
import { ArrowLeft } from '@material-ui/icons';

const Table1 = () =>{
    const tableIcons = {
      Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => (
        <DeleteOutline {...props} ref={ref} />
      )),
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
      ViewColumn: forwardRef((props, ref) => (
        <ViewColumn {...props} ref={ref} />
      )),
    };

    return (
      <>
        <div className="container-fluid">
          <div className="row pb-2"></div>
          <div className="text-center my-5 overflow-scroll">
            <h4 className="font-weight-normal">
              Created new purchased product
            </h4>
          </div>
          <div className="row">
            <div className="col-sm-8 col-md-8 col-lg-8 d-table h-100 my-1 mx-auto overflow-scroll">
              <div className="shadow bg-white">
                <div className="card mb-5">
                  <div className="card-body">
                    <MaterialTable
                      icons={tableIcons}
                      title="Product Data Table"
                      columns={[
                        { title: "Name", field: "name", align: "left" },
                        { title: "Surname", field: "surname", align: "left" },
                        {
                          title: "Birth Year",
                          field: "birthYear",
                          type: "numeric",
                          align: "left",
                        },
                        {
                          title: "Birth Place",
                          field: "birthCity",
                          align: "left",
                          lookup: { 34: "Istanbul", 63: "Sanlıurfa" },
                        },
                      ]}
                      data={[
                        {
                          name: "Mehmet",
                          surname: "Baran",
                          birthYear: 1987,
                          birthCity: 63,
                        },
                        {
                          name: "Zerya Betül",
                          surname: "Baran",
                          birthYear: 2017,
                          birthCity: 34,
                        },
                        {
                          name: "Zerya Betül",
                          surname: "Baran",
                          birthYear: 2017,
                          birthCity: 34,
                        },
                        {
                          name: "Zerya Betül",
                          surname: "Baran",
                          birthYear: 2017,
                          birthCity: 34,
                        },
                        {
                          name: "Zerya Betül",
                          surname: "Baran",
                          birthYear: 2017,
                          birthCity: 34,
                        },
                        {
                          name: "Zerya Betül",
                          surname: "Baran",
                          birthYear: 2017,
                          birthCity: 34,
                        },
                      ]}
                      options={{
                        search: true,
                        headerStyle: {
                          backgroundColor: "#ECECEC",
                          color: "#000000",
                          fontWeight: "bold",
                          },
                          paging: true,
                          pageSize: 5,
                          initialPage:0,
                          emptyRowsWhenPaging: true,
                          pageSizeOptions: [5, 10, 20],
                          paginationType: "normal",
                      }}
                      localization={{}}
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
                              marginLeft: "45rem",
                              marginTop: "1rem",
                            }}
                          >
                            <MTablePagination {...props}/>
                          </div>
                        ),
                      }}
                      style={{
                        padding: "0px 20px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}


export default Table1;