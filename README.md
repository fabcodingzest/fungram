# Fungram 
This project is made uses Google Sheets api made with [NoCodeAPI](https://nocodeapi.com/) for fetching the data.

## [Check it out Live here](https://fungram.netlify.app/)

![Fungram Screenshot](./public/screenshot.png)
## Running the project

Create .env file and add following variable
```
REACT_APP_API=Your_Nocodeapi_Endpoint
```

Then you can run:

`yarn start` - Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

* Make sure you have netlify.toml
* Connect your GitHub with netlify
* Choose the repository to deploy your project
* Click on Advanced Settings and add `REACT_APP_API` environment variable (you can add this later and re-deploy too).
* And Deploy the App XD