// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((currentMovie) => currentMovie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaSpielberg = moviesArray.filter(
    (currentMovie) =>
      currentMovie.director === "Steven Spielberg" &&
      currentMovie.genre.includes("Drama")
  );
  return dramaSpielberg.length;
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const average = moviesArray.reduce(
    (acumulador, currentScore) => acumulador + currentScore.score,
    0
  );
  return Number((average / moviesArray.length).toFixed(2));
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramatic = moviesArray.filter((currentMovie) =>
    currentMovie.genre.includes("Drama")
  );
  const dramaticAverage = dramatic.reduce(
    (acumulador, currentMovie) => acumulador + currentMovie.score,
    0
  );
  return Number((dramaticAverage / dramatic.length).toFixed(2));
}
console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
