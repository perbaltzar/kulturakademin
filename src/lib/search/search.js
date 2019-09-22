import youtube from '../../data/youtube.json';
import playlists from '../../data/playlists.json';
import tracks from '../../data/tracks.json';

const data = [youtube, playlists, tracks].flat();

const search = query => {
  query = query.toLowerCase();
  // Splitting up query by space
  const descriptionResults = data.filter(media => {
    // Searching through description if exist
    if (media.description !== null) {
      return media.description.toLowerCase().includes(query);
    }
  });

  const titleResults = data.filter(media => {
    return media.title.toLowerCase().includes(query);
  });

  const tagResults = data.filter(media => {
    return media.tags
      .join(' ')
      .toLowerCase()
      .includes(query);
  });

  let results = [titleResults, descriptionResults, tagResults].flat();
  results = [...new Set(results)];
  return results;
};

export default search;
