import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

//rendered by App.jsx
export default function Login(props) {
  return (
    <>
      {!props.loggedIn ? (
        <div
          style={{
            // display: "flex",
            justifyContent: "center",
            margin: "60px 200px 80px",
          }}
          className="textfield"
        >
          <Stack spacing={5}>
            <TextField label="Required" defaultValue="Username" required />
            <TextField label="Required" defaultValue="Password" required />
            <Button
              onClick={() => props.setLoggedIn(!props.loggedIn)}
              variant="contained"
              color="success"
            >
              {props.loggedIn ? "Log Out" : "Log In"}
            </Button>
          </Stack>
        </div>
      ) : null}
    </>
  );
}