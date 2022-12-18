import React from 'react'

import Box from '@mui/material/Box'

import Grid from '@mui/material/Grid'
import SkillCard from './SkillCard'

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
        <Grid container spacing={{ xs: 4, md: 4 }}>
          <Grid lg={12} md={12} sm={12} xs={12}>
            <h1 style={{ margin: 20, fontFamily: 'Roboto' }}>
              Mis habilidades
            </h1>
          </Grid>

          <SkillCard
            CardTitle={'Android'}
            className={'skill'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/androidIcon1.png'
            }
            paragraph={
              'Conocimientos Android Studio, Jetpack Compose y Flutter, poderosas herramientas para crear aplicaciones Mobiles. Jetpack Compose simplifica el diseño de la interfaz de usuario, Android Studio ofrece facilidades de depuración, y Flutter una libreria multiplataforma.'
            }
          />
          <SkillCard
            CardTitle={'Programacion OOP'}
            className={'skill'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/codingIcon.png'
            }
            paragraph={
              'Tengo experiencia en patrones de diseño y programación orientada a objetos, dos conceptos clave en el desarrollo de software. Los patrones de diseño brindan soluciones a problemas de diseño comunes y OOP organiza el código en torno a los objetos y sus interacciones.'
            }
          />
          <SkillCard
            CardTitle={'Base de datos'}
            className={'skill'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/databaseIcon.png'
            }
            paragraph={
              'Tengo experiencia con SQL y MongoDB, dos sistemas de bases de datos muy utilizados. SQL es un lenguaje estándar para bases de datos relacionales y MongoDB es una base de datos orientada a documentos. Soy capaz de implementar soluciones de bases de datos en ambos entornos.'
            }
          />
        </Grid>
      </Box>
    </>
  )
}

export default Skills
