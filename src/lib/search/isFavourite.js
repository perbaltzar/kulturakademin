/**
* Return true if media id exist in favourites
* @param id media id 
* @param id array of favourites objects
 */
const isFavourite = (id, favourites) => {
  if (favourites) {
    favourites.forEach(favourite => {
      if (favourite.id === id) return true;
    });
  }
  return false;
};

export default isFavourite;
