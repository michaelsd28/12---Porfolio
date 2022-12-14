import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Lottie from 'lottie-react'
import React from 'react'
import profileAnim from './userProfile.json'

function About() {
  const lottieRef = React.useRef()

  return (
    <>
      <Box display="flex" alignItems="center" alignSelf="center">
        <Grid container>
          {/* <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <h1>About</h1>
          </Grid> */}

          <Grid
            item
            // style={{ border: '6px solid #5988ab' }}
            xs={12}
            sm={12}
            md={2}
            lg={2}
            xl={2}
          />
          <div
            style={{ position: 'absolute' }}
            className="circle-gradient circle-animation"
          />
          <Grid
            // style={{ border: '6px solid yellow' }}
            item
            direction="column"
            display="flex"
            alignItems="center"
            alignSelf="center"
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={4}
          >
            <Lottie
              style={{
                width: 'clamp(400px,40vw,800px)',
                padding: 0,
                margin: 0,
                // border: '5px solid red',
              }}
              animationData={profileAnim}
            />
          </Grid>

          <Grid
            item
            style={{ margin: 30, marginBottom: 80 }}
            direction="column"
            display="flex"
            alignItems="center"
            alignSelf="center"
            xs={12}
            sm={12}
            md={12}
            lg={4}
            xl={4}
          >
            {' '}
            <h1 style={{ fontSize: 'clamp(15px,10vw,45px)' }}>About</h1>
            <p style={{ fontSize: 20 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus saepe illo odit sed totam dolor voluptate eos, nemo
              iste, architecto, nam ullam rem minima quia consequatur unde
              itaque atque veritatis!
            </p>
            <p style={{ fontSize: 20 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus saepe illo odit sed totam dolor voluptate eos, nemo
              iste, architecto, nam ullam rem minima quia consequatur unde
              itaque atque veritatis!
            </p>
          </Grid>
          <Grid
            item
            // style={{ border: '6px solid #c55f25' }}
            xs={12}
            sm={12}
            md={2}
            lg={2}
            xl={2}
          />
        </Grid>
      </Box>
    </>
  )
}

export default About
