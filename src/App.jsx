import "./App.css";
import{AddMovie} from "./AddMovie";
import { MovieList } from "./MovieList";
import { AddColor } from "./AddColor";
import { TicTacToe } from "./TicTacToe";
import { Routes, Route, Link, useNavigate,Navigate} from "react-router-dom";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MovieDetails } from "./MovieDetails";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  const names=["Sethupathi","Gowtham","Ajith"]
  const users=[
    {
      name:"Jaya",
       pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FTuThyL6wj5Z8PxoHJvAw3ivhHLlu1ckuw&usqp=CAU"
    },
    {
      name:"Kuttuma",
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" 
    },
    {
      name:"Venkat",
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" 
    },
  ];
  const navigate = useNavigate();
  const[mode,setMode]=useState("dark")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgStyles={
    borderRadius:"0px",
    minHeight:"100vh"
  };
 
  
  return (
    <QueryClientProvider client={queryClient}>
  
    <ReactQueryDevtools initialIsOpen={true} />
    <ThemeProvider theme={darkTheme}>
       <Paper sx={bgStyles} elevation={4} >
    <div className="App">
        <AppBar position="static">
        <Toolbar>
          <Button onClick={()=>navigate("/")}color="inherit">Home</Button>
          <Button onClick={()=>navigate("/tic-tac-toe")} color="inherit">Tic Tac Toe Game</Button>
          <Button onClick={()=>navigate("/movies")} color="inherit">Movies</Button>
          <Button onClick={()=>navigate("/color-game")} color="inherit">Color Game</Button>
          <Button onClick={()=>navigate("/movies/add")} color="inherit">Add Movie</Button>
          
          <Button
          sx={{marginLeft:"auto"}}
          onClick={()=>setMode(mode == "light"?"dark":"light")}
          color="inherit"
          startIcon={
            mode == "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          >
             
            {mode == "light"?"dark":"light"} Mode
           
            </Button>


        </Toolbar>
      </AppBar>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/films" element={<Navigate replace to="/movies"/>} />
        <Route
         path="/movies" 
         element={<MovieList />} />
        <Route path="/movies/:id" 
        element={<MovieDetails />} />
        <Route path="/movies/add" element={<AddMovie  />} />
        
        <Route path="/color-game" element={<AddColor />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
       </div>
       </Paper>
     
       </ThemeProvider>
  </QueryClientProvider>
   
  );
}
export default App;


