import { useState } from "react";
import { Counter } from "./Counter";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InfoIcon from '@mui/icons-material/Info';
import{useNavigate} from "react-router-dom";

export function Movie({ movie ,id,deleteButton}) {
  const styles = {
    color: movie.rating > 8.5 ? "green" : "crimson",
    // backgroundColor:"orange",
  };
  const [show, setShow] = useState(true);
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  const navigate=useNavigate();
  return (
  <Card  className="movie-container">
    <img className="movie-poster" src={movie.poster} alt={movie.name} />
    <CardContent>
      <div className="movie-specs">
      <h2 className="movie-name">{movie.name}   
      <IconButton color="primary" onClick={() => setShow(!show)} aria-label="toggle summary">
  { show ?<ExpandLessIcon />: <ExpandMoreIcon />}
      </IconButton>
      <IconButton color="primary" onClick={() =>navigate(`/movies/${id}`)} aria-label="Movie-details">
      <InfoIcon />
      </IconButton>
      </h2>
      <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
    </CardContent>
    <CardActions>
    <Counter /> {deleteButton}
    </CardActions>

  </Card >
  );
}
