import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch} from 'react-router-dom';
import LogIn from './Component/LogIn';
import SignUp from './Component/SignUp';
import Sidebar from './Component/Sidebar';
import Overview from "./Component/Overview";
import AddItem from './Component/AddItem';
import AddService from './Component/AddService';
import BrandMaster from './Component/BrandMaster';
import GroupMaster from "./Component/GroupMaster";
import NewInvoice from  "./Component/NewInvoice";
import Table from "./Shared/Table";
import Table1 from "./Shared/Table1";
import DeliveryChallan from './Component/DeliveryChallan';
import AddClient from './Component/AddClient';
import NewQuotation from './Component/NewQuotation';
import PrintInvoice from './Component/PrintInvoice';
import {InvoiceContext} from './Component/InvoiceContext';
import Dashboard from './Component/Dashboard';
import AddExpense from './Component/AddExpense';
import Purchasebill from './Component/Purchasebill';
import AddSupplier from './Component/AddSupplier';
import Invoicetable from './Component/Invoicetable';




function App() {
   const [invoiceData, setInvoiceData] = useState({
     invoicetype: "GST",
     invoiceno: "",
     date: "",
     customername: "",
     contactno: "",
     customergstin: "",
     poc: "",
     address: "",
     productname: "",
     quantity: "",
     unit: "",
     productdescription: "",
     saleprice: "",
     tax: "",
     amount: "",
     freightcharge: "",
     total:"",
     paymentterms: "",
     vehicalno: "",
     boolean:false,
   });
  return (
    <Switch>
      <Route exact path="/">
        <LogIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/dashboard">
        {/* <Table /> */}
        <Dashboard />
      </Route>
      <Route exact path="/product/table">
        <Table />
      </Route>
      <Route exact path="/sale/table">
        <Invoicetable/>
      </Route>
      <Route path="/Master/additems" exact>
        <AddItem />
      </Route>
      <Route path="/Master/addservice" exact>
        <AddService />
      </Route>
      <Route path="/Master/addbrand" exact>
        <BrandMaster />
      </Route>
      <Route path="/Master/addgroup" exact>
        <GroupMaster />
      </Route>
      <Route path="/sale/deliverychallan" exact>
        <DeliveryChallan />
      </Route>
      <Route path="/sale/newquotation" exact>
        <NewQuotation />
      </Route>
      <Route path="/sale/creditnote" exact>
        <Table1 />
      </Route>
      <Route path="/client/addclient/" exact>
        <AddClient />
      </Route>
      <Route path="/purchase/addsupplier/" exact>
        <AddSupplier />
      </Route>
      {/* <Route path="/overview/" exact>
        <Sidebar/>
        <Overview/>
      </Route> */}
      <InvoiceContext.Provider value={{ invoiceData, setInvoiceData }}>
        <Route path="/expense/addexpense/" exact>
          <AddExpense />
        </Route>
        <Route path="/sale/newinvoice" exact>
          <NewInvoice />
        </Route>
        <Route path="/sale/printinvoice" exact>
          <PrintInvoice />
        </Route>
        <Route path="/purchase/purchasebill" exact>
          <Purchasebill />
        </Route>
      </InvoiceContext.Provider>
    </Switch>
  );
}

export default App;
