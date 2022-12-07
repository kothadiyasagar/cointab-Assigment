
 import React, { useEffect, useState } from "react"
import { FormControl, FormGroup, Input, InputLabel, Typography,styled, Button } from "@mui/material"
import {useNavigate} from "react-router-dom";

import axios from 'axios'


const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto  0 auto;
    &> div {
        margin-top:20px
    }`
 
 const Login = () => {
 


    const [user, setUser] = useState({})

    const navigate = useNavigate();
    const handleChange = (e) => {
        let {name, value} = e.target
        setUser( {
            ...user,
            [name] : value
        })
    }
    const handleSubmit = async() => {
        let payload = JSON.stringify(user)
    
       
         try {
            console.log(user)
          let res  = await  axios.post(`http://localhost:8080/login`,user,{ headers: {
            'Content-Type': 'application/json',
        }})
         
         console.log(res.data)
        if( typeof res.data ==="object"){
            localStorage.setItem("suser",JSON.stringify(res.data))
            navigate("/home")
        }
         else {
             
            alert(res.data)
         }
         
     } catch (error){
        alert(error)
     }

    }
   return (
    <>
       <Container>
        <Typography variant="h4">Login</Typography>
          <FormControl>
             
             <InputLabel>
             email
             </InputLabel>
             <Input   onChange={handleChange} type="text" name="email_id"/>
             </FormControl>
                <FormControl>
                <InputLabel>
                Password
                </InputLabel>
                <Input onChange={handleChange} type="text" name="password"/>
                </FormControl>
                <FormControl>
                   <Button  type="submit"  variant="contained" onClick={handleSubmit}>Login</Button>
               </FormControl>
                </Container>
    </>
   )
 }
 
 export default Login