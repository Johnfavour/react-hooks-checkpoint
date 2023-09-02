import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = () => {
    const movies = [
        {
            title:'Little mermaid',
            posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6H3zZX7sW4b5TzTp7mMwyCeZoWFlW3TQRtQ&usqp=CAU',
            description:'Ariel is a beautiful and spirited young mermaid with a thirst for adventure',
            rating:'4.5',
        },
        {
            title:'Meg2: the trench',
            posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShurxNaZ0F_3vEh7w_CJ9etJs_EqGiiAClHA&usqp=CAU',
            description:'Their voyage spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival',
            rating:'5.0',
        },
        {
            title:'The mother',
            posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6pQhypSeDP68-jxbGhl_PDWGFvR6dzgScA&usqp=CAU',
            description:'It is about a former US army operative (Lopez) who partners with an FBI agent to rescue her teenage daughter after she is kidnapped by criminals',
            rating:'4.5',
        },
        {
            title:'Heart of stone',
            posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjuk3ZqNxBE6vHlq7-iC6LF5T946AUtC6K8g&usqp=CAU',
            description:'Its plot follows an international intelligence operative who must embark on a dangerous mission to protect a mysterious artificial intelligence system known as "The Heart',
            rating:'4.8',
        },
        {
            title:'Extraction 2',
            posterUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kGPsLnY2EY9-VeThe_diXQlAHjHPrX6sTw&usqp=CAU',
            description:'Back from the brink of death, commando Tyler Rake embarks on a dangerous mission to save a ruthless gangsters imprisoned family ',
            rating:'4.9',
        },
    ];

//   return (
//     <div className="movielist">
//       {movies.map((movie, index) => (
//         <MovieCard 
//         title={movie.title} 
//         posterUrl={movie.posterUrl} 
//         description={movie.description} 
//         rating={movie.rating}/>
//       ))}
//     </div>
//   );
// }


return (
    <div className="movielist">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.title} // Using movie title as a unique key
          title={movie.title} 
          posterUrl={movie.posterUrl} 
          description={movie.description} 
          rating={movie.rating}
        />
      ))}
    </div>
  );
}  
export default MovieList;
