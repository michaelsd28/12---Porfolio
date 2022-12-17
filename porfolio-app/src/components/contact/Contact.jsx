import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import contactIMG from "./contact.jpg"

function Contact() {
  var [mailData, setMailData] = React.useState({
    email: '',
    name: '',
    lastName: '',
    subject: '',
    message: '',
  })

  const updateMailJson = (event) => {
    const { name, value } = event.target
    setMailData({
      ...mailData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    window.location.href = `mailto:michael11281@hotmail.com?cc=${mailData.email}&subject=${mailData.subject}&body=${mailData.message}%0D%0A %0D%0ACordialmente: %0D%0A${mailData.lastName + ', ' + mailData.name}`;


    event.preventDefault()
    event.currentTarget.reset()
  }

  function handleClear(event) {
    event.currentTarget.form.reset() // reset the form
  }

  return (
    <>
      <Box className="contact-responsive">
        <div class="circle-gradient"></div>
        <div style={{ margin: '6vh' }} />
        <Grid style={{ padding: 30 }} container>
          <Grid
            style={{ padding: 10 }}
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
                  `url(${contactIMG})`,
      

                backgroundSize: 'cover',
                backgroundPosition: 'right',
                borderRadius: '10px 0 0 10px',
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
              <Box
                style={{ padding: 20 }}
                display="flex"
                flexDirection="column"
              >
                <form
                  style={{ display: 'flex', flexDirection: 'column' }}
                  onSubmit={handleSubmit}
                >
                  <TextField
        
                    name="name"
                    type="text" 
                    onChange={updateMailJson}
                    sx={{ input: { color: 'white' } }}
                    id="fname standard-basic"
                    label="Nombre"
                    variant="standard"
                  />

                  <TextField
                    name="lastName"
                    onChange={updateMailJson}
                    sx={{ input: { color: 'white' } }}
                    id="lname standard-basic"
                    label="Apellido"
                    variant="standard"
                  />
                  <TextField
                   
                    name="email"
                    onChange={updateMailJson}
                    sx={{ input: { color: 'white' } }}
                    id="standard-basic"
                    label="CC Email "
                    variant="standard"
      
                    
                  />
                  <TextField
                    name="subject"
                    onChange={updateMailJson}
                    sx={{ input: { color: 'white' } }}
                    id="standard-basic"
                    label="Tema"
                    variant="standard"
                    style={{ margin: 5, borderRadius: 5, color: 'white' }}
                  />

                  <textarea
                    name="message"
                    onChange={updateMailJson}
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
                      onClick={(event) => event.currentTarget.form.reset()}
                    >
                      Limpiar
                    </Button>

                    <Button
                      style={{ margin: 5 }}
                      variant="contained"
                      color="secondary"
                      type="submit"
                    >
                      Enviar
                    </Button>
                  </Box>
                </form>
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
          <div style={{ margin: '6vh' }} />
        </Grid>
      </Box>
    </>
  )
}

export default Contact
