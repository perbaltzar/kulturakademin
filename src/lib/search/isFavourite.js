const isFavourite = (id, favourites) => {
  let isTrue = false;
  if (favourites) {
    favourites.forEach(favourite => {
      if (favourite.id === id) isTrue = true;
    });
    return isTrue;
  }
  return false;
};
export default isFavourite;
