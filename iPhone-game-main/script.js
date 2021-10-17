const imgs = document.getElementById("imgs")
const img = document.querySelectorAll("#imgs img")
let idx= 0;


const clicker = document.getElementById("click");
const scorebox = document.getElementById("scorebox")
const cps = document.getElementById("cps")
let cpsNumber = 1;
cps.innerText = cpsNumber;

const upgradeButton = document.getElementById("btn") 
let score = 10005500;
scorebox.innerText = score;

var iphones=["Iphone 1","Iphone 3g", "Iphone 4", "iphone 5", "iphone 6","iphone 7", "iphone 8", "iphone 10","iphone 11", "iphone 12",]
const iphoneVer = document.getElementById("iphoneVer")
let iphoneVersionNumber = 0
iphoneVer.innerText=iphones[iphoneVersionNumber];

const pointsForUpgradeBox = document.getElementById("pointsForUpgrade")
let pointsForUpgrade = 10;
pointsForUpgradeBox.innerText=pointsForUpgrade

setInterval(checkUpgrade, 100)
setInterval(automaticCounter, 1000)

/* UPGRADE 1*/

const upgrade1= document.getElementById("upgrade1");
const upgrade1req = document.getElementById("upgrade1req");
const upgrade1count = document.getElementById("upgrade1count");
let upgrade1reqNumber = 500; 
let upgrade1countNumber = 0;

upgrade1req.innerText= upgrade1reqNumber;
upgrade1count.innerText= upgrade1countNumber;

upgrade1.addEventListener("click", () =>{
    if (score >= upgrade1reqNumber){
        upgrade1countNumber++;
        score = score - upgrade1reqNumber;
        upgrade1reqNumber = upgrade1reqNumber * 2;

        upgrade1req.innerText= upgrade1reqNumber;
        upgrade1count.innerText= upgrade1countNumber;
        scorebox.innerText = score;
    }
})

/* UPGRADE 2*/

const upgrade2= document.getElementById("upgrade2");
const upgrade2req = document.getElementById("upgrade2req");
const upgrade2count = document.getElementById("upgrade2count");
let upgrade2reqNumber = 5500; 
let upgrade2countNumber = 0;

upgrade2req.innerText= upgrade2reqNumber;
upgrade2count.innerText= upgrade2countNumber;

upgrade2.addEventListener("click", () =>{
    if (score >= upgrade2reqNumber){
        upgrade2countNumber++;
        score = score - upgrade2reqNumber;
        upgrade2reqNumber = upgrade2reqNumber * 2;

        upgrade2req.innerText= upgrade2reqNumber;
        upgrade2count.innerText= upgrade2countNumber;
        scorebox.innerText = score;
    }
})

/* UPGRADE 3*/

const upgrade3= document.getElementById("upgrade3");
const upgrade3req = document.getElementById("upgrade3req");
const upgrade3count = document.getElementById("upgrade3count");
let upgrade3reqNumber = 25000; 
let upgrade3countNumber = 0;

upgrade3req.innerText= upgrade3reqNumber;
upgrade3count.innerText= upgrade3countNumber;

upgrade3.addEventListener("click", () =>{
    if (score >= upgrade3reqNumber){
        upgrade3countNumber++;
        score = score - upgrade3reqNumber;
        upgrade3reqNumber = upgrade3reqNumber * 2;

        upgrade3req.innerText= upgrade3reqNumber;
        upgrade3count.innerText= upgrade3countNumber;
        scorebox.innerText = score;
    }
})

/*UPGRADE 4*/

const upgrade4= document.getElementById("upgrade4");
const upgrade4req = document.getElementById("upgrade4req");
const upgrade4count = document.getElementById("upgrade4count");
let upgrade4reqNumber = 100000; 
let upgrade4countNumber = 0;

upgrade4req.innerText= upgrade4reqNumber;
upgrade4count.innerText= upgrade4countNumber;

upgrade4.addEventListener("click", () =>{
    if (score >= upgrade4reqNumber){
        upgrade4countNumber++;
        score = score - upgrade4reqNumber;
        upgrade4reqNumber = upgrade4reqNumber * 2;

        upgrade4req.innerText= upgrade4reqNumber;
        upgrade4count.innerText= upgrade4countNumber;
        scorebox.innerText = score;
    }
})

/*UPGRADE 5*/

const upgrade5= document.getElementById("upgrade5");
const upgrade5req = document.getElementById("upgrade5req");
const upgrade5count = document.getElementById("upgrade5count");
let upgrade5reqNumber = 250000; 
let upgrade5countNumber = 0;

upgrade5req.innerText= upgrade5reqNumber;
upgrade5count.innerText= upgrade5countNumber;

upgrade5.addEventListener("click", () =>{
    if (score >= upgrade5reqNumber){
        upgrade5countNumber++;
        score = score - upgrade5reqNumber;
        upgrade5reqNumber = upgrade5reqNumber * 2;

        upgrade5req.innerText= upgrade5reqNumber;
        upgrade5count.innerText= upgrade5countNumber;
        scorebox.innerText = score;
    }
})

/*UPGRADE 6*/

const upgrade6= document.getElementById("upgrade6");
const upgrade6req = document.getElementById("upgrade6req");
const upgrade6count = document.getElementById("upgrade6count");
let upgrade6reqNumber = 500000; 
let upgrade6countNumber = 0;

upgrade6req.innerText= upgrade6reqNumber;
upgrade6count.innerText= upgrade6countNumber;

upgrade6.addEventListener("click", () =>{
    if (score >= upgrade6reqNumber){
        upgrade6countNumber++;
        score = score - upgrade6reqNumber;
        upgrade6reqNumber = upgrade6reqNumber * 2;

        upgrade6req.innerText= upgrade6reqNumber;
        upgrade6count.innerText= upgrade6countNumber;
        scorebox.innerText = score;
    }
})

/* If click on iphone score goes up by 1*/

/* SCORE UPDATED HERE*/

clicker.addEventListener("click", () =>{
    /*SUPER IMPORTANT  SCORE IS HERE*/
    score = score + cpsNumber
    scorebox.innerText = score
})


 /* UPGRADING THE IPHONE */ 
upgradeButton.addEventListener("click",()=>{
    if (score> pointsForUpgrade){

        /* if you did all the upgrades, it disables the upgrade button*/
        
        if (iphoneVersionNumber > 8){
            upgradeButton.classList.remove("active");
            upgradeButton.classList.add("inactive"); /*if no more upgrades inactivate it*/
            pointsForUpgrade = "";
            pointsForUpgradeBox.innerText=pointsForUpgrade
        }
    
    /* else if you didnt do all the upgrades than its going to upgrade your iphone*/    
    else{
    
    iphoneUpgrader()
    
    iphoneVersionNumber++
    iphoneVer.innerText=iphones[iphoneVersionNumber];

    score= score - pointsForUpgrade;
    scorebox.innerText = score;
    upgradeButton.classList.remove("active");
    pointsForUpgrade = pointsForUpgrade * 2;
    pointsForUpgradeBox.innerText=pointsForUpgrade
    }}
})

/* AUTOMATIC COUNTER */
function automaticCounter(){
    if (iphoneVersionNumber > 0) /* if iphone was upgrade*/{
        score = score + iphoneVersionNumber;
        scorebox.innerText = score;
    }
}

/*checks if you can buy the upgrade*/
function checkUpgrade(){
    if (score > 10){
        upgradeButton.classList.add("active");
        cpsNumber = 1 + (upgrade1countNumber*1) + (upgrade2countNumber*3)+(upgrade3countNumber*6)+(upgrade4countNumber*12)+(upgrade5countNumber*20)+(upgrade6countNumber*40)
        cps.innerText = cpsNumber

    }
    /*running the upgrade blur*/
    upgradeBlur()
    
}

/* once you buy the upgrade it switches the iphone*/
function iphoneUpgrader(){
    idx++; 
    imgs.style.transform=`translateX(${idx*-337}px)`
}

/*TURN UPGRADES DARK IF CANT AFFORD*/

function upgradeBlur(){
    if (score < upgrade1reqNumber){
        upgrade1.classList.add("dark");
    }
    else{
        upgrade1.classList.remove("dark")
    }

    if (score < upgrade2reqNumber){
        upgrade2.classList.add("dark");
    }
    else{
        upgrade2.classList.remove("dark")
    }

    if (score < upgrade3reqNumber){
        upgrade3.classList.add("dark");
    }
    else{
        upgrade3.classList.remove("dark")
    }

    if (score < upgrade4reqNumber){
        upgrade4.classList.add("dark");
    }
    else{
        upgrade4.classList.remove("dark")
    }

    if (score < upgrade5reqNumber){
        upgrade5.classList.add("dark");
    }
    else{
        upgrade5.classList.remove("dark")
    }
    if (score < upgrade6reqNumber){
        upgrade6.classList.add("dark");
    }
    else{
        upgrade6.classList.remove("dark")
    }
}