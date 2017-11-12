const movieRepository = require('../repositories/movies');

// Come across all available movies
function getAvailableMovies(req, res, next) {
    movieRepository.findAvailables().then((result) => {
        res.status(200).send(result);
    }).catch(next);
}

// Come across movies
function getMoviesByTitle(req, res, next) {
    const title = req.params.title;
    if (title.length <= 3) {
        next({ status: 400, content: 'Buscas apenas com mais de 3 cacacteres' });
    }
    else{
       movieRepository.findByTitle(title).then((result) => {
           res.status(200).send(result);
       }).catch(next);
    }
}

module.exports = {
  getAvailableMovies,
  getMoviesByTitle
};
