// src/pages/Directors.js
import React from 'react';
import NavBar from '../components/NavBar';

const directors = [
  { name: 'Director 1', movies: ['Movie 1', 'Movie 2'] },
  // Add more directors as needed
];

const Directors = () => {
  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default Directors;
