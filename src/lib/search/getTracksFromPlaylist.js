import selectMediaById from './selectMediaById';

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
