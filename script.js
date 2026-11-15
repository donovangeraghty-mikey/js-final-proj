const initialMovies = [
  {
    Title: "Fight Club",
    Year: "1999",
    imdbID: "tt0137523",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
  },
  {
    Title: "Goon",
    Year: "2012",
    imdbID: "tt1456635",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTcxOTQwMTQ3MF5BMl5BanBnXkFtZTcwMDcyOTQwNw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  },
  {
    Title: "Harry Potter and the Deathly Hallows: Part 2",
    Year: "2011",
    imdbID: "tt1201607",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
  },
  {
    Title: "Harry Potter and the Sorcerer's Stone",
    Year: "2001",
    imdbID: "tt0241527",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
  },
  {
    Title: "Harry Potter and the Prisoner of Azkaban",
    Year: "2004",
    imdbID: "tt0304141",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
  },
  {
    Title: "Harry Potter and the Chamber of Secrets",
    Year: "2002",
    imdbID: "tt0295297",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGJhM2M2MWYtZjIzMC00MDZmLThkY2EtOWViMDhhYjRhMzk4XkEyXkFqcGc@._V1_QL75_UY562_CR6,0,380,562_.jpg",
  },
  {
    Title: "Harry Potter and the Goblet of Fire",
    Year: "2005",
    imdbID: "tt0330373",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTIzNzUzOTk2NV5BMl5BanBnXkFtZTYwNTI4MDg2._V1_QL75_UY562_CR0,0,380,562_.jpg",
  },
  {
    Title: "Harry Potter and the Order of the Phoenix",
    Year: "2007",
    imdbID: "tt0373889",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWJmM2M1YzItMjY1Ni00YzRmLTg5YWYtNDFmNTJjNzQ0ODkyXkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
  },
  {
    Title: "Harry Potter and the Deathly Hallows: Part 1",
    Year: "2010",
    imdbID: "tt0926084",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
  },
  {
    Title: "Harry Potter and the Half-Blood Prince",
    Year: "2009",
    imdbID: "tt0417741",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_QL75_UX380_CR0,12,380,562_.jpg",
  },
  {
    Title: "SpongeBob SquarePants",
    Year: "1999–",
    imdbID: "tt0206512",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY2NGUzMWItYjE3Zi00YWFiLTlmYzYtMjYwZjM3YWMxMDRiXkEyXkFqcGc@._V1_QL75_UY562_CR1,0,380,562_.jpg",
  },
  {
    Title: "The SpongeBob SquarePants Movie",
    Year: "2004",
    imdbID: "tt0345950",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTRhZDUzMjktOTJhMC00YjNlLTk5YjAtNTdiYTVmMzc1YTQ1XkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
  },
  {
    Title: "The SpongeBob Movie: Sponge Out of Water",
    Year: "2015",
    imdbID: "tt2279373",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGY4OGVlNDQtMzVlYy00NmE1LWE1N2YtZmNjYzJlOWY1NzZmXkEyXkFqcGc@._V1_QL75_UX380_CR0,15,380,562_.jpg",
  },
];

let movies = [...initialMovies];
let currentSearchTerm = "";
let searchRequestId = 0;
const moviesGrid = document.querySelector("#moviesGrid");
const resultsInfo = document.querySelector("#resultsInfo");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const searchButton = searchForm.querySelector(".search-form__button");
const sortControl = document.querySelector(".sort-control");
const OMDB_API_KEY = "3b3f8d02";

function renderMovies(movieList) {
  moviesGrid.replaceChildren();

  if (movieList.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No movies found.";
    moviesGrid.append(emptyMessage);
    return;
  }

  movieList.forEach((movie) => {
    const card = document.createElement("article");
    card.className = "movie-card";

    if (movie.Poster && movie.Poster !== "N/A") {
      const poster = document.createElement("img");
      poster.className = "movie-card__img";
      poster.src = movie.Poster;
      poster.alt = `${movie.Title} poster`;
      poster.loading = "lazy";
      card.append(poster);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "movie-card__poster-placeholder";
      placeholder.textContent = "Movie Poster Not Available";
      card.append(placeholder);
    }

    const title = document.createElement("h2");
    title.className = "movie-card__title";
    title.textContent = movie.Title;

    const year = document.createElement("p");
    year.className = "movie-card__year";
    year.textContent = movie.Year;

    const rating = document.createElement("p");
    rating.className = "movie-card__rating";
    rating.textContent = movie.ratingLoading
      ? "Rating: Loading..."
      : movie.ratingError
        ? "Rating: Could not load"
        : `Rating: ${movie.imdbRating || "Not available"}`;

    card.append(title, year, rating);
    moviesGrid.append(card);
  });
}

function getVisibleMovies() {
  const visibleMovies = [...movies];
  const sortOrder = sortSelect.value;

  if (sortOrder === "a-z") {
    visibleMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (sortOrder === "z-a") {
    visibleMovies.sort((a, b) => b.Title.localeCompare(a.Title));
  } else if (sortOrder === "newest") {
    visibleMovies.sort((a, b) => Number.parseInt(b.Year, 10) - Number.parseInt(a.Year, 10));
  } else if (sortOrder === "oldest") {
    visibleMovies.sort((a, b) => Number.parseInt(a.Year, 10) - Number.parseInt(b.Year, 10));
  }

  return visibleMovies;
}

function updateMovies() {
  const visibleMovies = getVisibleMovies();
  resultsInfo.textContent = currentSearchTerm
    ? `Showing results for: ${currentSearchTerm} (${visibleMovies.length})`
    : `Showing: All movies (${visibleMovies.length})`;
  renderMovies(visibleMovies);
}

function createOmdbUrl(params) {
  const url = new URL("https://www.omdbapi.com/");
  url.searchParams.set("apikey", OMDB_API_KEY);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  return url;
}

async function fetchMovieRating(imdbID) {
  try {
    const response = await fetch(createOmdbUrl({ i: imdbID }));
    if (!response.ok) {
      throw new Error(`OMDb request failed with status ${response.status}`);
    }

    const details = await response.json();
    if (details.Response === "False") {
      throw new Error(details.Error || "OMDb could not find this title");
    }

    return {
      imdbRating:
        details.imdbRating && details.imdbRating !== "N/A"
          ? details.imdbRating
          : "",
      ratingError: false,
    };
  } catch (error) {
    console.error(`Could not load the rating for IMDb ID "${imdbID}".`, error);
    return { imdbRating: "", ratingError: true };
  }
}

const ratingRequests = new Map();

function getMovieDetails(movie) {
  if (!ratingRequests.has(movie.imdbID)) {
    ratingRequests.set(movie.imdbID, fetchMovieRating(movie.imdbID));
  }

  movie.ratingLoading = true;
  return ratingRequests.get(movie.imdbID).then((ratingDetails) => {
    Object.assign(movie, ratingDetails, { ratingLoading: false });
    return movie;
  });
}

function setSearchLoading(isLoading) {
  searchForm.classList.toggle("is-loading", isLoading);
  searchForm.setAttribute("aria-busy", String(isLoading));
  searchButton.disabled = isLoading;
  searchButton.setAttribute(
    "aria-label",
    isLoading ? "Loading search results" : "Search",
  );
}

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (!searchTerm) {
    return;
  }

  const requestId = ++searchRequestId;
  setSearchLoading(true);
  resultsInfo.textContent = `Searching OMDb for: ${searchTerm}...`;

  try {
    const response = await fetch(
      createOmdbUrl({ s: searchTerm, page: "1" }),
    );
    if (!response.ok) {
      throw new Error(`OMDb search failed with status ${response.status}`);
    }

    const data = await response.json();
    if (requestId !== searchRequestId) {
      return;
    }

    if (data.Response === "False") {
      if (data.Error === "Movie not found!") {
        movies = [];
        currentSearchTerm = searchTerm;
        updateMovies();
        return;
      }
      throw new Error(data.Error || "OMDb search failed");
    }

    if (!Array.isArray(data.Search)) {
      throw new Error("OMDb returned an invalid search response");
    }

    const searchResults = data.Search.map((result) => ({
      ...result,
      ratingLoading: true,
    }));

    if (requestId !== searchRequestId) {
      return;
    }

    movies = searchResults;
    currentSearchTerm = searchTerm;
    updateMovies();

    await Promise.all(searchResults.map((movie) => getMovieDetails(movie)));
    if (requestId === searchRequestId) {
      updateMovies();
    }
  } catch (error) {
    if (requestId === searchRequestId) {
      movies = [];
      currentSearchTerm = searchTerm;
      resultsInfo.textContent = "Could not load movies. Please try again.";
      renderMovies([]);
      console.error("Could not search OMDb.", error);
    }
  } finally {
    if (requestId === searchRequestId) {
      setSearchLoading(false);
    }
  }
});

sortSelect.addEventListener("change", async () => {
  sortControl.classList.add("is-loading");
  sortControl.setAttribute("aria-busy", "true");
  sortSelect.disabled = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 120));
    updateMovies();
  } finally {
    sortControl.classList.remove("is-loading");
    sortControl.setAttribute("aria-busy", "false");
    sortSelect.disabled = false;
  }
});

updateMovies();
Promise.all(movies.map((movie) => getMovieDetails(movie))).then(updateMovies);
