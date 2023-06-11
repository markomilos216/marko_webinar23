class Movie{
    constructor(nazovFilmu, rokVydania, herci){
       this.nazovFilmu = nazovFilmu;
       this.rokVydania = rokVydania;
       this.herci = herci;
    }

    printDetails(){
        console.log("Film: " + film1.nazovFilmu);
        console.log("Rok: " + film1.rokVydania);
        console.log("Herci: ");
        for(let herec of this.herci){
            console.log(herec);
        }
    }

    printLongestActor(){
        let arr = this.herci;
        let result = "";
       for(let i = 0; i < arr.length ; i++){
        let longetActor = arr[i];
        if(longetActor.length > result.length){
            result = arr[i];
        }
       }
       let actorLength = result.replaceAll(" " , "")
       console.log("Najdlhšie meno herca: " + result +  "("+ actorLength.length +")");
       console.log("");
    }
    
}

let film1 = new Movie("Forrest Gump" , 1994, ["Tom Hanks", "Robin Wrigan", "Gary Sinise"] );
let film2 = new Movie("Pelíšky", 1999, ["Miroslav Donutil", "Jaroslav Dušek", "Bolek Polívka"]);

film1.printDetails();
film1.printLongestActor();
film2.printDetails();
film2.printLongestActor();

