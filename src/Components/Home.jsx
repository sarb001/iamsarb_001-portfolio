import { Avatar, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <div style = {{paddingTop :'6%'}} id = "home">

        <Grid container spacing={2} columns={16} style = {{textAlign:'center'}}>
          <Grid item xs={8} style = {{textAlign:'center',alignSelf:'center'}}>
            <Stack spacing={4}>
                <span>
                      <span style = {{paddingTop:'12%',fontSize:'31px'}}>  Sarb, Full Stack  Web Dev from India    </span>
                </span>
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <img src = "/src/assets/owner Avatar.png" alt = "Avatar" style = {{width:'30%'}} />
          </Grid>
        </Grid>

      </div> 
    </div>
  )
}

export default Home