# KULTURAKADEMIN

A website for streaming pod and videos for the organization [Kulturakademin](http://www.kulturakademin.com)
[Live version here](http://kulturplay.netlify.com)

## TOOLS

The Page is build with the help of [react](https://github.com/facebook/react), [styled-components](https://github.com/styled-components/styled-components), [react-soundplayer](https://github.com/kosmetism/) and [@u-wave/react-youtube](https://github.com/u-wave/react-youtube) among others.

YouTube and SoundCloud are used as back end and the data are fetched via their API's.

## SCRIPTS

```SH
$ npm run start     # Start react app on localhost:3000
$ npm run buils     # Builds the app
$ npm run update    # Fetches all of Kulturakademins media infromation from YouTube and Soundcloud
```

## DATA

The media information is stored in .JSON in this format:

```SH
# Addition data exist, just not needed att the moment.
[
    {
        "id": String,
        "title": String,
        "trackIds": [Int],
        "duration": Int, # Seconds
        "thumbnail": String,
        "tags": [String],
        "type": String
    }
]
```

## PWA

The site is made to be a PWA and can be used as such.

## CREATORS

Made by: [Adrian Jungnleius](https://github.com/AdrianJung/) and [Per Baltzar](https://github.com/perbaltzar)

## LICENSE

MIT-LICENS, excpet for Kulturakademins Media for which all right are reserved.
