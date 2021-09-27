include "./utils.js";

Hook.on("createToken", (TDoc, spl) => {
  if (TDoc.actor.type === "NPC") {
    if (needsWeapon(TDoc)) {
      console.log("True");
      //let rWeap = randomWeapon();
      //replaceWeapon(TDoc.actor.items("as weapon"), rWeap);
    }
  }
}
      
