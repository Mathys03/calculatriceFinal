const header = document.getElementById("p1")
const ecran = document.getElementById("p2")
let final = 0
class BaseCalculator{
    constructor(){
        this.chaine = null;
        this.lastChaine = null;
        this.timeTakenMsStart=null;
        this.timeTakenMsEnd=null;
    }
    ajout(elem){
        if(this.chaine==null||this.chaine[0]==undefined) this.timeTakenMsStart=Date.now();
        if(elem == '=')this.printToScreen()
        else if(elem == 'C')this.backtrack()
        else this.addToChaine(elem)      
    }
    printToScreen(){
        this.timeTakenMsEnd=Date.now();
        if(this.timeTakenMsEnd!=this.timeTakenMsStart){
            console.log(this.timeTakenMsEnd-this.timeTakenMsStart)
            console.log(this.timeTakenMsStart)
            ///manip vers serveur
            let url = 'http://localhost:3000'
            let dataraw = {"calcul": this.chaine,"timeTakenMs":this.timeTakenMsEnd-this.timeTakenMsStart};
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", url, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            var tpmp = xhttp.send(JSON.stringify(dataraw));
            ///
            ecran.innerHTML=eval(this.chaine)
            header.innerHTML += this.chaine + " = " + eval(this.chaine) +"<br>"
            this.lastChaine = this.chaine
            this.chaine = null
        }
    }
    addToChaine(elem){
        if(elem == '×')elem='*'
        if(this.chaine != null) this.chaine+= elem.toString()
        else this.chaine=elem.toString()
        ecran.innerHTML = this.chaine
    }
    backtrack(){
        if(this.chaine==null || this.chaine[0]==undefined)this.chaine=this.lastChaine
        else this.chaine = (this.chaine).slice(0,-1)
        ecran.innerHTML = this.chaine

    }
}
let calcul = new BaseCalculator();
