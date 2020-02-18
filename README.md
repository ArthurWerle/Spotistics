PS: It is not done yet.

## React application that uses SpotifyAPI to allow users to see:
 - Recently played tracks
 - Top listened artists
 - Top listened tracks

**Check it out [here](https://arthurwerle.github.io/Spotistics/)** :)

___

## How to run it locally:
 ### Prerequisites
  - NodeJS (I recommend LTS version)
  
 ### Running
  - `npm i` to install dependencies
  - `npm start` to run the application
  
 ### Possible problems
  - You'll need to change the `clientId` variable in `src/config.js` to your clientID.
  - You'll need to change the `redirectUri` variable in `src/config.js` if you're using something different that `http:\\localhost:3000` 
  - Client URI erros: you'll need to set the redirect URL's in your Spotify For Developers Dashboard, because I'll setted it for my cliente ID (that is provided to you when you add an application to your account, and mine redirects to specific URL's that may not apply for you)
___

Feel free to fork, contribute and comment your thoughts about it.
___

*made with :heart: by me*
