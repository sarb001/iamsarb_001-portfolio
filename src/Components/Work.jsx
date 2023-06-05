import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Work = () => {
  return (
    <>
    <div style = {{margin:'3% 4%'}} id  = "work" >
          <div className = "work-section" style  = {{textAlign:'center',padding:'4%'}}>
             <span style = {{fontSize:"33px"}}> My Creative Portfolio Section  </span>
          </div>
                    <Stack direction = "row" spacing = {3} justifyContent={'center'}>

                      <Card sx={{ maxWidth: 340, minWidth:290,borderRadius:'15px' }}>
                        <CardMedia  
                          sx={{ height: 200 }}
                          image="/src/assets/web-designer.png"
                          title="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                              Insight-Ecommerce-Store
                          </Typography>
                          <Typography variant = "body2" color="text.secondary">
                            An Online Store to Buy Everything  
                          </Typography>
                        </CardContent>
                      </Card>

                      <Card sx={{ maxWidth: 340, minWidth:290,borderRadius:'15px' }}>
                        <CardMedia  
                          sx={{ height: 200 }}
                          image="/src/assets/web-designer.png"
                          title="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                               Insight-Social-App
                          </Typography>
                          <Typography variant = "body2" color="text.secondary">
                              Connect With Friends to Share and Like Posts
                          </Typography>
                        </CardContent>
                      </Card>

                      <Card sx={{ maxWidth: 340, minWidth:290,borderRadius:'15px' }}>
                        <CardMedia  
                          sx={{ height: 200 }}
                          image="/src/assets/web-designer.png"
                          title="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                               Learn-by-Coding
                          </Typography>
                          <Typography variant = "body2" color="text.secondary">
                              A Web-App that helps you to Buy Courses with Subscription
                          </Typography>
                        </CardContent>
                      </Card>

                    </Stack>
    </div>
    
    </>
  )
}

export default Work