import Button from '@mui/material/Button';
import { useState } from "react";
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  return (
    <div className="add-movie-form">
      <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
      <TextField onChange={(event) => setPoster(event.target.value)} label="Poster" variant="outlined" />
      <TextField onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" />
      <TextField onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" />
      <TextField onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined" />
      <Button onClick={() => {
        const newMovie = {
          name: name,
          poster: poster,
          summary: summary,
          rating: rating,
          trailer:trailer,
        };
        setMovieList([...movieList, newMovie]);
        console.log(newMovie);
      }} variant="contained">Add Movie</Button>
    </div>
  );
}
