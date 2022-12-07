
import { getAccordionDetailsUtilityClass } from '@mui/material';
import React ,{useEffect, useState}from 'react'
import "./Home.css"


import { FormControl, FormGroup, Input, InputLabel, Typography,styled, Button } from "@mui/material"
import { margin } from '@mui/system';

import {useNavigate} from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    var  user= JSON.parse(localStorage.getItem("suser"))|| ""
    console.log(user)
       const handleSubmit = ()=>{
           navigate("/")
       }
    return (
      <>
       {user ?<Typography>
             Email_Id  {user[0]?.email_id}
      </Typography> :""}
    <FormControl>
                   <Button  type="submit"  variant="contained" onClick={handleSubmit}>LogOut</Button>
               </FormControl>
      </>
    )
}

export default Home