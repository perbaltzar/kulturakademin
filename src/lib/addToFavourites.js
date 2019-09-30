import isFavourite from './search/isFavourite';
/**
 * adding the id to favourites array in LocalStorage
 * @param  {string} id
 * @param  {object} favourites
 */
const addToFavourites = (id, favourites) => {
  if (isFavourite(id, favourites)) {
    favourites = favourites.filter(favourite => favourite.id !== id);
  } else {
    if (favourites === null) favourites = [];
    const timestamp = new Date().getTime();
    const singleFavourite = { id, timestamp };
    favourites.push(singleFavourite);
  }
  localStorage.setItem('favourites', JSON.stringify(favourites));
};

export default addToFavourites;
