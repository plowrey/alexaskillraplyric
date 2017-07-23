const Alexa = require("alexa-sdk");


const data = {
  "Chance The Rapper": [
    "Ooh watch me come and put the hinges in their hand, countin benjis while we meetin, make them shake my other hand",
    "I dont make songs for free, i make em for freedom, dont believe in kings, believe in the kingdom",
    "Dont wake up, dont wake up, dont wake up too fast, dont make ip your mind, you should fake on that class, sing all you want just dont drake on they ass" ,
    "They see my little ten day tape and my dumb raps, dont call it impossible, if you really want that,  they send my ass to summer school, dont call it a comeback, i just came to beat a bully's ass and get my lunch back",
    "cigarettes on cigarettes, my momma think i stank, i got burnholes in my memories my homies think it dank, i miss my cocoa butter kisses, i think we all addicted" ,
   "whats good, good. and whats good, evil. and whats good, gangstas. and whats good, people. and why gods phone die every time that i call on him, if his son had a twitter one day if i would follow him. swallow these synonyms, like cinnamon cinnibon, keep all them sentiments down to a minimum"
  ],

  "Travis Scott": [
    "I get those goosebumps every time, yeah, you come around, yeah, you ease my mind, you make everything feel fine", 'always used to pull up, pop trunk at chacellors, yeah goin hard fallin hard like a cancer', "on my rock n roll shit, mcjagger, im in these hidden hills with eminems, kardashians",
  ],
}


function pickRandomArtist(data) {
  let results;
  let count = 0;
  for (let rapper in data) {
    if (Math.random()<1/++count) {
      results = rapper;
    }
  }
  return results;
}

function pickRandomLyric(artist) {
  let index = Math.floor(Math.random()*data[artist].length);
  let lyrics = data[artist];
  let randomLyric = lyrics[index];
  return randomLyric;
}

const handlers = {
  'LaunchRequest': function () {
    this.emit(":ask", "Hello, you can ask me for a random rap lyric");
  },
  "GetRandomRapLyricIntent": function () {
    const artist = pickRandomArtist(data);
    const lyric = pickRandomLyric(artist);
    const speechOutput = lyric + " by " + artist;
    this.emit(":tell", speechOutput);
  },
  "AMAZON.HelpIntent": function () {
    this.emit(":ask", "Hello, you can ask me for a random rap lyric");
  },
  "AMAZON.CancelIntent": function () {
    this.emit("tell", "Goodbye");
  },
  "AMAZON.StopIntent": function () {
    this.emit("tell", "Goodbye");
  }
}

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context);
  alexa.appId = "";
  alexa.registerHandlers(handlers);
  alexa.execute();
};
