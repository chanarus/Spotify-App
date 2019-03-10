# Spotify-App

This is a sample app to search spotify tracks, albums, artists and playlists. Using the application user can search based on the above catogories and able to select the search result count.
[create-react-app](https://github.com/facebook/create-react-app) cli used to get the project up and runnung with minimal configuration and to manage state of the project used react own state managment tool "context api"
To make api calls [axios](https://github.com/axios/axios) is used, for styleing [bootstrap](https://getbootstrap.com/) and for icons [font-awesome](https://fontawesome.com/icons?d=gallery) is used.
The application support all three viewport (desptop, tablet and mobile).

## Setup the project

-   Clone the project from the repository [spotify-app](https://github.com/chanarus/spotify-app)
-   Run following commands in the root folder to setup the project.
    for npm
    ```bash
       npm install
    ```
    ```bash
       npm start
    ```
    for yarn
    ```bash
       yarn
    ```
    ```bash
       yarn start
    ```

## Folder structure

    ```
    spotify-app
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   └── manifest.json
    └── src
        ├──  components
        ├──  config
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── context.js
        ├── index.css
        ├── index.js
        ├── spinner.gif
        ├──  placeholder.jpg
        └── serviceWorker.js
    ```

## Screens

![Desktop](./screenshots/scrn1.jpg)
![Tablet](./screenshots/scrn2.jpg)
![Mobile](./screenshots/scrn3.jpg)
