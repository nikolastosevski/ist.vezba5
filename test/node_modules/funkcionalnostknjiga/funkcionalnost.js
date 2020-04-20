const lista = require("listaknjiga/");


exports.sveKnjige = () => { 
  console.log("---------- SVE KNJIGE -----------");
  return lista.Lista.forEach(x => console.log(`ID: ${x.id}  NASLOV: ${x.naslov}  AUTOR: ${x.autor}`))
};


exports.addKnjiga = (idKnjige, naslovKnjige, autorKnjige) => { 
  let obj = {id:idKnjige, naslov:naslovKnjige, autor:autorKnjige};
  if(idKnjige != undefined && naslovKnjige != undefined && autorKnjige != undefined)
  {
     console.log("Uspesno ste uneli knjigu!");
     lista.Lista.push(obj);
     return obj;
  } 
  else
  {
     return console.log("Neispravan unos parametara.");
  }
  
};


exports.getKnjiga = (idKnjige) => {
var obj = undefined;
for (let x in lista.Lista) {
    if(lista.Lista[x].id === idKnjige) {
      obj = lista.Lista[x];
    }
  }
  return obj;
}

exports.postaviAutora = (naslovKnjige, autorKnjige) => {
for (let x in lista.Lista) {
    if(lista.Lista[x].naslov.toLowerCase().localeCompare(naslovKnjige.toLowerCase()) === 0) {
      lista.Lista[x].autor = autorKnjige;
    }
  }
  return console.log("DONE!");
}


exports.deleteKnjiga = (idKnjige) => {
var index = -1;
for (let x in lista.Lista) {
    if(lista.Lista[x].id === idKnjige) {
      index = x;
    }
  }
  console.log("Removing: " + lista.Lista[index].id + " | " + lista.Lista[index].naslov + " | " + lista.Lista[index].autor)
  lista.Lista.splice(index,1);
  return console.log("DONE!");
}

exports.getKnjigaByAuthor = (autorKnjige) => {
  console.log("---------- KNJIGE ZADATOG AUTORA ----------");
  for (let x in lista.Lista) {
    if(lista.Lista[x].autor.toLowerCase().localeCompare(autorKnjige.toLowerCase()) === 0) {
      console.log(lista.Lista[x])
    }
  }
  return console.log("DONE!");
}










