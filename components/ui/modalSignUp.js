import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";




function ChildModalsignUp() {
    const [signUpUsername, setSignUpUsername] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')

    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };


  const signUp = async () => {
    const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: {username, email, password}
    })
    const data = await response.json()

    if(data.result){


    }

  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>S'inscrire</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box>
          <img />
          <h4> Create your Hackatweet Account</h4>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default ChildModalsignUp();