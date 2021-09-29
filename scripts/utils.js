export function randomWeapon(){
  let WeapList = ["tj6TZ5aqxUgy6sjw", "aBKNBAhnwlRMWO3B", "ftfcg8TU3FGpUnfo", "oJSCvdpiqKPvwNxf"];
  let NumWeap = "1d4-1";
  let randWeap = new Roll(NumWeap);
  randWeap.evaluate();
  return WeapList[randWeap.total];
};

export function needsWeapon(TDoc){
  for (let x = 0; TDoc.actor.data.items.size != x; x++) {
    if (TDoc.actor.data.items.contents[x].data.name === "as weapon"){return true;}
  }
  return false;
};

export async function replaceWeapon(TDoc, weapon){
	for (let x = 0; TDoc.actor.items.size != x; x++){
		if (TDoc.actor.items.contents[x].data.name === "as weapon"){
			let oWeap = TDoc.actor.items.contents[x].id;
			let cWeap = game.items.get(weapon);
			console.log("and we have a ...");
			console.log(cWeap);
			console.log(oWeap);
			await TDoc.actor.deleteEmbeddedDocuments("Item", [oWeap]);
			await TDoc.actor.createEmbeddedDocuments("Item", [cWeap.data]);
			
			return;
		}
		
	}
};
