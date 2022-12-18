import * as React from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'

function SkillCard({ className, imgSRC, CardTitle, paragraph }) {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
      <Card style={{ height: '100%',borderRadius:15

      
      }} className={className + '-card'}>
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'start',
            height:"100%",
       
          }}
          className={className + '-card-content'}
        >
          <h5 style={{fontSize:"clamp(20px,10vw,26px)"}} >
            <img
              style={{ margin: 10, width: 50 }}
              className="img-fluid"
              src={imgSRC}
              alt="logo"
            />{' '}
            {CardTitle}
          </h5>

          <p  style={{fontSize:"clamp(16px,4vw,20px)"}}>{paragraph}</p>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  )
}

export default SkillCard
