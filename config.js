

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["222913560634720256", ""], 
  mongodbUri : "mongodb+srv://tuga:<db_password>@eb.fh2mrgr.mongodb.net/?retryWrites=true&w=majority&appName=eb",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Spotify", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
