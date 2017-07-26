const Alexa = require("alexa-sdk");


const data = {
  "Chance The Rapper": [
    "Ooh watch me come and put the hinges in their hand, countin benjis while we meetin, make them shake my other hand",
    "I dont make songs for free, i make em for freedom, dont believe in kings, believe in the kingdom",
    "Dont wake up, dont wake up, dont wake up too fast, dont make up your mind, you should fake on that class, sing all you want just dont drake on they ass" ,
    "They see my little ten day tape and my dumb raps, dont call it impossible, if you really want that,  they send my ass to summer school, dont call it a comeback, i just came to beat a bully's ass and get my lunch back",
    "cigarettes on cigarettes, my momma think i stank, i got burnholes in my memories my homies think it dank, i miss my cocoa butter kisses, i think we all addicted" ,
    "whats good, good. and whats good, evil. and whats good, gangstas. and whats good, people. and why gods phone die every time that i call on him, if his son had a twitter one day if i would follow him. swallow these synonyms, like cinnamon cinnibon, keep all them sentiments down to a minimum"
  ],

  "Travis Scott": [
    "I get those goosebumps every time, yeah, you come around, yeah, you ease my mind, you make everything feel fine",
    "always used to pull up, pop trunk at chacellors, yeah growing hard, fallin hard like a cancer, yeah, always in the city always keep a dancer, yeah she playin in my hair s-she gotta keep me handsome",
    "Me? on my rock n roll shit, mick jagger, im in these hidden hills with M&M's, kardashian, yeah i might need a doctor, aftermath is tragic, ive been taking all my doses, keeping up and active, rager aint no major thats a black basket",
    "mmmm, balance, find your balance, god said its my talent, sprinkle a little season on the salad, relieve my heart of malice, hit my palace, stroke my cactus, ooo dont wait, mmm dont play",
    "pulled out in the hood toyota, drove back to the hood lambo, crushes xans in my soda, ridin round the city with my eyes closed",

  ],

  "Asap Rocky": [
    "who the jiggy nigga with the gold links? got me reminiscin bout my old day, three six, suck a nigga dick, no foreplay, all day boomin out the trap through the hall way, tell me what you niggas know about it, auntie sayin turn it down or she finna call the cops, we be plottin on the ops, she the one who got the drop",
    "we used to wear rugged boots, now its all tailored suits, audemars piguets for my criminal recuits, champagne flutes, bumpin rythem and the blues, my partner made bad moves, he might end up in the news, or end up in the tombs or livin in the boondocks, ridin by the rulesl, ill abide by it soon, see the situation we sophisticated goons, i know you live by the gun, then you die by it too",
    "A rebel ill be one day, on that track with gunplay, outcast my whole life so i decide to spit like andre, beef is on my entree, gin and juice, thats bombay, drivin fast the wrong way, i swear life is like a one way, pussy on a sunday, business on a monday, my new crib came with fung shui, and my closets like a runwaycome be my fiancee, she fuck me in a hyundai, my rooftop got a lounge, just sit around and watch her sunbathe",
    "all i think about is life, nights sippin on sprite, little codine nigga get throwed right, two blonde dikes wanna kiss all night, i just pray to god that the shit go right, little arguements, and their fist dont fight, fuck a dog ho and the bitch gon bite, asap nigga, sip cris all night, so them r kelly hoes gettin pissed on twice",
    "yes im the shit, tell me do it stink? it feel good wakin up some money in the bank, three model bitches, cocaine on the seat, and im so bout it bout it, might roll up in a tank, cause my chain came from cuba, got a lock up on the link, and the mred bottom loafers just to compliment the mink, eyes chink, rollin up that dank blowin on that stank,",
    "I'm racked up like rappers, I'm Raf'd up on camera, Get knocked out on camera, Squeeze pump like asthma, It's rare Raf when I wear Raf Bare Raf when I wear Raf, Might invest into some Raf shares, Lil niggas still share Raf",

  ],

  "Kid Cudi": [
    ""

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
