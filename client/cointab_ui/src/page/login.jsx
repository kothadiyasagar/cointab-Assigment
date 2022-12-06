
 import React, { useEffect, useState } from "react"
 import { FormControl, FormGroup, Input, InputLabel, Typography,styled, Button } from "@mui/material"


//  import axios from 'axios'

 
 const Container = styled(FormGroup)`
     width:50%;
     margin: 5% auto  0 auto;
     &> div {
         margin-top:20px
     }`
  
  const Login = () => {
   

     const [user, setUser] = useState({})
 

     const handleChange = (e) => {
         let {name, value} = e.target
         setUser( {
             ...user,
             [name] : value
         })
     }
     const handleSubmit = async() => {
         let payload = JSON.stringify(user)
         console.log(user)
        
          try {
     
 
      } catch (error){
         alert("put below data      email :-eve.holt@reqres.in password cityslicka")
      }
     //     fetch("https://reqres.in/api/login" ,{
     //         headers : {
     //             "Content-Type" : "application/json"
     //         },
     //         method : 'POST',
     //         body : payload
     //     })
     //     .then((res) => res.json())
     //     .then((res)=>{
     //         console.log(res)
     //    let token = res.token
         
     //       dispatch(Logins(token))
        
     //       if(token) {navigate("/") }
     //     })
     //     .catch((err) =>  {alert(err)})
     }
    return (
     <>
        <Container>
         <Typography variant="h4">Login</Typography>
           <FormControl>
              
              <InputLabel>
              email
              </InputLabel>
              <Input   onChange={handleChange} type="text" name="email"/>
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