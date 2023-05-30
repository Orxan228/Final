import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import TableRowsIcon from '@mui/icons-material/TableRows';
const Header = () => {
  return (
    <div className="header">
        <div className="header__inner">
            <div className="header__inner__left">
                <img src="https://preview.colorlib.com/theme/manup/img/logo.png.webp" alt="" />
            </div>
            <div className="header__inner__middle">
                <ul>
                    <li>Menu <TableRowsIcon/></li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/add"}>Add</Link></li>
                    <li>Speakers</li>
                    <li>Schedule</li>
                    <li>Blog</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div className="header__inner__right">
                <button><AirplaneTicketIcon/>Ticket</button>
            </div>
        </div>
    </div>
  )
}

export default Header
Header