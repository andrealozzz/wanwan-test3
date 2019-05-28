$(document).ready(function () {



    /////animacion logo index

    var logoAnimado = new TimelineMax({
        repeat: 0
    });

    var highfiveAnimado = new TimelineMax({
        repeat: 0
    });

    var logo = $(".logo");
    var wan = $('.wan');
    var an = $('.an');
    var orejas = $('.orejas');
    var ojos = $('.ojos');
    var boca = $('.boca');

    var homeH1 = $('#home-h1');
    var homeP = $('#home-p');
    var homeBtn = $('#home-btn');
    var homeSmallP = $('#home-small-p')

    var highfive = $('#highfive');
    var humanhand = $('#highfive-human');
    var cathand = $('#highfive-cat');
    var flash = $('#flash');

    logoAnimado
        .set(logo, {opacity:1,y: "+=200", scale:'1.5'})

        .set([humanhand, cathand, flash], {opacity:0})

        .set([homeH1, homeP, homeBtn, homeSmallP], {opacity:0})

        .fromTo(boca,0.5,{opacity:0,rotation:0 },{opacity:1,rotation:0})

        .fromTo(orejas,0.5,{opacity:0, transformOrigin: "50% 50%",y: "+=100"},{opacity:1, y:0, ease: Expo.easeOut})

        .fromTo(ojos,2,{opacity:0, transformOrigin: "50% 50%",y: "+=100"},{opacity:1, y:0, ease: Expo.easeOut},"-=2")

        .fromTo(wan,1,{opacity:0, x:'+=100'},{opacity:1, x:0})

        .fromTo(an,1,{opacity:0, x:'-=100'},{opacity:1, x:0},"-=1")

        .fromTo(boca,0.5,{rotation:40, transformOrigin: "50% 0%"},{rotation: 0, repeat:0, ease: Elastic.easeOut.config(1.75, 0.3) })

        .to('.guino1', 0.1,{morphSVG: '.guino2', repeat:1, yoyo:true},"-=0.5")

        .to(logo,0.5, {y: "-=200",scale:'1',ease:Expo.easeOut})

        .fromTo([homeH1, homeP],1, {opacity:0,y: "+=100"},{opacity:1,y: "-=100",ease:Expo.easeOut})

        .fromTo([homeBtn, homeSmallP],1, {opacity:0,y: "+=100"},{opacity:1,y: "-=100",ease:Expo.easeOut},"-=0.5")

        .to([humanhand, cathand], 0.3 , {opacity:1,},"-=0.5")

        .fromTo(humanhand, 0.3, {transformOrigin: "50% 100%", rotation:40}, {rotation:0, ease: Back.easeOut.config(1.7)},"-=0.5")
        
        .fromTo(cathand, 0.3, {transformOrigin: "50% 100%", rotation:-40}, {rotation:0, ease: Back.easeOut.config(1.7)},"-=0.5")

        .fromTo(flash, 0.5,{transformOrigin: "50% 50%", opacity:0, scale:0},{opacity:1, scale:1, ease: Elastic.easeOut.config(1, 0.3)},"-=0.3")

   
   



    
}); /// fin document ready


