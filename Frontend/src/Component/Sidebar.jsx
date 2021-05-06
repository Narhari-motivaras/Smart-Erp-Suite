import React, { useState } from 'react';
import '../App.css';
import styled from 'styled-components';
import logo from '../img/SMART.png';
import flag from '../img/india.png';
import logo2 from "../img/SMART(1).png";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from "react-icons/fi";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


const Nav = styled.nav`
  background: #ffffff;
  width: 99%;
  margin: 0.5rem;
  height: 45px;
  bottom: 0;
  top: 0;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: left;
  width: ${({ navbar }) => (navbar ? "81%" : "99%")};
  left: ${({ navbar }) => (navbar ? "17%" : "0%")};
  transition: 150ms;
  z-index: 9999;
`;

const Logo = styled.img`
  margin-top: 0.5rem;
  margin-left: 40rem; 
  width: 10rem;
  height: 150px; 
`;



const Logo1 = styled.img`
  margin-left: -2.5rem;
  margin-top: -1rem;
  width: 20rem;
  height: 300px;
`;

const NavIcon = styled.div`
  color: #495057;
  margin-top: 0.6rem;
  margin-left: 1rem;
  font-size: 1.5rem;
  height: 70px;
  display: flex;
  position: fixed;
  justify-content: flex-start;
  align-items: right;

  &:hover .menu{
    color: #47bac1;
  }
`;

const NavIconadv = styled.div`
  color: #495057;
  margin-top: 0.6rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  height: 70px;
  display: flex;
  position: absolute;
  right:15px;
  justify-content: flex-start;
  align-items: right;
  text-align:right;

  &:hover .menu {
    color: #47bac1;
  }
`;

const SidebarNav = styled.nav`
  background: #354052;
  width: 250px;
  height: 100vh;
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  text-decoration: none;
  position: fixed;
  top: 1;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 150ms;
  z-index: 9000;

`;

const Sidebarfooter = styled.div`
  background: #313B4C;
  width: 250px;
  height: 55px;
  display: flex;
  position: absolute;
  bottom: 0px
`;

const NavbarWrap = styled.div`
  width: 99%;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showNavbar = () => setNavbar(!navbar);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav navbar={navbar} className="shadow-sm bg-white rounded">
        <NavbarWrap>
          <NavIcon onClick={showNavbar}>
            <FaIcons.FaAlignLeft className="menu" onClick={showSidebar} />
          </NavIcon>
          <NavIconadv>
            <FiIcons.FiMessageCircle className="menu"></FiIcons.FiMessageCircle>
            <span class="badge badge-info" style={{backgroundColor:"#47BAC1",width:"20px",height:"20px",fontSize:"12px",fontWeight:"400",borderRadius:"50%",marginLeft:"-11px",marginTop:"-7px",marginRight:"6rem"}}>4</span>
            </NavIconadv>
            <NavIconadv>
            <IoIcons.IoMdNotificationsOutline className="menu" style={{fontSize:"1.6rem",fontWeight:"700",marginRight:"3rem"}}></IoIcons.IoMdNotificationsOutline>
            </NavIconadv>
            <NavIconadv>
              <img src={flag} alt="india" style={{width:"27px",height:"22px",borderRadius:"50%",marginTop:"1px"}}></img>
            </NavIconadv>
        </NavbarWrap>
      </Nav>

      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <IconContext.Provider
            value={{
              color: "#47BAC1",
              size: "28px",
              style: {
                marginLeft: "1.5rem",
                marginBottom: "0.5rem",
                marginRight: "0rem",
              },
            }}
          >
            <span>
              <FiIcons.FiCodesandbox className="logo"></FiIcons.FiCodesandbox>
              <span
                class="text"
                style={{
                  color: "#ffffff",
                  marginLeft: "10px",
                }}
              >
                Smart ERP Suite
              </span>
            </span>
          </IconContext.Provider>
          <IconContext.Provider value={{ style: { marginBottom: "1rem" } }}>
            <div style={{ height: "30px" }}></div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#fff" }}>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            {/* <Logo1 src={logo} alt="logo" /> */}
          </IconContext.Provider>
          <Sidebarfooter>
             <span className="text" style={{color:"#E3DEE5",marginTop:"15px",marginLeft:"35px"}}> Smart ERP Suite{" "}- 2021</span>
          </Sidebarfooter>
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
