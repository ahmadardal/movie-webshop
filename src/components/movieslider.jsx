import "../styles/movieSlider.css";
import { MdChevronLeft,MdChevronRight } from "react-icons/md";
import MovieCard from "./MovieCard"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import GetMovieData from "./GetMovieData";

const MovieSlider = () => {

  const [slides, setSlides] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const moviesApi =
        "https://api.themoviedb.org/3/discover/movie?api_key=357fd9dbde100c5f47082ae6a7f86d8b&sort_by=popularity.desc"
      const respons = await fetch(moviesApi);
      const data = await respons.json();
      setSlides(data);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   GetMovieData("batman");
  // }, []);

 // const movie = ''; // Gör en map av slides i return delen och skicka in en movie

  const slideLeft = () => {
      var slider = document.getElementById("slider");
      slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  // const cardClicked = () => {
  //   alert("You clicked the card");
  // }

  const cardClicked = () => {
    <Link></Link> ;
  }

  return (
    <div className="main-slider-container">
      <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>   
      
      <div id="slider">
      
      if (slides != null) { 
       slides.results.map((movie, index) => {
          return (
            <Link to="/SelectedMovie">          
            <div className="slider-card" key={index}>            

            <MovieCard movie={movie}/>

            </div>
            </Link> 
          )
        })} 
      </div>
      <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
    </div>
  );
}

export default MovieSlider

// const movieSlider = () => {

//   const slides = [
//     {
//       image: 'https://picsum.photos/200/300',
//       title: "Här har vi den allra första bilden", 
//       rating:5,       
//   },
//   {
//       image:'https://picsum.photos/100/300',
//       title: "Här har vi den andra bilden", 
//       rating: 7,
//   },
//   {
//       image:'https://picsum.photos/200/400',
//       title: "Här har vi den tredje bilden",
//       rating: 3,
//   },
//   {
//     image: 'https://picsum.photos/100/400',
//     title: "Här har vi den fjärde bilden", 
//     rating:5,       
// },
// {
//   image: 'https://picsum.photos/500/300',
//   title: "Här har vi den femte bilden", 
//   rating:6,       
// },
// {
//   image: 'https://picsum.photos/600/500',
//   title: "Här har vi den sjätte bilden", 
//   rating:5,       
// },
// {
//   image: 'https://picsum.photos/100/400',
//   title: "Här har vi den sjunde bilden", 
//   rating:5,       
// },
//   ];

//   const movie = ''; // Gör en map av slides i return delen och skicka in en movie

//   const slideLeft = () => {
//       var slider = document.getElementById("slider");
//       slider.scrollLeft = slider.scrollLeft - 500;
//   }

//   const slideRight = () => {
//     var slider = document.getElementById("slider");
//     slider.scrollLeft = slider.scrollLeft + 500;
//   }

//   // const cardClicked = () => {
//   //   alert("You clicked the card");
//   // }

//   const cardClicked = () => {
//     <Link></Link> ;
//   }

//   return (
//     <div className="main-slider-container">
//       <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>   
      
//       <div id="slider">
      
  
//        { slides.map((slide,index) => {
//           return (
//             <Link to="/SelectedMovie">          
//             <div className="slider-card" key={index}>            

//             <MovieCard movie={slide}/>

//             </div>
//             </Link> 
//           )
//         })}
          
//       </div>
//       <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
//     </div>
//   );
// }

// export default movieSlider



