import { needsWeapon, randomWeapon, replaceWeapon } from "./utils.js";

Hooks.on("createToken", (TDoc) => {
	
	if (TDoc.actor.type === "NPC") {  // check if it's an NPC
	if (needsWeapon(TDoc)) {  // if the need a 'weapon'
		  let rWeap = randomWeapon();  // get the random weapon from list
		  replaceWeapon(TDoc, rWeap); // swap out placeholder with real weapon
		}
	}
});
