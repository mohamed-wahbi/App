class Volumee {
    constructor(){
        
        this.ghoneya=document.getElementById("ghoneya");
        this.ghoneya.volume=50/100;

        this.glis =document.getElementById("glis");
        this.glis.addEventListener("change",()=>{
            this.ghoneya.volume=this.glis.value/100;
        });

    }
}
onload=new Volumee();
