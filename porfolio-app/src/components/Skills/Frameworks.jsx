import React from 'react'
import { Box, Grid } from '@mui/material'
import SkillCard from './cards/SkillCard'

function Frameworks() {
  return (
    <>
  <Box
          className="bg-gradient-frameworks"
          display="flex"
          alignItems="center"
          style={{
            zIndex: 10,

            borderRadius: '10px',
            padding: 'clamp(10px,6vw,40px)',
            margin: 'clamp(10px,6vw,40px)',
            paddingBottom: '100px',
            paddingTop: '100px',
          }}
        >

          <Grid
            style={{ zIndex: 10 }}
            container
            spacing={{ xs: 4, md: 4 }}
   
          >

<Grid lg={12} md={12} sm={12} xs={12}>
       
       <h1 style={{ margin: 20, fontFamily: 'Roboto' }}>Frameworks</h1>
     </Grid>

<SkillCard
            className={'frameworks'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/rocketIcon.png'
            }
          />
          <SkillCard
            className={'frameworks'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/rocketIcon.png'
            }
          />
          <SkillCard
            className={'frameworks'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/rocketIcon.png'
            }
          />

        

        </Grid>
        
    </Box>

    </>
  )
}

export default Frameworks