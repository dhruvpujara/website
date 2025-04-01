const animes = [
  { 
    "Id": "1",
    "Name": "Naruto Shippuden",
    "Image": "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    "View": "https://hianime.to/watch/naruto-677?ep=12352",
    "episodes": "500",
    "genre": "Action, Adventure, Comedy, Super Power, Martial Arts, Shounen",
    "status": "Completed",
    "description": "Naruto: Shippuden is an anime series adapted from Part II of Masashi Kishimoto's manga series, with exactly 500 episodes. It is set two and a half years after Part I in the Naruto universe, following the ninja teenager Naruto Uzumaki and his allies. The series is directed by Hayato Date, and produced by Pierrot and TV Tokyo. It began broadcasting on February 15, 2007 on TV Tokyo, and concluded on March 23, 2017.",
    "9ANIME": "https://9anime.org.lv/naruto-dub-episode-1/"
  },

  { 
    "Id": "2",
    "Name": "dragon ball",
    "Image": "https://th.bing.com/th/id/R.e9b956036e1128154721620dde8b1f1e?rik=w2Rw9k%2fZVFWSgA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f25500000%2fDragonball-Z-dragon-ball-z-25544707-1600-1057.jpg&ehk=SGtR1AsVF%2b4p5%2bt2NGk%2b4Hhm0c0z91Y5ymN0KZzCX7k%3d&risl=&pid=ImgRaw&r=0",
    "View": "https://hianime.to/watch/dragon-ball-509?ep=10218",
    "episodes": "153",
    "genre": "Action, Adventure, Comedy, Super Power, Martial Arts, Fantasy, Shounen",
    "status": "Completed",
    "description": "Dragon Ball is a Japanese anime television series produced by Toei Animation. It is an adaptation of the first 194 chapters of the manga of the same name created by Akira Toriyama, which were published in Weekly Shōnen Jump from 1984 to 1988. The anime is composed of 153 episodes that were broadcast on Fuji TV from February 26, 1986, to April 19, 1989.",
    "9ANIME": "https://9anime.org.lv/dragon-ball-daima-dub-episode-1/"
  },

  { 
    "Id": "3",
    "Name": "One Piece",
    "Image": "https://th.bing.com/th/id/OIP.4OcIYms0UQ7LgQXMnM5slAHaEK?rs=1&pid=ImgDetMain",
    "View": "https://hianime.to/one-piece-100",
    "episodes": "1000",
    "genre": "Action, Adventure, Comedy, Super Power, Drama, Fantasy, Shounen",
    "status": "Ongoing",
    "description": "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 22, 1997, with the chapters collected into 100 tankōbon volumes as of September 2021. The story follows the adventures of Monkey",
    "9ANIME": "https://9anime.org.lv/one-piece-dub-episode-1/"
  },

  { 
    "Id": "4",
    "Name": "Demon Slayer",
    "Image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b5020a13530f648be6f59e64f4ec78c3.jpg",
    "View": "https://hianime.to/watch/demon-slayer-kimetsu-no-yaiba-47?ep=1279",
    "episodes": "26",
    "genre": "Action, Demons, Historical, Shounen, Supernatural",
    "status": "Completed",
    "description": "Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows Tanjiro Kamado a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, and its chapters collected in 23 tankōbon volumes.",
    "9ANIME": "https://9anime.org.lv/demon-slayer-kimetsu-no-yaiba-dub-episode-1/"
  },
  { 
    "Id": "5",
    "Name": "Boruto",
    "Image": "https://th.bing.com/th/id/OIP.aOaZqaxOiIpzH3Rxin3WvwHaKW?rs=1&pid=ImgDetMain",
    "View": "https://hianime.to/watch/boruto-naruto-next-generations-8143?ep=47085",
    "episodes": "220",
    "genre": "Action, Adventure, Super Power, Martial Arts, Shounen",
    "status": "Ongoing",
    "description": "Boruto: Naruto Next Generations is a Japanese manga series written by Ukyō Kodachi and Masashi Kishimoto, and illustrated by Mikio Ikemoto. It began monthly serialization with Kodachi as writer and Kishimoto as editorial supervisor in Shueisha's shōnen manga magazine, Weekly Shōnen Jump in May 2016 and was transferred to Shueisha's monthly magazine, V Jump, in July 2019.",
    "9ANIME": "https://9anime.org.lv/boruto-naruto-next-generations-dub-episode-1/"
  },
  { 
    "Id": "6",
    "Name": "Tokyo Revengers",
    "Image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/8be468db3662b96b66888bb6c1577a2c.jpg",
    "View": "https://hianime.to/watch/tokyo-revengers-15585?ep=64630",
    "episodes": "24",
    "genre": "Action, Drama, Romance, School, Shounen, Supernatural",
    "status": "Ongoing",
    "description": "Tokyo Revengers is a Japanese manga series written and illustrated by Ken Wakui. It has been serialized in Kodansha's Weekly Shōnen Magazine since March 2017, with its chapters collected in twenty-two tankōbon volumes as of September 2021. The story follows Takemichi Hanagak a boy who learns that his girlfriend Hinata Tachibana has been killed by the Tokyo Manji Gang, and travels back in time to save her.",
    "9ANIME": "https://9anime.org.lv/tokyo-revengers-dub-episode-1/"
  },

  { "Id":"7" ,"Name": "Mob Psycho 100", "Image":"https://th.bing.com/th/id/OIP.ctJM16emmy8g6GfSpeMj2gHaKe?rs=1&pid=ImgDetMain", "View":"https://hianime.to/watch/mob-psycho-100-101","episodes":"25", "genre":"Action, Slice of Life, Comedy, Supernatural" ,"status":"Completed" ,"description":"Mob Psycho 100 is a Japanese manga series written and illustrated by ONE. It was serialized on Shogakukan's Ura Sunday website from April 2012 to December 2017. It has been also available online on Shogakukan's mobile app MangaONE since December 2014. Dark Horse Comics has licensed the series for English publication."},

  { 
    "Id": "8",
    "Name": "Jujutsu Kaisen",
    "Image": "https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    "View": "https://hianime.to/watch/jujutsu-kaisen-tv-534?ep=10789",
    "episodes": "24",
    "genre": "Action, Demons, Supernatural, School, Shounen",
    "status": "Completed",
    "description": "Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami, serialized in Shueisha's Weekly Shōnen Jump since March 2018. The individual chapters are collected and published by Shueisha, with sixteen tankōbon volumes released as of September 2021. The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.",
    "9ANIME": "https://9anime.org.lv/jujutsu-kaisen-episode-1/"
  },
  { 
    "Id": "9",
    "Name": "Wind Breaker",
    "Image": "https://th.bing.com/th/id/OIP.mhaGIyKsPnMy7tSJ4WzaZwHaKe?rs=1&pid=ImgDetMain",
    "View": "https://hianime.to/watch/wind-breaker-19136?ep=123203",
    "episodes": "24",
    "genre": "Action, Drama, School, Sports",
    "status": "Ongoing",
    "description": "Wind Breaker is a South Korean webtoon written by Yongseok Jo and illustrated by Yongseok Jo and Sungho Park. It was first published on Naver Webtoon on 8 July 2016. The webtoon is about a high school student named Jay who is a street fighter and a talented biker",
    "9ANIME": "https://9anime.org.lv/wind-breaker-dub-episode-1/"
  },
  { 
    "Id": "10",
    "Name": "Beyblade",
    "Image": "https://th.bing.com/th/id/R.ea31a388505c0ece6516910b6ddcc72f?rik=CHEgUjG9oQIUfQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fYodc2pY.jpg&ehk=oUTuL%2b%2fjuSZsVpLiqLH930nKDqKdbzK%2f00XZDvTvUAU%3d&risl=&pid=ImgRaw&r=0",
    "View": "https://hianime.to/watch/beyblade-4692?ep=38782",
    "episodes": "51",
    "genre": "Action, Adventure, Comedy, Sci-Fi, Shounen",
    "status": "Completed",
    "description": "Beyblade, known in Japan as Explosive Shoot Beyblade, is a Japanese manga series written and illustrated by Takao Aoki to promote sales of spinning tops called Beyblades. Originally serialized in CoroCoro Comic from September 1999 to July 2004, the individual chapters were collected and published in 14 tankōbon by Shogakukan.",
    "9ANIME": "https://9anime.org.lv/beyblade-x-dub-episode-1/"
  } ,

  { "Id":"11" ,"Name": "Bleach", "Image":"https://th.bing.com/th/id/OIP.TMVbatC_jaQECqyH_0S8rwEKF1?rs=1&pid=ImgDetMain", "View":"https://hianime.to/watch/bleach-806?ep=13793","episodes":"366", "genre":"Action, Adventure, Comedy, Super Power, Supernatural, Shounen" ,"status":"Completed" ,"description":"Bleach is a Japanese manga series written and illustrated by Tite Kubo. It follows the adventures of Ichigo Kurosaki, a teenager who can see ghosts. It was serialized in Shueisha's Weekly Shōnen Jump from August 2001 to August 2016, with its chapters collected in 74 tankōbon volumes.","9ANIME": "https://9anime.org.lv/bleach-episode-1/"},  

  { "Id":"12" ,"Name": "Death Note", "Image":"https://th.bing.com/th/id/R.26f196e6e5820731d7d74c35a1f3303f?rik=cwafv9%2bjEOPoug&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f16400000%2fDeath-Note-death-note-16488663-1600-1200.jpg&ehk=g97xmrq8RCvqVbFAD4UAavjCdijG9gnGDpQp56yLZig%3d&risl=&pid=ImgRaw&r=0", "View":"https://hianime.to/watch/death-note-60?ep=1464","episodes":"37", "genre":"Mystery, Police, Psychological, Supernatural, Thriller, Shounen" ,"status":"Completed" ,"description":"Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who stumbles across a mysterious otherworldly notebook: the Death Note, which belonged to the Shinigami Ryuk and grants the user the supernatural abilityof killing anyone by writing the victim's name while picturing their face.","9ANIME": "https://9anime.org.lv/death-note-episode-1/"},

  { "Id":"13" ,"Name": "Baki", "Image":"https://wallpapers.com/images/hd/baki-hd-all-characters-cu6au014a9lxygnd.jpg", "View":"https://hianime.to/watch/baki-2649?ep=28915","episodes":"48", "genre":"Action, Martial Arts, Shounen" ,"status":"Completed" ,"description":"Baki the Grappler is a Japanese manga series written and illustrated by Keisuke Itagaki. It was originally serialized in Weekly Shōnen Champion from 1991 to 1999 and collected into 42 tankōbon volumes by Akita Shoten. The story follows teenager Baki Hanma as he trains and tests his fighting skills against a variety of different opponents in deadly, no rules hand-to-hand combat.","9ANIME": "https://9anime.org.lv/baki-dub-episode-1/"},

  { "Id":"14" ,"Name": "Blue Lock", "Image":"https://i.pinimg.com/originals/40/d5/6a/40d56aa0eb32efa0e1ffc8573e62f7ff.png", "View":"https://hianime.to/watch/blue-lock-17889","episodes":"24", "genre":"Action, Shounen, Sports" ,"status":"Ongoing" ,"description":"Blue Lock is a Japanese manga series written by Muneyuki Kaneshiro and illustrated by Yusuke Nomura. It has been serialized in Kodansha's Weekly Shōnen Magazine since August 2018. The story follows the Japanese national football team as they try to win the FIFA World Cup, but are unable to score a single goal in the tournament. The team is disbanded and the players are sent to the Blue Lock, a facility where they are trained to become the best strikers in the world.","9ANIME": "https://9anime.org.lv/blue-lock-episode-1/"},

  { "Id":"15" ,"Name": "Chainsaw man", "Image":"https://cdn.noitatnemucod.net/thumbnail/300x400/100/b3da1326e07269ddd8d73475c5dabf2c.jpg", "View":"https://hianime.to/watch/chainsaw-man-17406?ep=94597","episodes":"24", "genre":"Action, Demons, Horror, Shounen, Supernatural" ,"status":"Ongoing" ,"description":"Chainsawman is a Japanese manga series written and illustrated by Tatsuki Fujimoto. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since December 2018, with its chapters collected in eleven tankōbon volumes as of September 2021. The story follows Denji, a young boy who becomes a Devil Hunter after his father dies and the family is left with a large debt to the Yakuza. He makes a contract with his pet devil Pochita to become a Devil Hunter and pay off his debt.","9ANIME":"https://9anime.org.lv/chainsaw-man-dub-episode-1/"},
  
  { "Id":"16" ,"Name": "Attack on Titan", "Image":"https://cdn.noitatnemucod.net/thumbnail/300x400/100/debf027d032c6d40b91fab16b2ff9bd4.jpg", "View":"https://hianime.to/watch/attack-on-titan-112","episodes":"75", "genre":"Action, Drama, Fantasy, Military, Mystery, Shounen, Super Power" ,"status":"Completed" ,"description":"Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives within territories surrounded by three enormous walls that protect them from gigantic titans that devour humans. The series first began in Kodansha's Bessatsu Shōnen Magazine on September 9, 2009, and it has been collected into 34 tankōbon volumes as of April 2021.","9ANIME": "https://9anime.org.lv/attack-on-titan-episode-1/"},
];

module.exports = {animes};
