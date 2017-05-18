/* Users on longer flight sliek to start a second movie right when their first one ends,
but they complain that the plane usually lands before they can see the ending. So
you're buildling a feature for choosing two movies whose total runtimes will
equal the exact flight length.

Write a function that takes an integer flight_length (in minutes) and an array of
integers movie_lengths(in minutes) and returns a boolean indicating whether there
are two numbers in movie_lengths whose sum equals flight_length.

When building your function:
  -Assume your users will watch exactly two movies
  -Don't make your users watch the same movie twice
  -Optimize for runtime over memory */

  const inflightEntertainment = (movieLengths, flightLength) => {
    // movie lengths we've seen so far
    // keys are the lengths, values are a boolean true
    let movies = {};

    for (let movieLength of movieLengths) {
      let matchingSecondMovieLength = flightLength - movieLength;

      if (movies[matchingSecondMovieLength]) return true;

      movies[movieLength] = true;
    }

    // we never foudn a match, so return false;
    return false;
  };

  const exampleMovieLength = [93, 143, 83, 89, 98, 120, 123, 110];
  const exampleFlightLength = 193;

  console.log(inflightEntertainment(exampleMovieLength, exampleFlightLength));
