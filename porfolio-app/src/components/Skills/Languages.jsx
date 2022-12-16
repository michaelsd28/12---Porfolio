import { Box, Grid } from '@mui/material'
import React from 'react'
import SkillCard from './SkillCard'

function Languages() {
  return (
    <>
      <Box
        className="bg-gradient-languages"
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
            <h1 style={{ margin: 20, fontFamily: 'Roboto' }}>Lenguajes</h1>
          </Grid>

          <SkillCard
            className={'languages'}
            CardTitle={'Javascript'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/javascriptIcon.png'
            }
            paragraph={"He usado ampliamente tecnologias como JavaScript y React, dos poderosas herramientas para construir aplicaciones web. JavaScript es un lenguaje popular para el desarrollo front-end, y React es una biblioteca para crear interfaz de usuario."}
          />
          <SkillCard
            CardTitle={'CSharp'}
            className={'languages'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/csharpIcon.png'
            }
            paragraph={"Muy buena experiencia con C# en WPF y UWP, tecnologías utilizadas para crear aplicaciones de escritorio. UWP es un framework para crear interfaces de usuario modernas y WPF para el mismo fin de crear aplicaciones de escritorio en Windows"}
          />
          <SkillCard
            CardTitle={'Kotlin'}
            className={'languages'}
            imgSRC={
              process.env.PUBLIC_URL + '/assets/home/skills/kotlinIcon.png'
            }
            paragraph={"Soy competente en Kotlin, Ktor y Jetpack Compose, tecnologías para crear aplicaciones Android. Kotlin es un lenguaje moderno y expresivo que es totalmente interoperable con Java, Ktor es un libreria para crear aplicaciones de servidor, y Jetpack Compose para crear aplicaciones de Android."}
          />
        </Grid>
      </Box>
    </>
  )
}

export default Languages
