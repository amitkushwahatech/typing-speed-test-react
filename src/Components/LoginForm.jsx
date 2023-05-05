import React, {useState} from 'react'
import {Box , Button, TextField} from '@mui/material';
import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';
import {toast } from 'react-toastify';

const LoginForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {theme} = useTheme();

    const handleSubmit = ()=>{
        
        if(!email || !password){
            toast('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }

        auth.signInWithEmailAndPassword(email,password).then((res)=>{
            alert('logged in');
            return ;
        }).catch((err)=>{
            alert('invalid credential');
            return ;
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
        label="Enter email"
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
        label="Enter password"
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
        <Button
        variant="contained"
        size="large"
        style={{backgroundColor: theme.textColor, color: theme.background}}
        onClick={handleSubmit}
       >Login</Button>
    </Box>
  )
}

export default LoginForm