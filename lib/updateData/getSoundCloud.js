// Structure of pod object
/*
const tracks = {
    id: String,
    title: String,
    description: String,
    tags: [String],
    streamUrl: String,
    duration: Int,
    thumbnail: String, 
    playlistId: String, 
}

const playlist = {
    id: String,
    title: String,
    description: String,
    tags: [String], // tags from all included tracks
    trackIds: [String],
    duration: Int,
    thumbnail: String,
}
*/

const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const CLIENT_ID = `?client_id=${process.env.SOUNDCLOUD_CLIENT_ID}`;
const SOUNDCLOUD_URI = 'http://api.soundcloud.com';
const USER_ID = process.env.SOUNDCLOUD_USER_ID;
const USER_NAME = process.env.SOUNDCLOUD_USER_NAME;

const getSoundCloud = async () => {
  try {
    const response = await fetch(
      `${SOUNDCLOUD_URI}/users/${USER_NAME}/playlists/${CLIENT_ID}&limit=200    `
    );
    const data = await response.json();
    // console.log(data);
    // Double loop in playlists

    let playlists = [];
    let tracks = [];
    playlists = data.map(playlist => {
      const trackIds = playlist.tracks.map(track => {
        return track.id;
      });
      let tags = [];
      playlist.tracks.map(track => {
        const newTag = track.tag_list.split(' ');
        newTag.map(tag => {
          tags.push(tag);
        });
      });
      tags = tags.filter(function(elem, pos) {
        return tags.indexOf(elem) == pos;
      });

      const newPlaylist = {
        id: playlist.id,
        title: playlist.title,
        description: playlist.description,
        trackIds: trackIds,
        duration: playlist.duration,
        thumbnail: playlist.artwork_url,
        tags: tags
      };
      return newPlaylist;
    });

    // Writing to file .json
    const file = path.join(__dirname, '../../data/playlists.json');
    fs.writeFile(file, JSON.stringify(playlists), err => {
      if (err) {
        return console.log('Fail ', err);
      }
    });
  } catch (e) {
    throw e;
  }

  try {
    const response2 = await fetch(
      `${SOUNDCLOUD_URI}/users/${USER_ID}/tracks/${CLIENT_ID}&limit=200`
    );
    const data2 = await response2.json();
    tracks = data2.map(track => {
      const newTrack = {
        id: track.id,
        title: track.title,
        description: track.description,
        tags: track.tag_list,
        streamUrl: track.stream_url,
        duration: track.duration,
        thumbnail: track.artwork_url,
        playlistId: null
      };
      return newTrack;
    });
    // Writing to file .json
    const file = path.join(__dirname, '../../data/tracks.json');
    fs.writeFile(file, JSON.stringify(tracks), err => {
      if (err) {
        return console.log('Fail ', err);
      }
    });
  } catch (e) {
    throw e;
  }
};

module.exports = getSoundCloud;
