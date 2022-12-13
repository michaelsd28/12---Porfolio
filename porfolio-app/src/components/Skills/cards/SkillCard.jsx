import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

function SkillCard() {
    return (
        <Grid item xs={12} sm={12} md={4} lg={4} key={1}>


        <Card className='skillCard' >
          <CardContent  className='skillCardContent' >
            <Typography sx={{ fontSize: 14 }}  gutterBottom>
            <img
style={{  margin: 10 }}
className="img-fluid"
src={`${process.env.PUBLIC_URL}/assets/home/skills/csharpIcon.png`}
alt="logo"
/> 
            </Typography>
   

            <Typography variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

            </Typography>
          </CardContent>
          <CardActions style={{background:"#111827"}}>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Grid>
      );
    }


export default SkillCard