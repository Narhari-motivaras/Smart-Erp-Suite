import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from "react-icons/fi";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as HiIcons from "react-icons/hi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiOutlineHome />,
  },
  {
    title: "Master",
    // path: "#",
    icon: <RiIcons.RiDashboardLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Product",
        path: "/Master/additems",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Add Service",
        path: "/Master/addservice",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Brand Master",
        path: "/Master/addbrand",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Group Master",
        path: "/Master/addgroup",
        // icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Sale",
    path: "#",
    icon: <AiIcons.AiOutlineRise />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "New Invoice",
        path: "/sale/newinvoice",
        // icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      // {
      //   title: "Credit Note",
      //   path: "/sale/creditnote",
      //   // icon: <IoIcons.IoIosPaper />,
      //   cName: "sub-nav",
      // },
      {
        title: "Delivery Challan",
        path: "/sale/deliverychallan",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "New Quotation",
        path: "/sale/newquotation",
        // icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Purchase",
    path: "#",
    icon: <FiIcons.FiShoppingCart />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Purchase Bill",
        path: "/purchase/purchasebill",
        // icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Add Supplier",
        path: "/purchase/addsupplier",
        // icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Client",
    path: "#",
    icon: <AiIcons.AiOutlineTeam />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Client",
        path: "/client/addclient",
        // icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Expense",
    path: "#",
    icon: <HiIcons.HiOutlineCurrencyRupee />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Add Expense",
        path: "/expense/addexpense",
        // icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Report",
    path: "#",
    icon: <HiIcons.HiOutlineDocumentText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Manage Product",
        path: "/product/table",
        // icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Sale Register",
        path: "/sale/table",
        // icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
