import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

function ChildModalsignUp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
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

function ChildModalsignIn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
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
          <h4> Connect to Hackatweet</h4>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="password" />

          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

function Login() {

    
  return (
    <div>
      <div className="image">
        <img src="#"></img>
      </div>
      <div className="login">
        <div className="logo"></div>
        <div className="title"></div>
        <div className="login">
          <div className="">
            <h3>heo</h3>
          </div>
          <div>
            <ChildModalsignUp />
            <p>Already have an account?</p>
            <ChildModalsignIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
