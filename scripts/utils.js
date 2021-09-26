/*
async randomWeapon(void){
  let WeapList = populatelist(void){return listofweaponsavailable;};
  let randWeap = new Roll(1d(sizeof(weaplist),,);
  randWeap.evaluate();
  return WeapList(randWeap.total);
}
*/
boolean async Function needsWeapon(TDoc){
  let x = 0;
  while (TDoc.actor.data.items.size != x) {
    if (Tdoc.actor.data.items(x).value.data.name === "as weapon"){return true;}
    x = x + 1;
  }
  return false;
}
/*
async replaceWeapon(TDoc, weapon){
  do until(sizeof(TDoc.actor.items) != x, x = 0, x++){
    if (Tdoc.actor.item(x).name === "as weapon"){
      deleteItem(Tdoc.actor.item(x));
      addItem(TDoc, weapon);
      return
    }
  }
}
*/
