import React, { useContext } from "react";
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import {InvoiceContext} from '../Component/InvoiceContext';

const Datepicker = (props) =>{
    const [value, setValue] = React.useState(null);
    const {invoiceData, setInvoiceData} = useContext(InvoiceContext);
   return (
     <>
       <LocalizationProvider dateAdapter={AdapterDateFns}>
         <DatePicker
           label={props.label}
           value={value}
           onChange={(newValue) => {
             setValue(newValue);
              const str = JSON.stringify(newValue);
              const day = str.slice(9, 11);
              const month = str.slice(6, 8);
              const year = str.slice(1, 5);
              const date =`${day}/${month}/${year}`;
              //  day + month + year;
              console.log(date);
             setInvoiceData((preValue) => {
               return {
                   ...preValue,
                    ["date"]: date,
                  };
                 });
           }}
           renderInput={(params) => (
             <TextField {...params} variant="standard" helperText={null} />
           )}
         />
       </LocalizationProvider>
     </>
   );
}

export default Datepicker;