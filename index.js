function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (var i = 0; i < musicians.length; i++) {

    var music = musicians[i];
    var strum = instruments[i];
     emptyArray.push(`${music} plays ${strum}`);
  }
return emptyArray
}

function johnLennonFacts(array) {
var facts = [];
  let i = 0;
  
  var plcHldr = array[i];
while (i < array.length) {
i++;
  facts.push(`${plcHldr} !!!`);
}
    return facts;
  }
