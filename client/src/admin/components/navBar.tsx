/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink as Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import LOGO_IMAGE from "../../../public/logo192.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from '@mui/icons-material/People';

interface LinkProps {
    isSelected: boolean;
}


interface NavBarProps {
    isBlur: boolean;
}

export const Nav = styled.nav<NavBarProps>`
background-color: #3f8cd9;
width: 20vw;
height: 100vh;
position: absolute;
margin-top: 0vh;
filter: ${(props: { isBlur: any; }) => props.isBlur ? 'blur(0.5vw)' : 'blur(0vw)'};
`;

export const NavLink = styled(Link) <LinkProps>`
color: #ffffff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1vw;
padding-top: 1vh;
padding-bottom: 1vh;
height: 100%;
font-family: Arial, Helvetica, sans-serif;
font-size: 1.5vw;
cursor: pointer;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #1976d2;
}
color: ${(props: { isSelected: any; }) => props.isSelected ? '#ffffff' : '#ffffff'};
background-color: ${(props: { isSelected: any; }) => props.isSelected ? '#026dd9' : 'transparent'};
`;

export const NavIcon = styled.div`
padding-right: 1vw`;

export const Bars = styled(MenuIcon)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
// display: flex;
// align-items: center;
// margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
// &:hover {
// 	transition: all 0.2s ease-in-out;
// 	background: #fff;
// 	color: #808080;
// }
.active {
    transition: all 0.2s ease-in-out;
 	background: #fff;
 	color: #808080;
}
}
`;

export const NavHeader = styled.div`
color: #c9c5fc;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1.5vw;
padding-top: 5vh;
padding-bottom: 3vh;
height: 100%;
font-family: Arial, Helvetica, sans-serif;
font-size: 1.5vw;
font-weight: bold;
cursor: pointer;
`;

export const NavLogo = styled.div`
color: #ffffff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1.5vw;
padding-top: 5vh;
padding-bottom: 3vh;
height: 100%;
font-family: Arial, Helvetica, sans-serif;
font-size: 1.5vw;
font-weight: bold;
cursor: pointer;
`;

function NavBar() {
    const [selectedItem, setSelectedItem] = useState(0);
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <Nav isBlur={false}>
                <Bars />
                <NavMenu>
                    <NavLogo>
                        <img
                            style={{ width: "5vw", height: "5vw" }}
                            src={LOGO_IMAGE}
                            alt="logo"
                        />
                    </NavLogo>
                    <NavLink to='/admin' isSelected={path.includes('admin') ? true : false} >
                        <NavIcon>
                            <HomeIcon style={{ width: "4vh", height: "4vh", padding: "1vh" }} />
                        </NavIcon>
                        Home
                    </NavLink>
                    <NavLink to='/dashboard' isSelected={path.includes('dashboard') ? true : false} >
                        <NavIcon>
                            <DashboardIcon style={{ width: "4vh", height: "4vh", padding: "1vh" }} />
                        </NavIcon>
                        Dashboard
                    </NavLink>
                    <NavLink to='/users' isSelected={path.includes('users') ? true : false}>
                        <NavIcon>
                            <PeopleIcon style={{ width: "4vh", height: "4vh", padding: "1vh" }} />
                        </NavIcon>
                        Users
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );

}

export default React.memo(NavBar);