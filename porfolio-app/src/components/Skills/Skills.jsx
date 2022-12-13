import React from 'react'


import Box from '@mui/material/Box'

import Grid from '@mui/material/Grid'
import SkillCard from './cards/SkillCard'


function Skills() {
  return (
    <>


        <Box
          className="gradient-container"
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
            columns={{ xs: 1, sm: 3, md: 12 }}
          >
            <Grid lg={12} md={12} sm={12} xs={12}>
       
              <h1 style={{ margin: 20, fontFamily: 'Roboto' }}>My skills</h1>
            </Grid>
     
            <SkillCard
            className={'skill'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/androidIcon1.png'
            }
          />
          <SkillCard
            className={'skill'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/androidIcon1.png'
            }
          />
          <SkillCard
            className={'skill'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/androidIcon1.png'
            }
          />

    
          </Grid>
        </Box>

 
    </>
  )
}

export default Skills
