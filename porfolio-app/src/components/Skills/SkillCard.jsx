import * as React from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

function SkillCard({ className, imgSRC, CardTitle,paragraph }) {
  return (
    <Grid  item xs={12} sm={12} md={4} lg={4} xl={4} key={1}>
      <Card className={className + '-card'}>
        <CardContent style={{minHeight:340,maxHeight:340}}  className={className + '-card-content'}>
          <Typography gutterBottom variant="h5" component="div">
            <img
              style={{ margin: 10, width: 50 }}
              className="img-fluid"
              src={imgSRC}
              alt="logo"
            />{' '}
            {CardTitle}
          </Typography>
      
   
          <Typography variant="body1">
            {paragraph}

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver mas</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default SkillCard
