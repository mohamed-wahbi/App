class Play  {
    constructor(){
var toul = document.getElementById("player");
toul.style.height=screen.height + "px";
if(screen.width<650){
    toul.style.width=screen.width+"px";
}
var mohtawa=document.getElementById("mohtawa");
mohtawa.style.height=screen.height-205+"px";



    }
}
onload=new Play();
class Mouchaghel {
    constructor(){
        this.ghoneya = document.getElementById("ghoneya");
        this.nas = document.getElementById("nas");
        this.control_button = document.getElementById("btn_player");
        this.image=document.getElementById("image");
        this.isPlayed;
        this.control_button.addEventListener("click",()=>{
this.pp();
        })
        this.radioun =[]
        this.radioun[0]="RADIOUN1 Zitouna Fm"
        this.radioun[1]="RADIOUN2 Mozaik Fm"
        this.radioun[2]="RADIOUN3 oxigen Fm"
        this.tsawer=[]
        this.tsawer[0]="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiK5_kJNwbxr2HMFA6ywoathiUF7jW7cbbqwmiunfyyNE949kHeC9pET5GSe4XK49RcrgLwIb3ASiThMCipaYT4F38uasGKbXbeiTHiYh-dtatllC96TgjRFtEzfOXg6s5wYU5fCcn0DtOylHR68SwusfdkGIikY-C3pQwMyN_HcwY9Ral7lbTlzqLDQ/s320/Z.jpg"
        this.tsawer[1]="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCgm8E8BBEVqTA9S4kdHsKDadwwE80j5dMNeEckqoSsHJiaZrtKhito2dseTcXMhalmtsQKaTXI_ULgaLocK9m0PkIYU1Lf4m4o1CxrvQJX4pAXK0DEfO83nszhB-woypB-hSEoyrKFOCi5WxzulkQwy58tupbdqotYpKqCj1XlgUFktG0L2J149O36Q/w131-h131/M.png"
        this.tsawer[2]="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYvQ0nuAa1xiWv5dEt77XyNWnFWGzQOp9RAWgf7MVqz5FPt3wUkdtHsfmtdlfrewcnboYe9-tf1R7dKZ4FHiXOg7Cl_DBgO-y9p41g8dHGWSDW0J3p6c39ks4vCTe6_nRKBOla3SJw4aebcluwmxxmgFhHabYtKuaQr2-bgl_BwUWmb6ghnqhLj6Kmgw/s320/O.png"
        this.ghneyet=[]
        this.ghneyet[0]="https://zitounafm.toutech.net/zitounalive"
        this.ghneyet[1]="https://radio.mosaiquefm.net/mosalive"
        this.ghneyet[2]="https://radiooxygenefm.ice.infomaniak.ch/radiooxygenefm-64.mp3"
        this.nidham=0;
        this.thdid();
        document.getElementById("btna").addEventListener("click",()=>{
            if(this.nidham<this.ghneyet.length-1){
                ++this.nidham;this.isPlayed=false;
            }
           this.thdid()
            
        })
        document.getElementById("btn").addEventListener("click",()=>{
            if(this.nidham>0){
                --this.nidham;this.isPlayed=false;
            }
            this.thdid();
        })
    };
    thdid(){ 
        this.ghoneya.src =this.ghneyet[this.nidham];
        this.nas.innerHTML=this.radioun[this.nidham];
        this.image.src=this.tsawer[this.nidham];
        this.pp();
    }

    
    
    pp(){
        if(this.isPlayed==false){
            this.control_button.src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEiJtMBcwJtyTzfG1kOUWI4z6cyAR1BWNPW4QrzmJXgv_5pu5IDnygPWf9DRbRWQECctmHKwG2ndWn0YyKC2Kd08yIYX2X-K9w8ddUMR1l6xJlCtzkeUr24znL7cZaNTwrxjGzjQeNC3YoE5CBaNUSPlgfO5IFw5_vdGmqPPNBSU55XeI9GD-4_fXadA/s320/EE.jpg";
            this.ghoneya.play();
            this.isPlayed=true;
        }
        else{
            this.control_button.src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvmlRiTuf8N7SX4r7zXOdaYxxhrUFTMcaRdbjfuBE2w_-bDVL5_2SPrTVUDFJW9emWkqmBsrfb4u-xhsVkWJAplr8vDrTkExBXyYzuYQHTi0yM8aHvElWYkP7NqsMFnyTv4HziZ60z6dISTEDAYttPesFCEoP2N0ojH8gYU5-GcafFhSiO2pLT8vrhJw/s320/DD.png";
            this.ghoneya.pause();
            this.isPlayed=false;
        }

    }
}
onload = new Mouchaghel();