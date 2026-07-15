
// Index


function obey(){

window.alert("Always Obey");



}


function secrets(){
window.location.replace("cathail.html");






}









// Everything Lemons

function lemmenu(){

window.alert("HOW DARE YOU ORDER A LEMON, OFF WITH YOUR HEAD!");


} 





// Cat Hail

function hail(){

window.alert("ALL HAIL THE CAT")


}











// Lemon Clicker



var cost10 = 10
var cost100 = 100
var cost1k = 1000
var cost10k = 10000
var cost100k = 100000
var cost1m = 1000000
var cost10m = 10000000
var cost100m = 100000000
var cost1b = 1000000000
var cost10b = 10000000000
var cost100b = 100000000000
var cost1t = 1000000000000
var cost10t = 10000000000000
var cost100t = 100000000000000
var cost1q = 1000000000000000
var cost10q = 10000000000000000
var cost100q = 100000000000000000


var mult = 0

var upam = 0

var count = 0


function saveGame() {
    localStorage.setItem("count", count);
    localStorage.setItem("upam", upam);
    localStorage.setItem("mult", mult);

    localStorage.setItem("cost10", cost10);
    localStorage.setItem("cost100", cost100);
    localStorage.setItem("cost1k", cost1k);
    localStorage.setItem("cost10k", cost10k);
    localStorage.setItem("cost100k", cost100k);
    localStorage.setItem("cost1m", cost1m);
    localStorage.setItem("cost10m", cost10m);
    localStorage.setItem("cost100m", cost100m);
    localStorage.setItem("cost1b", cost1b);
    localStorage.setItem("cost10b", cost10b);
    localStorage.setItem("cost100b", cost100b);
    localStorage.setItem("cost1t", cost1t);
    localStorage.setItem("cost10t", cost10t);
    localStorage.setItem("cost100t", cost100t);
    localStorage.setItem("cost1q", cost1q);
    localStorage.setItem("cost10q", cost10q);
    localStorage.setItem("cost100q", cost100q);
}




function incount(){
    count = mult + count + 1;
    document.getElementById("count").innerText = count;

    document.getElementById("cost10").innerText = cost10;
    document.getElementById("cost100").innerText = cost100;
    document.getElementById("cost1k").innerText = cost1k;
    document.getElementById("cost10k").innerText = cost10k;
    document.getElementById("cost100k").innerText = cost100k;
    document.getElementById("cost1m").innerText = cost1m;
    document.getElementById("cost10m").innerText = cost10m;
    document.getElementById("cost100m").innerText = cost100m;
    document.getElementById("cost1b").innerText = cost1b;
    document.getElementById("cost10b").innerText = cost10b;
    document.getElementById("cost100b").innerText = cost100b;
    document.getElementById("cost1t").innerText = cost1t;
    document.getElementById("cost10t").innerText = cost10t;
    document.getElementById("cost100t").innerText = cost100t;
    document.getElementById("cost1q").innerText = cost1q;
    document.getElementById("cost10q").innerText = cost10q;
    document.getElementById("cost100q").innerText = cost100q;



    if (count >= 1000){

    const element = document.querySelector('.up10');
    element.classList.add('hid');


    }
    
    if (count >= 10000){

    const element = document.querySelector('.up100');
    element.classList.add('hid');


    }

    if (count >= 100000){

    const element = document.querySelector('.up1k');
    element.classList.add('hid');


    }

    if (count >= 1000000){

    const element = document.querySelector('.up10k');
    element.classList.add('hid');


    }

    if (count >= 10000000){

    const element = document.querySelector('.up100k');
    element.classList.add('hid');


    }

    if (count >= 100000000){

    const element = document.querySelector('.up1m');
    element.classList.add('hid');


    }

    if (count >= 1000000000){

    const element = document.querySelector('.up10m');
    element.classList.add('hid');


    }

    

    if (count >= 10000000000){

    const element = document.querySelector('.up100m');
    element.classList.add('hid');


    }

    if (count >= 100000000000){

    const element = document.querySelector('.up1b');
    element.classList.add('hid');


    }

    

    if (count >= 1000000000000){

    const element = document.querySelector('.up10b');
    element.classList.add('hid');


    }


    if (count >= 10000000000000){

    const element = document.querySelector('.up100b');
    element.classList.add('hid');


    }

    if (count >= 100000000000000){

    const element = document.querySelector('.up1t');
    element.classList.add('hid');


    }


    if (count >= 1000000000000000){

    const element = document.querySelector('.up10t');
    element.classList.add('hid');


    }

    if (count >= 10000000000000000){

    const element = document.querySelector('.up100t');
    element.classList.add('hid');


    }

    if (count >= 100000000000000000){

    const element = document.querySelector('.up1q');
    element.classList.add('hid');


    }

    if (count >= 1000000000000000000){

    const element = document.querySelector('.up10q');
    element.classList.add('hid');


    }









   var lemimg = document.getElementById("lemon_1");
    if (upam === 1){
        
        lemimg.src = "lemon_spin.gif";
        
    }
    if (upam >= 25){
        
        lemimg.src = "lemon_spin2.gif";
        
    }
    
    if (upam >= 50){

        lemimg.src = "lemon_spin3.gif";

    }

    if (upam >= 250){

        lemimg.src = "lemon_spin4.gif";

    }

    if (upam >= 500){

        lemimg.src = "lemon_spin5.gif";

    }

    if (upam >= 1000){

        lemimg.src = "lemon_spin6.gif";

    }

    if (upam >= 1500){

        lemimg.src = "lemon_spin7.gif";

    }

    if (upam >= 2000){

        lemimg.src = "lemon_spin8.gif";

    }

    if (upam >= 4000){

        lemimg.src = "lemon_spin9.gif";

    }

    if (upam >= 7500){

        lemimg.src = "lemon_spin10.gif";

    }



}




function upgrade(){
    if ('click', count >= cost10){
        upam = upam + 1;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost10;
        document.getElementById("count").innerText = count;
        
        mult = mult + 1;
        document.getElementById("mult").innerText = mult;
        
        cost10 = cost10 * 2;
        document.getElementById("cost10").innerText = cost10;
        
        saveGame();
    }

    
    



}


function upgrade100(){
    if ('click', count >= cost100){
        upam = upam + 2;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost100;
        document.getElementById("count").innerText = count;
        
        mult = mult + 10;
        document.getElementById("mult").innerText = mult;
        

        cost100 = cost100 * 2;
        document.getElementById("cost100").innerText = cost100;
        
        saveGame();
    }


}

function upgrade1000(){
    if ('click', count >= cost1k){
        upam = upam + 3;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost1k;
        document.getElementById("count").innerText = count;
        
        mult = mult + 100;
        document.getElementById("mult").innerText = mult;
       

        cost1k = cost1k * 2;
        document.getElementById("cost1k").innerText = cost1k;
        
        saveGame();
    }



}

function upgrade10k(){
    if ('click', count >= cost10k){
        upam = upam + 4;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost10k;
        document.getElementById("count").innerText = count;
        
        mult = mult + 1000;
        document.getElementById("mult").innerText = mult;
        
        cost10k = cost10k * 2;
        document.getElementById("cost10k").innerText = cost10k;
        
        saveGame();
    }


}

function upgrade100k(){
    if ('click', count >= cost100k){
        upam = upam + 5;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost100k;
        document.getElementById("count").innerText = count;
        
        mult = mult + 10000;
        document.getElementById("mult").innerText = mult;
        
        cost100k = cost100k * 2;
        document.getElementById("cost100k").innerText = cost100k;
        
        saveGame();
    }



}


function upgrade1m(){
    if ('click', count >= cost1m){
        upam = upam + 6;
        document.getElementById("upam").innerText = upam;
       
        count = count - cost1m;
        document.getElementById("count").innerText = count;
        
        mult = mult + 100000;
        document.getElementById("mult").innerText = mult;
        
        cost1m = cost1m * 2;
        document.getElementById("cost1m").innerText = cost1m;
        
        saveGame();
    }


}

function upgrade10m(){
    if ('click', count >= cost10m){
        upam = upam + 7;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost10m;
        document.getElementById("count").innerText = count;
        
        mult = mult + 1000000;
        document.getElementById("mult").innerText = mult;
        
        cost10m = cost10m * 2;
        document.getElementById("cost10m").innerText = cost10m;
        
        saveGame();
    }


}

function upgrade100m(){
    if ('click', count >= cost100m){
        upam = upam + 8;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost100m;
        document.getElementById("count").innerText = count;
        
        mult = mult + 10000000;
        document.getElementById("mult").innerText = mult;
        
        cost100m = cost100m * 2;
        document.getElementById("cost100m").innerText = cost100m;
        
        saveGame();
    }


}

function upgrade1B(){
    if ('click', count >= cost1b){
        upam = upam + 9;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost1b;
        document.getElementById("count").innerText = count;
        
        mult = mult + 100000000;
        document.getElementById("mult").innerText = mult;
        
        cost1b = cost1b * 2;
        document.getElementById("cost1b").innerText = cost1b;
        
        saveGame();
    }


}


function upgrade10B(){
    if ('click', count >= cost10b){
        upam = upam + 10;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost10b;
        document.getElementById("count").innerText = count;
        
        mult = mult + 1000000000;
        document.getElementById("mult").innerText = mult;
        
        cost10b = cost10b * 2;
        document.getElementById("cost10b").innerText = cost10b;
        
        saveGame();
    }


}


function upgrade100B(){
    if ('click', count >= cost100b){
        upam = upam + 11;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost100b;
        document.getElementById("count").innerText = count;
        
        mult = mult + 10000000000;
        document.getElementById("mult").innerText = mult;
        
        cost100b = cost100b * 2;
        document.getElementById("cost100b").innerText = cost100b;
        
        saveGame();
    }


}


function upgrade1T(){
    if ('click', count >= cost1t){
        upam = upam + 12;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost1t;
        document.getElementById("count").innerText = count;
        
        mult = mult + 100000000000;
        document.getElementById("mult").innerText = mult;
        

        cost1t = cost1t * 2;
        document.getElementById("cost1t").innerText = cost1t;
        
        saveGame();
    }


}


function upgrade10T(){
    if ('click', count >= cost10t){
        upam = upam + 13;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost10t;
        document.getElementById("count").innerText = count;
        
        mult = mult + 1000000000000;
        document.getElementById("mult").innerText = mult;
        
        cost10t = cost10t * 2;
        document.getElementById("cost10t").innerText = cost10t;
        
        saveGame();
    }


}

function upgrade100T(){
    if ('click', count >= cost100t){
        upam = upam + 14;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost100t;
        document.getElementById("count").innerText = count;
        
        mult = mult + 10000000000000;
        document.getElementById("mult").innerText = mult;
        
        cost100t = cost100t * 2;
        document.getElementById("cost100t").innerText = cost100t;
        
        saveGame();
    }


}

function upgrade1Q(){
    if ('click', count >= cost1q){
        upam = upam + 15;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost1q;
        document.getElementById("count").innerText = count;
        
        mult = mult + 100000000000000;
        document.getElementById("mult").innerText = mult;
        
        cost1q = cost1q * 2;
        document.getElementById("cost1q").innerText = cost1q;
        
        saveGame();
    }


}


function upgrade10Q(){
    if ('click', count >= cost10q){
        upam = upam + 16;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost10q;
        document.getElementById("count").innerText = count;
        
        mult = mult + 1000000000000000;
        document.getElementById("mult").innerText = mult;
        
        cost10q = cost10q * 2;
        document.getElementById("cost10q").innerText = cost10q;
        
        saveGame();
    }


}

function upgrade100Q(){
    if ('click', count >= cost100q){
        upam = upam + 17;
        document.getElementById("upam").innerText = upam;
        
        count = count - cost100q;
        document.getElementById("count").innerText = count;
        
        mult = mult + 10000000000000000;
        document.getElementById("mult").innerText = mult;
        
        cost100q = cost100q * 2;
        document.getElementById("cost100q").innerText = cost100q;
        
        saveGame();
    }


}




function upmult30(){

count = count * 2;
document.getElementById("count").innerText = count;





}







var upmultxTC = 0

function multxT(){
    if ('click', count >= 1000000){
    document.getElementById("upmultxTV").innerText = upmultxTC;
    upmultxTC = upmultxTC + 10;
    
    document.getElementById("count").innerText = count;
    count = count - 1000000;

    setInterval(upmult30, 30000);
}

if (upmultxTC >= 1){

    const element = document.querySelector('.hidden2');
    element.classList.add('hid');

}




}

function upmultadd(){

document.getElementById("upam").innerText = upam;
upam = upam + 1;

}



var autoam = 0

function auto(){
    if ('click', count >= 100000){
        document.getElementById("autoam").innerText = autoam;
        autoam = autoam + 1;

        document.getElementById("count").innerText = count;
        count = count - 100000;

        

        setInterval(incount, 5000);
        
        setInterval(upmultadd, 5000);
        

        
    }

    if (autoam >= 1){

        const element = document.querySelector('.hidden');
        element.classList.add('hid');

        

    }

    


}





window.onload = function () {

    if (localStorage.getItem("count") !== null) {

        count = Number(localStorage.getItem("count"));
        upam = Number(localStorage.getItem("upam"));
        mult = Number(localStorage.getItem("mult"));

        cost10 = Number(localStorage.getItem("cost10"));
        cost100 = Number(localStorage.getItem("cost100"));
        cost1k = Number(localStorage.getItem("cost1k"));
        cost10k = Number(localStorage.getItem("cost10k"));
        cost100k = Number(localStorage.getItem("cost100k"));
        cost1m = Number(localStorage.getItem("cost1m"));
        cost10m = Number(localStorage.getItem("cost10m"));
        cost100m = Number(localStorage.getItem("cost100m"));
        cost1b = Number(localStorage.getItem("cost1b"));
        cost10b = Number(localStorage.getItem("cost10b"));
        cost100b = Number(localStorage.getItem("cost100b"));
        cost1t = Number(localStorage.getItem("cost1t"));
        cost10t = Number(localStorage.getItem("cost10t"));
        cost100t = Number(localStorage.getItem("cost100t"));
        cost1q = Number(localStorage.getItem("cost1q"));
        cost10q = Number(localStorage.getItem("cost10q"));
        cost100q = Number(localStorage.getItem("cost100q"));

        document.getElementById("count").innerText = count;
        document.getElementById("upam").innerText = upam;
        document.getElementById("mult").innerText = mult;
        document.getElementById("cost10").innerText = cost10;
        document.getElementById("cost100").innerText = cost100;
        document.getElementById("cost1k").innerText = cost1k;
        document.getElementById("cost10k").innerText = cost10k;
        document.getElementById("cost100k").innerText = cost100k;
        document.getElementById("cost1m").innerText = cost1m;
        document.getElementById("cost10m").innerText = cost10m;
        document.getElementById("cost100m").innerText = cost100m;
        document.getElementById("cost1b").innerText = cost1b;
        document.getElementById("cost10b").innerText = cost10b;
        document.getElementById("cost100b").innerText = cost100b;
        document.getElementById("cost1t").innerText = cost1t;
        document.getElementById("cost10t").innerText = cost10t;
        document.getElementById("cost100t").innerText = cost100t;
        document.getElementById("cost1q").innerText = cost1q;
        document.getElementById("cost10q").innerText = cost10q;
        document.getElementById("cost100q").innerText = cost100q;
    }
};


















// Join The Cult




var cdsoldam = 4356202493
var canum = 782005
var wcnum = 3408
var nlnum = 54
var rcnum = 2094
var conum = 14
var ldnum = 60965321
var lsnum = 359043
var lkianum = 32748812089
var tlpnum = 387248920039240
var msnum = 736293402394.09
var ccnum = 1000
var pcnum = 1
var iscnum = 0
var ppdnum = 3091832
var rpenum = 781
var vrnum = 12
var Mbnum = 0

 










function loaded(){

setInterval(cdsold, 1);
setInterval(ca, 1000);
setInterval(wc, 10000);
setInterval(nl, 600000);
setInterval(rc, 60000);
setInterval(co, 6000000);
setInterval(ld, 100);
setInterval(ls, 80);
setInterval(lkia, 730983);
setInterval(tlp, 842);
setInterval(ms, 40);
setInterval(cc, 500);
setInterval(pc, 86400000);
setInterval(isc, 72000000);
setInterval(ppd, 6000);
setInterval(rpe, 26000);
setInterval(vr, 15000);
setInterval(Mb, 33000);




}






function cdsold(){
document.getElementById("cdsold").innerText = cdsoldam;
cdsoldam = cdsoldam + 1;


}


function ca(){
document.getElementById("ca").innerText = canum;
canum = canum + 1;


}


function wc(){
document.getElementById("wc").innerText = wcnum;
wcnum = wcnum + 1;


}


function nl(){
document.getElementById("nl").innerText = nlnum;
nlnum = nlnum + 1;


}


function rc(){
document.getElementById("rc").innerText = rcnum;
rcnum = rcnum + 1;


}


function co(){
document.getElementById("co").innerText = conum;
conum = conum + 1;


}


function ld(){
document.getElementById("ld").innerText = ldnum;
ldnum = ldnum + 1;



}


function ls(){
document.getElementById("ls").innerText = lsnum;
lsnum = lsnum + 1;


}


function lkia(){
document.getElementById("lkia").innerText = lkianum;
lkianum = lkianum + 1;


}



function tlp(){
document.getElementById("tlp").innerText = tlpnum;
tlpnum = tlpnum + 1;


}


function ms(){
document.getElementById("ms").innerText = msnum;
msnum = msnum + 16.72;


}


function cc(){
document.getElementById("cc").innerText = ccnum;
ccnum = ccnum + 1;

}


function pc(){
document.getElementById("pc").innerText = pcnum;
pcnum = pcnum + 1;


}



function isc(){
document.getElementById("isc").innerText = iscnum;
iscnum = iscnum + 1;



if (iscnum === 7){

setInterval(isc, 72000000000000);

}

}


function ppd(){
document.getElementById("ppd").innerText = ppdnum;
ppdnum = ppdnum + 1;



}


function rpe(){
document.getElementById("rpe").innerText = rpenum;
rpenum = rpenum + 1;




}



function vr(){
document.getElementById("vr").innerText = vrnum;
vrnum = vrnum + 1;


}



function Mb(){
document.getElementById("Mb").innerText = Mbnum;
Mbnum = Mbnum + 1;

}








function dono(){

window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");


}



function kencop(){

window.location.replace("https://www.google.com/search?q=kenecot+copper+mine&sca_esv=0cc88c52acce4ba2&rlz=1C1CHBF_enUS1186US1186&udm=2&biw=1103&bih=910&ei=1A4Garj9IJyrur8P1pSF6Q4&ved=0ahUKEwi4t6r-rrmUAxWcle4BHVZKIe0Q4dUDCBM&uact=5&oq=kenecot+copper+mine&gs_lp=Egtnd3Mtd2l6LWltZyITa2VuZWNvdCBjb3BwZXIgbWluZTIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYCzIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYCzIJEAAYgAQYChgLMgkQABiABBgKGAsyCRAAGIAEGAoYCzIJEAAYgAQYChgLSLkjUABY7yFwAHgAkAEAmAG3AaAB3hKqAQQzLjE2uAEDyAEA-AEBmAIToAKsE8ICChAAGIAEGIoFGEPCAg4QABiABBiKBRixAxiDAcICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAgUQABiABMICDRAAGIAEGLEDGIMBGArCAgcQABiABBgKmAMAkgcEMi4xN6AHoYwBsgcEMi4xN7gHrBPCBwYwLjcuMTLIBzWACAE&sclient=gws-wiz-img&safe=active&ssui=on");

}



function corndogweb(){

window.location.replace("https://www.youtube.com/watch?v=yAq4RHWPbV8");




}



function emuwar(){

window.location.replace("https://www.youtube.com/watch?v=BXpu6tbFCsI&list=PLQw_XrMliWVYSc66IpEnrr1MxCxy0H1SH&index=12");



}



function toaster(){

window.alert("You've been toastered");
window.location.replace("https://www.google.com/search?sca_esv=0cc88c52acce4ba2&rlz=1C1CHBF_enUS1186US1186&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKp9lEhFAN_4ain3HSNQWw-mMGVXS0bCMe2eDZOQ2MOTwmdSduEdP1lcK-3UDyorIbYrYypmw2ykxY_-AvoMYwpWYTdBoJYNvh3Rek9KUXPpGXWYj4G-DMlHOjO36AIfrQ98ozzpfsCu-FoR8I1HCoBssEInLFM_L3DDltHMcj7J-fBvXblxWmSHFOkIBZq2cCM2MVbDA&q=toaster&sa=X&ved=2ahUKEwjsva39rrmUAxX5H0QIHf0uKeoQtKgLegQIFhAB&biw=1103&bih=910&dpr=1&safe=active&ssui=on");


}


function lemonkill(){

window.alert("Half of these lemons are here from the finnish-korean hyperwar, may we have a moment of silence");
window.location.replace("https://www.youtube.com/watch?v=rAlTOfl9F2w&t=3s");

}


function joinus(){

window.alert("Join Us In Our Eternal Suffering");


}


function wideput(){

window.location.replace("https://www.youtube.com/shorts/ChI5ufVzXBw");


}




function IamIn(){


window.location.replace("https://www.youtube.com/watch?v=hWZNJaNVNs4");


}



