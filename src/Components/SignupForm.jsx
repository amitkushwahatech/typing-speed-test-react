import React, {useState} from 'react'
import {Box , Button, TextField} from '@mui/material';
import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';
const SignupForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const {theme} = useTheme();

    const handleSubmit = ()=>{
        if(!email || !password || !confirmPassword){
            alert('fill all details');
            return;
        }else if(password !== confirmPassword){
            alert('password mismatch !');
            return;
        }

        auth.createUserWithEmailAndPassword(email,password).then((res)=>{
            alert('user created');
        }).catch((err)=>{
            alert('not able to create user, try again');
        })
    }
  return (
    <Box 
    p={3}
    style={{
        display: 'flex',
        flexDirection: 'column',
        gap:'20px'
    }}>
        <TextField 
        variant="outlined"
        type="email"
        label="Enter Email"
        onChange={(e)=>setEmail(e.target.value)}
        InputLabelProps={{
            style:{
                color: theme.textColor
            }
        }}
        InputProps={{
            style:{
                color: theme.textColor
            }
        }}
        />
        <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        onChange={(e)=>setPassword(e.target.value)}
        InputLabelProps={{
            style:{
                color: theme.textColor
            }
        }}
        InputProps={{
            style:{
                color: theme.textColor
            }
        }}
        />
        <TextField
        variant="outlined"
        type="password"
        label="Enter Confirm Password"
        onChange={(e)=>setConfirmPassword(e.target.value)}
        InputLabelProps={{
            style:{
                color: theme.textColor
            }
        }}
        InputProps={{
            style:{
                color: theme.textColor
            }
        }}
        />
        <Button
        variant="contained"
        size="large"
        style={{backgroundColor: theme.textColor, color: theme.background}}
        onClick={handleSubmit}
       >Signup</Button>
    </Box>
  )
}

export default SignupForm