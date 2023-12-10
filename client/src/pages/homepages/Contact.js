

import { useState } from "react";
import { TextField, Button, Typography, Grid, Box } from "@mui/material";
import Dialogbox from "./Dialogbox";
import { useRef } from 'react';



export default function Contact() {
    // const NameRef=useRef(null)
    // const EmailRef=useRef(null)
    // const problemRef=useRef(null)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
   
  console.log(name)
  console.log(email)
  console.log(message)
  };




  return (
    <>
    <Box sx={{ height: "100vh" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h4" align="center" mb={2}>
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src="https://cdn.pixabay.com/photo/2023/04/24/03/16/camping-7947056__340.jpg"
                      alt="Contact"
                      style={{ maxWidth: "100%" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    
                  <TextField
                    fullWidth
                    label="Name"
                    // ref={NameRef}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    // ref={EmailRef}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    type="email"
                  />
                  <TextField
                    fullWidth
                    label="Please Describe Your Problem"
                    value={message}
                    // ref={problemRef}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button  type="submit" sx={{ mt: 2 }}>
                  <Dialogbox/>
                
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>


    </>
  );
}