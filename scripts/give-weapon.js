import {needsWeapon} from "./utils.js";
import {randomWeapon} from "./utils.js";

Hook.on("createToken", (TDoc, spl) => {
  if (TDoc.actor.type === "NPC") {
    if (needsWeapon(TDoc)) {
      console.log("True");
      let rWeap = randomWeapon();
      console.log (rWeap);
      //replaceWeapon(TDoc.actor.items("as weapon"), rWeap);
    }
  }
}
      
