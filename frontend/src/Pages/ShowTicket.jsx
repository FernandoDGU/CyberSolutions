import { Button, Grid, Pagination, Paper, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import LoggedBar from '../Components/Navbar/LoggedBar'
import Comment from '../Components/ShowTicket/Comment'
import CreateComment from '../Components/ShowTicket/CreateComment'
import TicketData from '../Components/ShowTicket/TicketData'
import { createComentario, getComentarioByReporte } from '../Services/ComentarioService'
import { getReporteFromId, updateReporte } from '../Services/ReporteService'
import { getFromId } from '../Services/UserServices'
import CookieManagement from '../Utils/CookieManagement'

const cookie = new CookieManagement()

export default function ShowTicket() {
  const [user, setUser] = useState({});
  const [reporte, setReporte] = useState({});
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams((search));
  const [comment, setComment] = useState({
    _reportes: "",
    _user: "",
    content: ""
    });
  const [comments, setComments] = useState([]);
  const itemsPerPage = 5;
  const [page, setPage] = React.useState(1);
  const [noOfPages, setNoOfPages] = React.useState(1);
  const [countComment, setCountComment] = useState(0);

    const handleComment = (event) => {
        setComment({
          ...comment,
          content: event.target.value
        });
      };

      const handleChange = (event, value) => {
        setPage(value);
    };
    
    async function createCommentFunction(){
      const res = createComentario(comment);
      setCountComment(countComment + 1)
      setComment({
        ...comment,
        content: ""
      })
    }

      const createCommentHandle = () => {
        createCommentFunction()
      }

    async function updateTicketFunction(){
      const ticketUpdated = {
        name: reporte.name,
        description: reporte.description,
        state: "cerrado"
      }
      setReporte({
        ...reporte,
        state: "cerrado"
      })
      const res = await updateReporte(ticketUpdated, searchParams.get("id"));
    }

    const closeTicket = () => {
      updateTicketFunction()
    }

  const navigateURL = url => () => {
    navigate(url);
  }

  async function getFromIdFunction(id){
    const res = await getFromId(id);
    setUser(res.data);
  }

  async function getReporteFromIdFunction(id){
    const res = await getReporteFromId(id);
    setReporte(res.data);

  }

  async function getComentariosByReporteFunction(id){
    const res = await getComentarioByReporte(id);
    if(res.data){
      setComments(res.data);
      setNoOfPages(Math.ceil(res.data.length / itemsPerPage));
    }
    
  }

  useEffect(()=>{
    const id = cookie.getCookie("id");
    if(id){
      getFromIdFunction(id);
      getReporteFromIdFunction(searchParams.get("id"))
      getComentariosByReporteFunction(searchParams.get("id"))
      setComment({
        ...comment,
        _reportes: searchParams.get("id"),
        _user: id
      });
    }else{
      navigate('/iniciar-sesion');
    }
  },[])

  useEffect(()=>{
    getComentariosByReporteFunction(searchParams.get("id"))
  },[countComment])


  if (!Object.keys(user).length && !Object.keys(reporte).length && !Object.keys(comments).length) return (<h1></h1>)

  if (!reporte._user && !reporte._sucursal && !reporte._category) return (<h1></h1>)



  return (
    <Fragment>
        <LoggedBar user={user} />
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
                    {reporte.name}
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
                    {reporte.description}
                  </Typography>
                </Paper>

                <Grid container justifyContent={"center"} alignItems={"center"} sx={{mt:5}}>
                  <Grid item xs={10}>
                  <TextField
                id="outlined-multiline-flexible"
                label="Escribe un comentario..."
                multiline
                maxRows={4}
                variant={"filled"}
                value={comment.content}
                onChange={handleComment}
                fullWidth
              />
                  </Grid>
                  <Grid item xs={7} m={3}>
                  <Button variant="contained" fullWidth onClick={createCommentHandle}>Comentar</Button>
              </Grid>
              </Grid>

              {
                comments.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((com, index) => (
                  <Comment key={index} com={com} />
                ))
                }
                 <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                 <Pagination
                  count={noOfPages}
                  page={page}
                  onChange={handleChange}
                  showFirstButton
                  showLastButton
                  defaultPage={1}
                  sx={{margin:"auto"}} color="primary" />
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
                 <TicketData reporte={reporte} numComentarios={comments.length} ></TicketData>
                 {
                    user._id === reporte._user._id || user.userType === 1 ? <Button sx={{marginTop: '30px'}} variant='contained' color='warning' onClick={navigateURL('/editar-reporte?id=' + reporte._id)}>Editar</Button> : <Typography></Typography>
                 }
                 {
                    (user._id === reporte._user._id || user.userType === 1) && reporte.state !== "cerrado" ? <Button sx={{marginTop: '30px'}} variant='contained' color='secondary' onClick={closeTicket}>Cerrar Reporte</Button>  : <Typography></Typography>
                 }
                 
                </Paper>
            </Grid>

            <Grid item xs={12} lg={10}>
                
                 
            </Grid>
                  
            </Grid>
                 <Footer sucursal={user._sucursal.name} />
        </Container>
    </Fragment>
  )
}
