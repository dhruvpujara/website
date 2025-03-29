const express = require('express');
const userroutes = express.Router();
const ussercontroler = require('../controller/ussercontroler');



userroutes.get("/", ussercontroler.gethome);
userroutes.get("/index", ussercontroler.getindex);
userroutes.get("/trending", ussercontroler.gettrending);
userroutes.get("/login", ussercontroler.getlogin);
userroutes.get("/wishlist", ussercontroler.getwishlist);
userroutes.get("/w2g", ussercontroler.getw2g);
userroutes.get("/index2", ussercontroler.getindex2);
userroutes.get("/anime-det/:Id", ussercontroler.getanimedet);
userroutes.get("/rep-bugs", ussercontroler.getrepbugs); 
userroutes.get("/bug-reported", ussercontroler.getbugreported); 
userroutes.get("/anime-det2.ejs/:Id", ussercontroler.getanimedet2);


userroutes.post("/anime-det/liked", ussercontroler.postanimedet);
userroutes.post("/bug-reported", ussercontroler.postbugreported)
userroutes.post("/index.ejs", ussercontroler.postindex);
userroutes.post("/login.ejs", ussercontroler.postlogin); 
module.exports = userroutes;