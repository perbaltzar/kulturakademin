/**
 * Return true if media id exist in favourites
 * @param id media id
 * @param id array of favourites objects
 */
const isFavourite = (id, favourites) => {
  let idIsFavourite = false;
  if (favourites) {
    favourites.forEach(favourite => {
      if (favourite.id === id) idIsFavourite = true;
    });
  }
  return idIsFavourite;
};

export default isFavourite;
