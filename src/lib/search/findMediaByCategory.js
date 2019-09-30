/**
 * Returns media with matching tags of the category
 * @param  {string} category
 * @param  {array} media
 */
const findMediaByCategory = (category, media) => {
  const items = media.filter(media => {
    return media.tags.includes(category.toLowerCase());
  });

  return items;
};

export default findMediaByCategory;
