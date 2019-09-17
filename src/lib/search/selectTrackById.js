const selectTrackById = (id, tracks) => {
    const newTrack = tracks.filter(track => (track.id.toString() === id))
    return newTrack[0];
}

export default selectTrackById;