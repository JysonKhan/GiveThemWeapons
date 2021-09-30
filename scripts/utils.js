export function randomWeapon(){
  let WeapList = ["tj6TZ5aqxUgy6sjw", "aBKNBAhnwlRMWO3B", "ftfcg8TU3FGpUnfo", "oJSCvdpiqKPvwNxf"]; // filling array with weapon keys
  let NumWeap = "1d4-1"; // roll formula
  let randWeap = new Roll(NumWeap); // get new roll based on formula
  randWeap.evaluate(); // and get results
  return WeapList[randWeap.total]; // return results
};

export function needsWeapon(TDoc){ // if the weapons name is 'as weapon' return true else false
  for (let x = 0; TDoc.actor.data.items.size != x; x++) {
    if (TDoc.actor.data.items.contents[x].data.name === "as weapon"){return true;}
  }
  return false;
};

export async function replaceWeapon(TDoc, weapon){
	for (let x = 0; TDoc.actor.items.size != x; x++){
		if (TDoc.actor.items.contents[x].data.name === "as weapon"){ // confirm location of weapon placeholder
			let oWeap = TDoc.actor.items.contents[x].id; // get placeholders id
			let cWeap = game.items.get(weapon); // get replacement weapon by key
			
			await TDoc.actor.deleteEmbeddedDocuments("Item", [oWeap]); // delete placeholder
			await TDoc.actor.createEmbeddedDocuments("Item", [cWeap.data]); // insert replacement weapon
			
			return; // to quick exit the funtion
		}
		
	}
};
