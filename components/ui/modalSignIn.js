import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { login } from '../../reducers/user'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";




function ChildModalSignIn() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.token);



    
    const [signInPassword, setSignInPassword] = useState('')
    const [signInEmail, setSignInEmail] = useState('')


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const signIn = async () => {
        const response = await fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: signInEmail, password: signInPassword })
        })
        const data = await response.json()

        if (data.result) {
            console.log('result')
            dispatch(login({ username: signInUsername, token: data.token }))
            setSignInUsername('');
            setSignInPassword('');
            setSignInEmail('');
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
          <h4> Connect to Hackatweet</h4>
          <input type="text" placeholder="Email" onChange={(e) => setSignInEmail(e.target.value)} value={signInEmail} />
          <input type="password" placeholder="password" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />

          <Button onClick={() => signIn()}>Connect</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}


export default ChildModalSignIn;