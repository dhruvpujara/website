const {getDb} = require('../utility/database');

const {animes} = require("../JAVASCRIPT/links.js");   
const {animes2} = require("../JAVASCRIPT/links2.js");  

    exports.funcs = class funcs {
        animedet(animeId) {
            return animes.find(anime => anime.Id === animeId);
        }
        
        animedet2(animeId2) {
            return animes2.find(anime => anime.Id === animeId2);
        }

        async addtofav(animeId, curruser)  {
            const db = getDb();
            await db.collection('user').updateOne(
                { username: curruser },
                { $push: { favorite: animeId } }
            );
        }    

        async getfav(curruser) {
            const db = getDb();
            const user = await db.collection('user').findOne({ username: curruser });
            return animes.filter(anime => user.favorite.includes(anime.Id));
        }
    };