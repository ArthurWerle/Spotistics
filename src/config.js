export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "49c1e8e2a2474e76a62429a01cc8176d";

// For development on current machine
// export const redirectUri = "http://localhost:3000/";
// export const redirectUri = "http://10.0.0.78:3000/";

// For use in gh-pages
export const redirectUri = "https://arthurwerle.github.io/Spotistics/";

export const scopes = [
    "user-read-recently-played",
];