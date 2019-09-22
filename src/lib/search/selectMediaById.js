const selectMediaById = (id, media) => {
  const newMedia = media.filter(media => media.id.toString() === id.toString());
  return newMedia[0];
};

export default selectMediaById;
