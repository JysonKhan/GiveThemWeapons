
function randomWeapon(){
  let WeapList = ["@Item[tj6TZ5aqxUgy6sjw]{Battleaxe}","@Item[aBKNBAhnwlRMWO3B]{Blackjack}","@Item[ftfcg8TU3FGpUnfo]{Blowgun}","@Item[oJSCvdpiqKPvwNxf]{Club}"];
  let NumWeap = "1d" + WeapList.size;
  let randWeap = new Roll(NumWeap,0,0);
  randWeap.evaluate();
  return WeapList(randWeap.total);
}

function needsWeapon(TDoc){
  let x = 0;
  while (TDoc.actor.data.items.size != x) {
    if (Tdoc.actor.data.items(x).value.data.name === "as weapon"){return true;}
    x = x + 1;
  }
  return false;
}
/*
function replaceWeapon(TDoc, weapon){
  let x = 0;
  for(TDoc.actor.items){
    if (Tdoc.actor.item(x).name === "as weapon"){
      deleteItem(Tdoc.actor.item(x));
      addItem(TDoc, weapon);
      return
    }
    x = x + 1;
  }
}
*/
