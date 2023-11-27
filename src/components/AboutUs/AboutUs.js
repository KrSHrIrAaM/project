import React from "react";
import './Aboutus.css';
import { NavLink } from 'react-router-dom';
import {Button } from "@mui/material";
const Contact =() => {
    return(
        <>
            <div className="Head">
                <h1 className="pad">Contact Us</h1>
            </div>
            <div className="Top">
                <p>Guest Contact Center</p>
            </div>
            <div className="Last">
                <div className="Font">
                <h3>In case of any queries or reservation requests please reach out to our Guest Contact Centre</h3>

                <h3> Operational Hours: 24/7</h3>

                <h3> Toll-free number (Valid for guest calling from within India)</h3>

                <h3> 1-800-419-6444 ; 1-800-102-2333</h3>

                <h3>  Direct number (Valid for guest calling from outside India)</h3>

                <h3> +91 0124 4816900; +91 0124 6718000</h3>

                <h3> Email: reservations@itchotels.in</h3>

                <h3> In case of any queries with respect to Club ITC or Club ITC Culinaire, please reach out to our Loyalty Help Desk</h3>

                <h3> Operational Hours: Monday - Friday | 0900 till 1700 hours</h3>

                <h3>  Email: clubitc.care@itc.in</h3>

                <h3> Direct Number: 1800-103-2482</h3>
                <br></br>
                <br></br>
                <h3>Add your feedback and comments </h3>
                </div>

                <div className="feed">
                <Button  component={NavLink}
        to="/FeedBack"
        sx={{
              backgroundColor:'grey',
              color: 'white',
              '&:hover': {
                color: 'white',
                backgroundColor: 'black'}}}>FeedBack</Button>
                </div>

            </div> 
        </>
    );
}
export default Contact;