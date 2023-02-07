import { Movie } from "./Movie";
import { AddMovie } from './AddMovie';
import{useEffect,useState}from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


export function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const getMovies=()=>{
    fetch("https://63dfc41859bccf35dab93fd4.mockapi.io/movies",{
      method:"GET",
    })
   .then((data) =>data.json())
   .then((mvs) =>setMovieList(mvs));
   };
  
  useEffect(()=>getMovies(),[]);
   
   const deleteMovie= async(id)=>{
    console.log("Deleting movie...",id);

   await fetch(`https://63dfc41859bccf35dab93fd4.mockapi.io/movies/${id}`,{
      method:"DELETE",
    });
     getMovies();
   };
  return (
    <div>
  
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie 
          key={mv.id}
           movie={mv} 
          id={mv.id}
          deleteButton={
          <IconButton
          sx={{marginLeft:"auto"}}
          color="error"
           onClick={()=>deleteMovie(mv.id)}>
           <DeleteIcon />
            </IconButton>} />
        ))}

      </div>
    </div>
  );
}
