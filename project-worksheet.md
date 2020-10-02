# Project Overview

## Project Links

- [Github Repo](https://github.com/aeip/react-app)
- [add your deployment link]()

## Project Description
This React app is going to be a 3D art gallery using three.js. The user will start off in front of a computer screen where they must search for a music artist. Once the song is submitted, they will walk away from the computer and see the artist they just searched for's album art along the walls. The user can then walk up to an album art and click/tap on it and get a preview of the song.

## API
[iTunes API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/). You give it a search term like an artist name, album, song, etc and it returns data about it such as the song, album, artist, artwork url, and preview url. API doesn't use a key but requires for you to select country code. I'd prefer to use Apple's MusicKit API because it has a lot more data per song, but that requires a developer subscription that I no longer have. With the iTunes API, I am able to get all the neccessary details to make a pretty good MVP.


```
{
 "resultCount":1,
 "results": [
{"wrapperType":"track", "kind":"song", "artistId":268269988, "collectionId":1532112332, "trackId":1532112640, "artistName":"Cookin Soul & Larry June", "collectionName":"Orange Season (Deluxe Edition)", "trackName":"The P Vitamin C", "collectionCensoredName":"Orange Season (Deluxe Edition)", "trackCensoredName":"The P Vitamin C", "artistViewUrl":"https://music.apple.com/us/artist/cookin-soul/268269988?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/the-p-vitamin-c/1532112332?i=1532112640&uo=4", "trackViewUrl":"https://music.apple.com/us/album/the-p-vitamin-c/1532112332?i=1532112640&uo=4", 
"previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/81/8b/76/818b763f-8cb6-fc8e-4a14-84c543a976c9/mzaf_4583673478409297141.plus.aac.p.m4a", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/58/a2/d2/58a2d253-712e-79e4-3bac-6c341cd171fb/source/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/58/a2/d2/58a2d253-712e-79e4-3bac-6c341cd171fb/source/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/58/a2/d2/58a2d253-712e-79e4-3bac-6c341cd171fb/source/100x100bb.jpg", "collectionPrice":6.93, "trackPrice":0.99, "releaseDate":"2020-09-09T12:00:00Z", "collectionExplicitness":"explicit", "trackExplicitness":"explicit", "discCount":1, "discNumber":1, "trackCount":7, "trackNumber":7, "trackTimeMillis":179200, "country":"USA", "currency":"USD", "primaryGenreName":"Hip-Hop/Rap", "contentAdvisoryRating":"Explicit", "isStreamable":true}]
}

```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Desktop 1](https://res.cloudinary.com/drurxtkll/image/upload/v1601653677/Desktop_1_uspkqq.png)
- [Desktop 2](https://res.cloudinary.com/drurxtkll/image/upload/v1601653682/Desktop_2_kdfiu8.png)
- [Mobile 1](https://res.cloudinary.com/drurxtkll/image/upload/v1601653684/Mobile_1_uq6txz.png)
- [Mobile 2](https://res.cloudinary.com/drurxtkll/image/upload/v1601653688/Mobile_2_vkvb4i.png)
- [add link to your react architecture](https://docs.google.com/drawings/d/1mdgNDYmSB9LszA4IJpxa0L8F5vB_l0iBQ3yUOeI5q-c/edit?usp=sharing)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP
- Use data from iTunes API to display images, links, and playable song previews
- Use three.js and get 3d objects to render.
- Get 3d world to have basic infrastructure. 
- Display album art on walls
- Allow user to interact with the computer terminal to search a song.
- Display all components on mobile and have mobile controls.

#### PostMVP

- Make everything look professional in 3d world
- Download/design and display textures for the 3d world.
- Allow user to walk around 3d art gallery.
- Display more data under album art image
- Possibly organize the data in another way from what is returned (for example if 3 song results are on the same album, it will all be on the same wall).
- Display more objects in art gallery (for example, red rope, red carpet, tables, chairs, etc).

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
