import React from 'react'
import { Box, Grid } from '@mui/material'
import SkillCard from './SkillCard'

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
        <Grid style={{ zIndex: 10 }} container spacing={{ xs: 4, md: 4 }}>
          <Grid lg={12} md={12} sm={12} xs={12}>
            <h1 style={{ margin: 20, fontFamily: 'Roboto' }}>
              Librerias usadas
            </h1>
          </Grid>

          <SkillCard
            className={'frameworks'}
            CardTitle={'Mobiles'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/rocketIcon.png'
            }
            paragraph={
    
              <ul>
                <li>Jetpack compose</li>
                <li>Flutter</li>
                <li>Uno platform</li>
              </ul>
    
            }
          />
          <SkillCard
            className={'frameworks'}
            CardTitle={'Escritorio'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/rocketIcon.png'
            }
            paragraph={
              <ul>
                <li>UWP</li>
                <li>WPF</li>
                <li>Electron</li>
                <li>Jetpack compose</li>
                <li>Flutter</li>
                <li>JavaFX</li>
              </ul>
            }
          />
          <SkillCard
            className={'frameworks'}
            CardTitle={'Web'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/rocketIcon.png'
            }
            paragraph={
              <ul>
                <li>NodeJS</li>
                <li>React</li>
                <li>Ktor</li>
                <li>Spring boot</li>
    
              </ul>
            }
          />
        </Grid>
      </Box>
    </>
  )
}

export default Frameworks
