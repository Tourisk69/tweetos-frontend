import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { login } from '../../reducers/user'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";




function ChildModalsignUp() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.token);



  const [signUpUsername, setSignUpUsername] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const signUp = async () => {
    const response = await fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify ({ username: signUpUsername, email: signUpEmail, password: signUpPassword })
    })
    const data = await response.json()

    if (data.result) {
      console.log('result')
      dispatch(login({ username: signUpUsername, token: data.token }))
      setSignUpUsername('');
      setSignUpPassword('');
      setSignUpEmail('');
      handleClose()

    }




  }


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
          <input type="text" placeholder="Username" onChange={(e) => setSignUpUsername(e.target.value)}/>
          <input type="email" placeholder="email" onChange={(e) => setSignUpEmail(e.target.value)}/>
          <input type="password" placeholder="password" onChange={(e) => setSignUpPassword(e.target.value)}/>

          <Button onClick={signUp}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default ChildModalsignUp;