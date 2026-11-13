// display movies
function displayMovies(movies) {
  const movieResults = movies.map((movie) => {
    const poster = movie.Poster !== 'N/A' ? movie.Poster : '';

    return `
      <div class="movie">
        <img src="${poster}" alt="${movie.Title}" />
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      </div>
    `;
  });

  document.querySelector('.movie-results').innerHTML = movieResults.join('');
}