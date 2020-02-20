class afdeling{
    constructor(){
        this.afdeling = [];
        this.revisorer = [];
    }

    addAfdeling(afdeling){
        this.afdeling.push(afdeling);
    }

    getAfdeling(){
        return this.afdeling;
    }

    addRevisorer(revisor){
        this.revisorer.push(revisor);
    }

    getRevisorer(){
        return this.revisorer;
    }

    //Den skal hente info fra revisor.js
    getInfo(){
        var text = "";
        text =this.afdeling + "<br>";
        for(i = 0 i<this.revisorer.length; i++) {
            text += this.revisorer[i].getInfo() +"<br>";
        }
        return text;
    }
}