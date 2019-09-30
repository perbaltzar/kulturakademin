import selectMediaById from './selectMediaById';
/**
 * Return all tracks with matching ids from playlist.trackIds
 * @param  {object} playlist
 * @param  {array} tracks
 */
const getTracksFromPlaylist = (playlist, tracks) => {
  const newTracks = [];
  if (playlist.trackIds) {
    playlist.trackIds.forEach(id => {
      const track = selectMediaById(id.toString(), tracks);
      newTracks.push(track);
    });
  }
  return newTracks;
};
export default getTracksFromPlaylist;
