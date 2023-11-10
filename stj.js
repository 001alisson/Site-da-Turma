alu1();

function mudc(){
    var pa = "Cadastro realizado com sucesso!";
    document.getElementById("palavra").innerHTML = pa;
};

function alu1(){
    document.getElementById("ft").src="Alu1.jpg";
    var n = "Douglas";
    document.getElementById("nm").innerHTML = n;

    setTimeout("alu2()", 2000);
};
function alu2(){
    document.getElementById("ft").src="Alu2.jpg";
    var n = "Pedro Lucas";
    document.getElementById("nm").innerHTML = n;

    setTimeout("alu3()", 2000);
};
function alu3(){
    document.getElementById("ft").src="Alu3.jpg";
    var n = "Levi";
    document.getElementById("nm").innerHTML = n;
    
    setTimeout("alu1()", 2000);
};

var botaon = document.getElementById("bt1");

botaon.onclick = function animar(){
    const pfr = document.querySelector(".caixa");
    pfr.style.animation = "";
    setTimeout(() => pfr.style.animation = " apab 2s",5)
};
var botaon = document.getElementById("bt2");

botaon.onclick = function animar(){
    const pfr = document.querySelector(".principal");
    pfr.style.animation = "";
    setTimeout(() => pfr.style.animation = " apab 2s",5)
};
var botaon = document.getElementById("bt3");

botaon.onclick = function animar(){
    const pfr = document.querySelector(".foto");
    pfr.style.animation = "";
    setTimeout(() => pfr.style.animation = " fot 2s",5)
};

function eu(){
    alert("Eu que fiz 😀👍");
};