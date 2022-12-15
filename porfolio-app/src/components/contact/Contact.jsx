import { Box, Button, Grid, TextField } from '@mui/material'

import React from 'react'
import contactImg from './contact.jpg'

function Contact() {
  return (
    <>
      <Box className='contact-responsive'>
        <div class="circle-gradient"></div>
        <div style={{margin:"6vh"}}/>
        <Grid style={{ padding: 30 }} container>
        <Grid
            style={{padding:10}}
            item
            alignContent="center"
            textAlign="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            >
                       <h1>Enviame un mensaje</h1>
            </Grid>
          <Grid
            item
            style={{ padding: 20 }}
            xs={12}
            sm={12}
            md={2}
            lg={2}
            xl={2}
          ></Grid>

          <Grid
            container
            style={{
       
              borderRadius: 15,
              backgroundImage:
                'linear-gradient(to top, #09203f 0%, #23333f 100%)',
            }}
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
          >
      
   
            {/* <img src={contactImg}></img> */}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{
    
                backgroundImage:
                  'url(static/media/contact.c670bf00e67ed028c838.jpg)',

                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius:"10px 0 0 10px"
    
     
        
              }}
            >
              {/* <img src={contactImg} alt="contact img" /> */}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{
                padding: 10,

        
              }}
            >
              <Box style={{padding:20}} display="flex" flexDirection="column">
                <TextField
                  sx={{ input: { color: 'white' } }}
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                />
                <TextField
                  sx={{ input: { color: 'white' } }}
                  id="standard-basic"
                  label="Last name"
                  variant="standard"
                />
                <TextField
                  sx={{ input: { color: 'white' } }}
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />
                <TextField
                  sx={{ input: { color: 'white' } }}
                  id="standard-basic"
                  label="Subject"
                  variant="standard"
                  style={{ margin: 5, borderRadius: 5, color: 'white' }}
                />

                <textarea
                  placeholder="Mensaje"
                  rows="3"
                  style={{
                    margin: 5,
                    background: '#353a45',
                    borderRadius: 10,
                    color: 'white',
                  }}
                  variant="filled"
                  sx={{ input: { color: 'white' } }}
                />
                <Box display="flex" flexDirection="row">
                  <Button
                    style={{ margin: 5 }}
                    variant="contained"
                    color="secondary"
                  >
                    Limpiar
                  </Button>
                  <Button
                    style={{ margin: 5 }}
                    variant="contained"
                    color="secondary"
                  >
                    Enviar
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid
            item
            style={{ padding: 10 }}
            xs={12}
            sm={12}
            md={2}
            lg={2}
            xl={2}
          ></Grid>
                     <div style={{margin:"6vh"}}/>
        </Grid>
      </Box>
    </>
  )
}

export default Contact
