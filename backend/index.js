const express = require("express");
const cors = require("cors");
const axios = require('axios');

// Initialising express app
const app = express();

// Middelware to parse the incoming data into JSON Format
app.use(express.json());

// 
app.use(cors({ origin: true }));

// Route to authenticate
app.post("/authenticate", async (req, res) => {
    // Pull the username from the request body 
  const { username, secret } = req.body;
  console.log(secret);

  try {
    const result = await axios.put(
        'https://api.chatengine.io/users/', 
        { username: username, secret: secret, first_name: username },
        { headers: {"PRIVATE-KEY" : "c6c42ab6-5f07-40fd-b8d3-40485bba7292"}}
      );
      
      if(result.status != 200 ){
        console.log("Something Happened")
      }
      console.log("User Created");
    return res.status(result.status).json(result.data);
  } catch (e) {
    console.log("Error on Server Side");
  }
  
});

app.listen(3001);