import { useParams, useNavigate } from "react-router-dom";
import{useEffect,useState} from "react";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(()=>{
    fetch(`https://63dfc41859bccf35dab93fd4.mockapi.io/movies/${id}`)
   .then((data) =>data.json())
   .then((mvs) =>setMovie(mvs));
   },[id]);

  // const movie = movieList[id];

  console.log(movie);
  const styles = {
    color: movie.rating > 8.5 ? "green" : "crimson",
    // backgroundColor:"orange",
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe width="100%"
        height="650"
        src={movie.trailer}
        title="VIKRAM HITLIST (HINDI) – Official Trailer | Kamal Haasan |Vijay Sethupathi, Fahadh | Lokesh |Anirudh"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>

      </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}
          </h2>
          <p style={styles} className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          startIcon={<KeyboardBackspaceIcon />}

          variant="contained"
          onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}
