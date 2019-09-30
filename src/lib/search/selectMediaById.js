/**
 * Return media with matching id
 * @param  {string} id
 * @param  {array} media
 */
const selectMediaById = (id, media) => {
  const newMedia = media.filter(media => media.id.toString() === id.toString());
  return newMedia[0];
};

export default selectMediaById;
