window.onscroll = function() {myFunction()};

//screen location
function myFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        setWhite(true);
        sortHeader();
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            displayTop(true);
            moveHeader(this.oldScroll > this.scrollY);
        }else{
            displayTop(false);
        }
    }else{
        setWhite(false);
    }

    this.oldScroll = this.scrollY;
}

//Copyright year
function copyright(){
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("copyright").innerHTML = "Copyright&#169; " + n + " Chad Garratt. All Right Reserved.";
}
copyright();

//header
function setWhite(active){
    var header = document.getElementById("HomeHeader");
    var logo = document.getElementById("logo");
    var navLinks = document.querySelectorAll('nav a');
    var anchor = document.getElementsByTagName('a');
    var phoneNav = document.getElementById("myNav");
    var phoneT = document.getElementById("phoneT");

    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");
    var link4 = document.getElementById("link4");
    var link5 = document.getElementById("link5");
    var link6 = document.getElementById("link6");
    var link7 = document.getElementById("link7");

    if(active){
        phoneNav.style.backgroundColor = "rgba(255, 255, 255, 0.719)";
        phoneT.style.color = "black";
        header.style.backgroundColor = "rgba(255, 255, 255, 0.753)";
        logo.style.filter = "invert(100%)";
        link1.style.color = "black";
        link2.style.color = "black";
        link3.style.color = "black";
        link4.style.color = "black";
        link5.style.color = "black";
        link6.style.color = "black";
        link7.style.color = "black";

        for(var i = 0; i < anchor.length; ++i){
            if(anchor[i] == navLinks[i]){
                anchor[i].style.color = "black";
            }
        }
    }
    else{
        phoneNav.style.backgroundColor = "rgba(0, 0, 0, 0.719)";
        phoneT.style.color = "white";
        header.style.backgroundColor = "rgba(0, 0, 0, 0.424)";
        logo.style.filter = "invert(0%)";
        link1.style.color = "white";
        link2.style.color = "white";
        link3.style.color = "white";
        link4.style.color = "white";
        link5.style.color = "white";
        link6.style.color = "white";
        link7.style.color = "white";
        
        for(var x = 0; x < anchor.length; ++x){
            if(anchor[x] == navLinks[x]){
                anchor[x].style.color = "white";
            }
        }
    }
}

function moveHeader(active){
    var header = document.getElementById("HomeHeader");
    if(active){
        header.style.transform = "translateY(0)";
    }else{
        header.style.transform = "translateY(-100px)";
    }
}

function sortHeader(){
    var header = document.getElementById("HomeHeader");
    header.style.transform = "translateY(0)";
}

//header text animation
changeIMG(true);
function changeIMG(active){
    var img1 = document.getElementById("photo1");
    var img2 = document.getElementById("photo2");
    var img3 = document.getElementById("photo3");
    var img4 = document.getElementById("photo4");
    if(active){
        setTimeout(function() {
            img1.style.opacity = "1";
            popIn1(true);
            img2.style.opacity = "0";
            img3.style.opacity = "0";
            img4.style.opacity = "0";
            setTimeout(function() {  
                img1.style.opacity = "0";
                img2.style.opacity = "1";
                popIn1(false);
                popIn2(true);
                img3.style.opacity = "0";
                img4.style.opacity = "0";
                setTimeout(function() {  
                    img1.style.opacity = "0";
                    img2.style.opacity = "0";
                    img3.style.opacity = "1";
                    popIn2(false);
                    popIn3(true);
                    img4.style.opacity = "0";
                    setTimeout(function() {
                        img1.style.opacity = "0";
                        img2.style.opacity = "0";
                        img3.style.opacity = "0";
                        img4.style.opacity = "1";
                        popIn3(false); 
                        popIn1(true);
                        setTimeout(changeIMG(true), 0);
                    }, 4000);
                }, 4000);
            }, 4000);
        }, 4000);
    }
}

function popIn1(active){
    var d1 = document.getElementById("decor1");
    var d2 = document.getElementById("decor2");
    var t = document.getElementById("Optext");
    var st = document.getElementById("SOptext");
    if(active){
        setTimeout(function() {  
            d1.style.opacity = "1";
            d1.style.bottom = "45%";
            setTimeout(function() {  
                d2.style.opacity = "1";
                d2.style.bottom = "16%";
                setTimeout(function() { 
                    st.style.opacity = "1"; 
                    st.style.bottom = "35%";
                    setTimeout(function() {  
                        t.style.opacity = "1";
                        t.style.bottom = "16%";
                    }, 100);
                }, 200);
            }, 200);
        }, 200);
    }else{
        setTimeout(function() {  
            d1.style.opacity = "0";
            d1.style.bottom = "35%";
            setTimeout(function() {  
                d2.style.opacity = "0";
                d2.style.bottom = "26%";
                setTimeout(function() {  
                    st.style.opacity = "0";
                    st.style.bottom = "30%"; 
                    setTimeout(function() {  
                        t.style.opacity = "0";
                        t.style.bottom = "21%";
                    }, 50);
                }, 100);
            }, 100);
        }, 100);
    }
}

function popIn2(active){
    var d1 = document.getElementById("decor3");
    var d2 = document.getElementById("decor4");
    var t = document.getElementById("Optext2");
    var st = document.getElementById("SOptext2");
    if(active){
        setTimeout(function() {  
            d1.style.opacity = "1";
            d1.style.bottom = "48%";
            setTimeout(function() {  
                d2.style.opacity = "1";
                d2.style.bottom = "22%";
                setTimeout(function() { 
                    st.style.opacity = "1"; 
                    st.style.bottom = "40%";
                    setTimeout(function() {  
                        t.style.opacity = "1";
                        t.style.bottom = "22%";
                    }, 100);
                }, 200);
            }, 200);
        }, 200);
    }else{
        setTimeout(function() {  
            d1.style.opacity = "0";
            d1.style.bottom = "38%";
            setTimeout(function() {  
                d2.style.opacity = "0";
                d2.style.bottom = "32%";
                setTimeout(function() {  
                    st.style.opacity = "0";
                    st.style.bottom = "35%"; 
                    setTimeout(function() {  
                        t.style.opacity = "0";
                        t.style.bottom = "27%";
                    }, 50);
                }, 100);
            }, 100);
        }, 100);
    }
}

function popIn3(active){
    var t = document.getElementById("Optext3");
    var st = document.getElementById("SOptext3");

    if(active){
        setTimeout(function() {  
            t.style.opacity = "1";
            t.style.bottom = "60%";
            setTimeout(function() {  
                st.style.opacity = "1";
                setTimeout(function() {  
                    st.style.opacity = "0";
                }, 300);
            }, 1000);
        }, 200);
    }else{
        setTimeout(function() {  
            t.style.opacity = "0";
            t.style.bottom = "55%";
        }, 100);
    }
}

//Count down
var countDownDate = new Date("Jul 30, 2022 14:30:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
    }
}, 1000);

//Top function
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function displayTop(active){
    if(active){
        document.getElementById("top").style.opacity = "1";
        document.getElementById("top").style.bottom = "20px";
        document.getElementById("topSymbol").style.opacity = "1";
        document.getElementById("topSymbol").style.bottom = "18px";
    }else{
        document.getElementById("top").style.opacity = "0";
        document.getElementById("top").style.bottom = "0px";
        document.getElementById("topSymbol").style.opacity = "0";
        document.getElementById("topSymbol").style.bottom = "0px";
    }
}

//Show groomsmen or bridesmaids
ShowPartisipent(true);
function ShowPartisipent(active){
    var m = document.getElementsByClassName("m");
    var w = document.getElementsByClassName("w");
    var buttonG = document.getElementById("g");
    var buttonB = document.getElementById("b");
    if(active){
        buttonG.style.borderBottomColor = "#70a067";
        buttonB.style.borderBottomColor = "#f7f7f7";
        for(var i = 0; i < m.length; i++){
            m[i].style.transform = "translateY(0)";
        }
        for(var x = 0; x < w.length; x++){
            w[x].style.transform = "translateY(500px)";
        }
    }else{
        buttonG.style.borderBottomColor = "#f7f7f7";
        buttonB.style.borderBottomColor = "#70a067";
        for(var c = 0; c < m.length; c++){
            m[c].style.transform = "translateY(500px)";
        }
        for(var j = 0; j < w.length; j++){
            w[j].style.transform = "translateY(0)";
        }
    }
}

//Show travel
ShowTravel(true);
function ShowTravel(active){
    var h = document.getElementsByClassName("hotel");
    var t = document.getElementsByClassName("address");
    var buttonT = document.getElementById("t");
    var buttonH = document.getElementById("h");
    if(active){
        buttonT.style.borderBottomColor = "#70a067";
        buttonH.style.borderBottomColor = "#ffffff";
        for(var i = 0; i < h.length; i++){
            h[i].style.display = "none";
        }
        for(var x = 0; x < t.length; x++){
            t[x].style.display = "block";
        }
    }else{
        buttonT.style.borderBottomColor = "#ffffff";
        buttonH.style.borderBottomColor = "#70a067";
        for(var j = 0; j < h.length; j++){
            h[j].style.display = "block";
        }
        for(var c = 0; c < t.length; c++){
            t[c].style.display = "none";
        }
    }
}

//DisplayForm
function Invite(){
    var InviteCode = document.getElementById("code").value;
    var Val = document.getElementById("codeVal");
    var a = document.getElementById("all");
    var s = document.getElementById("some");
    var o = document.getElementById("one");
    var c1 = document.getElementById("content1");
    var c2 = document.getElementById("content2");
    var c3 = document.getElementById("content3");
    var cLetter = document.getElementById("codeLetter");
    if(InviteCode == ""){
        Val.innerHTML = "Please Enter Code On The Invitation";
    }else if(InviteCode == "inViTA"){
        a.style.height = "700px";
        a.style.margin = "100px auto 0 auto";
        a.style.opacity = "1";
        c1.style.display = "block";
        cLetter.style.display = "none";
    }else if(InviteCode == "NvTSm"){
        s.style.height = "600px";
        s.style.margin = "200px auto 0 auto";
        s.style.opacity = "1";
        c2.style.display = "block";
        cLetter.style.display = "none";
    }else if(InviteCode == "niTDoC"){
        o.style.height = "600px";
        o.style.margin = "200px auto 0 auto";
        o.style.opacity = "1";
        c3.style.display = "block";
        cLetter.style.display = "none";
    }else{
        Val.innerHTML = "Incorrect, Please Check Code On Invite";
    }
}

//Phone header
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("phoneNav").style.transform = "translateX(0px)";
    document.getElementById("HomePhone").style.opacity = "0%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("phoneNav").style.transform = "translateX(-500px)";
    document.getElementById("HomePhone").style.opacity = "100%";
}