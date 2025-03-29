const { user } = require('../models/adduser.js');
const { funcs } = require('../models/animefuncs.js');
const { bugsreported } = require('../models/bugreported.js');


exports.gethome = (req, res, next) => {
    res.render('home');
};

exports.getindex = (req, res, next) => {
    res.render('index');
};

exports.gettrending = (req, res, next) => {
    res.render('trending');
};

exports.getlogin = (req, res, next) => {
    res.render('login');
};


exports.getwishlist =  async (req, res, next) => {
    const loggeduser = req.session.loggeduser;
    if (!loggeduser) {
        return res.status(401).render('notlogged');
    }
    const curruser = loggeduser.username;
    const animeFuncs = new funcs();
    const favorites = await animeFuncs.getfav(curruser);
    res.render('wishlist', { favorites });
};

exports.getw2g = (req, res, next) => {
    res.render('w2g');
};


exports.getindex2 = (req, res, next) => {
    const loggeduser = req.session.loggeduser;
    if (!loggeduser) { 
    res.render('index2'); } 
    else {
        res.render('index', { username: loggeduser.username });
    }
};

exports.getanimedet = (req, res, next) => {
    const animeId = req.params.Id;
    const animeFuncs = new funcs();
    const animedetails = animeFuncs.animedet(animeId);
    if (animedetails) {
        res.render('anime-det', { anime: animedetails });
    } else {
        res.status(404).send('Anime not found');
    }
};

exports.getanimedet2 = (req, res, next) => {
    const animeId2 = req.params.Id;
    const animeFuncs = new funcs(); 
    const animedetails = animeFuncs.animedet2(animeId2); 
    if (animedetails) {
        res.render('anime-det2', { anime: animedetails });
    } else {
        res.status(404).send('Anime not found');
    }
};

exports.getrepbugs = (req, res, next) => {
    res.render('rep-bugs');
};

// post methods


exports.postbugreported = (req, res, next) => {
    const { name, contact, description } = req.body;
    const bugreported = new bugsreported(name, contact, description);
    bugreported.addbugreported()
        .then(() => {
            res.redirect('/bug-reported');
        })
        .catch((err) => {
            console.error('Error reporting bug:', err);
            res.status(500).send('Internal Server Error');
        });
};

exports.getbugreported = (req, res, next) => {
    res.render('bug-reported'); 
};

exports.postindex = async (req, res, next) => {
    let { username, password } = req.body;
    const loggeduser =await user.loginusser(username, password);
    if (loggeduser) {
        req.session.loggeduser = loggeduser;
        res.render('index', { username: loggeduser.username });
    } else {
        res.status(401).send('Invalid username or password');
    }
};

exports.postanimedet = async (req, res, next) => {
    const loggeduser = req.session.loggeduser;
    if (!loggeduser) {
        return res.status(401).render('notlogged');
    }
    const curruser =loggeduser.username;
    const animeId = req.body.animeId;
    const animeFuncs = new funcs(); 
    await animeFuncs.addtofav(animeId, curruser);
    const animedetails = animeFuncs.animedet(animeId);
    res.render('anime-det', { anime: animedetails});

}

exports.postlogin = (req, res, next) => {
    const { username2, password2, mobileno } = req.body;
    const newuser = new user(username2, password2, mobileno);
    newuser.adduser();
    res.redirect('/login');
};

