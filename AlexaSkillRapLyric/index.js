const alexa = require("alexa-sdk");



const data = {
"Chance The Rapper": [
"Ooh watch me come and put the hinges in their hand, countin benjis while we meetin, make them shake my other hand", "I dont make songs for free, i make em for freedom, dont believe in kings, believe in the kingdom",

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
result = rapper;
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
alexa.appId = "amzn1.ask.skill.522f9279-6359-4ea6-a027-b14680748b80";
alexa.registerHandlers(handlers);
alexa.execute();
};
