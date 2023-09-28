import React from "react";
import './ComponentStyles/Header.css';
function Header(){
    return(
        <>
        <div id="header">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#home">Requests</a></li>
                <li><a href="#home">Create proposal</a></li>
                <li><a href="#home">Monthly Debits</a></li>
                <li><a href="#home">Monthly credits</a></li>
            </ul>
        </div>
        </>
    );
}
export default Header;