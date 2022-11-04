import { Button, Grid, Pagination, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import LoggedBar from '../Components/Navbar/LoggedBar'
import Comment from '../Components/ShowTicket/Comment'
import CreateComment from '../Components/ShowTicket/CreateComment'
import TicketData from '../Components/ShowTicket/TicketData'

export default function ShowTicket() {
  const navigate = useNavigate();
  const navigateURL = url => () => {
    navigate(url);
  }
  return (
    <Fragment>
        <LoggedBar/>
        <Container maxWidth="xl" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={3}>

            <Grid item xs={12} md={6} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    
                  }}
                >
                  <Typography variant="h4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, non.
                  </Typography>
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    mt:5
                  }}
                >
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium, atque tempora earum reprehenderit iure ipsa. Perspiciatis ea pariatur sapiente praesentium beatae. Iure unde quis quasi amet fugit explicabo temporibus, cum voluptatibus aut expedita, neque excepturi suscipit voluptas. Voluptate minus soluta, quis debitis recusandae aut. Odit, nulla voluptatem sequi suscipit repellendus cupiditate possimus iusto doloribus. Dolorem magnam accusamus temporibus nemo voluptates! Minus tempore enim soluta at et, assumenda sunt ullam numquam suscipit nulla? Architecto soluta itaque dicta velit delectus esse exercitationem omnis, ipsam at a, in ipsum rem odit quo natus nam necessitatibus suscipit maiores, repellat laboriosam quasi labore. Obcaecati aliquid tempora blanditiis natus corporis provident porro reprehenderit nemo optio exercitationem, iste, repellat tempore eligendi. Delectus vero cupiditate, doloribus ab natus similique quae rem, expedita commodi impedit unde atque totam fuga harum incidunt consectetur fugit quaerat alias veniam. Optio fugit quos ea sapiente, quas quasi quis. Sit, non adipisci aspernatur animi maxime, tempore perspiciatis rem, consequuntur nesciunt eius illo? Ratione tenetur soluta officiis. Quae beatae, similique suscipit ea nemo possimus illo, sequi assumenda velit corrupti est! Perferendis quasi minus id facilis nostrum, optio excepturi omnis molestias fugiat, dolor ad officia consectetur totam recusandae impedit necessitatibus! Nostrum quidem, natus quod repellat, asperiores, fugiat minima quisquam odit velit consectetur sunt dolore animi voluptatem corporis est! Explicabo dicta tempore nostrum quod eaque hic dignissimos iusto nisi inventore, aspernatur aliquam recusandae. Quam eum cupiditate dolores at iste, provident ratione ullam sed, quod amet autem adipisci eligendi inventore minima aspernatur accusamus, officia cumque architecto odit quo debitis ipsa quaerat excepturi! Eum, temporibus? A non blanditiis magni soluta amet ut numquam nesciunt omnis repellat, reprehenderit saepe porro dignissimos perferendis aperiam sint placeat accusantium incidunt! Earum asperiores, fugiat excepturi dicta obcaecati adipisci accusamus accusantium possimus perspiciatis rerum? Earum possimus quod sit. Soluta repudiandae repellat minima sed ea!
                  </Typography>
                </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                  }}
                >
                 <TicketData></TicketData>
                 <Button sx={{marginTop: '30px'}} variant='contained' color='warning' onClick={navigateURL('/editar-reporte')}>Editar</Button>
                 <Button sx={{marginTop: '30px'}} variant='contained' color='secondary'>Cerrar Reporte</Button>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                  <CreateComment></CreateComment>
            </Grid>

            <Grid item xs={12} lg={10}>
                
                 <Comment></Comment>
                 <Comment></Comment>
                 <Comment></Comment>
                 <Comment></Comment>
                 <Comment></Comment>
                 <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                 <Pagination sx={{margin:"auto"}} count={10} color="primary" />
                </Paper>
            </Grid>
                  
            </Grid>

        </Container>
    </Fragment>
  )
}
