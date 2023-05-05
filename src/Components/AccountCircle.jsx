import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Modal, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useTheme } from "../Context/ThemeContext";
const AccountCircle = () => {
  const [open, setOpen] = useState(false);
  const [value , setValue] = useState(0);
  const {theme} = useTheme();
  const handelModalOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (e,v)=>{
       setValue(v);
  }
  return (
    <>
      <AccountCircleIcon onClick={handelModalOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "400px",
          }}
        >
          <AppBar position="static" style={{background:"transparent"}}> 
            <Tabs 
            value={value}
            onChange= {handleValueChange}
            variant='fullWidth'>
              <Tab label='login' style={{color: theme.textColor}}></Tab>
              <Tab label='signup' style={{color: theme.textColor}}></Tab>
            </Tabs>
          </AppBar>

          {value===0 && <LoginForm/>}
          {value===1 && <SignupForm/>}
        </div>
      </Modal>
    </>
  );
};

export default AccountCircle;
