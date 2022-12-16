import React from 'react'
import Frameworks from '../Skills/Frameworks'

import Skills from '../Skills/Abilities'
import Landing from './Landing'
import Languages from '../Skills/Languages'
import { Grid } from '@mui/material'

function HomeContainer() {
  return (
    <>
      <Grid container >
      <div style={{padding:"5vw"}} />
      <Grid   style={{ display:"flex"}} item xs={12} sm={12} md={12} lg={12} xl={12}>

      <Landing />
      </Grid>
      <div style={{padding:"5vw"}} />

        <Grid style={{}} i  item xs={12} sm={12} md={12} lg={12} xl={12}>


          <Skills />
          <Languages />
          <Frameworks />
        </Grid>
      </Grid>
    </>
  )
}

export default HomeContainer
