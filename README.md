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

## COMMENTS FROM GROUP 11

* Overall more indentation needs to be done in files like Pod.js, AppModal.js, Video.js and PageBanner.
* Overall erase code that has been commented out. For example in Suggestions.js and Favourites.js.
* StyledPodResults is defined in file PodResults.js, but has no css. Maybe better to just have a div instead than unnecessary styled component. Same thing in TopResults.js, VideoResults.jsm PodPlayer.js and Icon.js.
* Be more consequent with how the components should be setup. For example in files like CrossIcon.js and Icon.js the end component is on the same row.
* ContinueListen and ContinueWathing has the same css. Maybe it would be better to have more styled components in GlobalStyles.js and fetch components for h2, section and the div that is being used.
* Props is never used in History.js, Headphones.js and HeadphonesLarge.js, AboutApp.js, About.js
* Overall they have been using both double quotation marks and single quotation marks. It would be a much cleaner code to just use one of them.
* No consistency how the line break is setup before the export default in the end of each file.
* No consistency when to use the line breaks when creating a new styled component in each file.
* In PodHero.js, trackPlaying is sent in to the component but never used.
* In SearchOrClose.js there is a semicolon missing on row 10.
* CategoryGrid sends key to CategoryBox but it is never used.
* When using components with no content you don’t always close the tag ex <Tag /> instead of <Tag></Tag> ex (DescriptionArrow.js, Line.js)
* Could have used a globalstyled component for all basic text instead of a new styledcomponent for every new text tag. Ex (About.js)
* Line component from players/Line is used in many places where players is not, maybe it should have been a separate component? ex (About.js)
* In PlaylistItems.js there is a line commented out “// Put on the rest” after the export default. Why is it there?
* In the folder “Home”, the components ContinueWatch ContinueListen is created but never used in Home.js
* CategoryGrid has a categories array, but there is also a separate categories.js file in the data folder. Better to use the file instead.
* In dependencies indoor package.json file, there is two different youtube-players, but only “@u-wave/react-youtube” is used. Maybe better to remove “react-youtube”.
* Overall better to have made a standard StyledViewPage with props instead of creating a new on on every page with similar styles

## LICENSE

MIT-LICENS, excpet for Kulturakademins Media for which all right are reserved.
