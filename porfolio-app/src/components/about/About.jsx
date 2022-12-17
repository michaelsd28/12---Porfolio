import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Lottie from 'lottie-react'
import React from 'react'
import profileAnim from './userProfile.json'

function About() {
  
  const lottieRef = React.useRef()

  return (
    <>
      <Box style={{zIndex:5}} className="about-responsive" display="flex" alignItems="center" alignSelf="center">
        <Grid container   >
          <Grid   tem xs={12} sm={12} md={2} lg={2} xl={2} />
          
          <div
            style={{ position: 'absolute' }}
            className="circle-gradient circle-animation"
          />
          <Grid

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
     
              }}
              loop={false}
              animationData={profileAnim}
            />
          </Grid>

          <Grid
            item
            style={{ margin: "clamp(20px,80vw,35px)", marginBottom: 80 }}
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
            <h1 style={{fontSize:"clamp(20px,15vw,35px)"}} >Sobre mi</h1>
            <p style={{ fontSize: 19 }}>
            Como estudiante de ingeniería de software con un año restante en la universidad, he desarrollado sólidas habilidades de programación que me permiten crear aplicaciones y soluciones de software. Pasé los últimos años aprendiendo una variedad de lenguajes y técnicas de programación, y obtuve una base sólida en los principios de la informática. Confío en mi capacidad para crear soluciones de software eficientes y efectivas para una variedad de necesidades.


            </p>
            <p style={{ fontSize: 19 }}>
            Además de mis habilidades de programación, también soy un gran solucionador de problemas y un pensador crítico. He aprendido a abordar los problemas con una mentalidad lógica y analítica, lo que me ayuda a identificar y abordar rápidamente cualquier problema que pueda surgir durante el proceso de desarrollo. Constantemente busco nuevos desafíos y oportunidades para aprender y crecer como ingeniero de software, y estoy emocionado de ver lo que me depara el futuro.
            </p>
          </Grid>
          <div style={{padding:40}}/>
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
