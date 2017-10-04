const {Button, Button2, TextView, ui, ImageView} = require('tabris');

new ImageView({
  width: 600, height: 800, 
  layoutData: {width: 500,top: 50},
  image: {src: "https://img00.deviantart.net/ad1e/i/2011/329/5/8/clean_background_by_shvelo96-d4h96qt.jpg"}}).appendTo(ui.contentView);

var nimet = ["HauHau", "Musti", "Nakki", "Täplä", "Turri", "Leo", "Sulo", "Aatu", "Jojo", "Dio", "Gudo"];
var nimet2 = ["Pimu", "Floora", "Justiina", "Becky", "Bertta","Aino","Anna","Anne","Aura","Della", "Camilla"];

let button2 = new Button({
  centerX: 0, centerY: -100,
  text: 'Apua! Mikä tyttökoiralle nimeksi?'
}).appendTo(ui.contentView);

let button = new Button({
  centerX: 0, centerY: 0,
  text: 'Apua! Mikä poikakoiralle nimeksi?'
}).appendTo(ui.contentView);

let naytanimi = new TextView({
  centerX: 0, top: [button, 20],
  font: '24px'
}).appendTo(ui.contentView);

button2.on('select', arvoNimi2).appendTo(ui.contentView);

button.on('select', arvoNimi).appendTo(ui.contentView);

function arvoNimi2() {
  var arvottunumero2 = Math.floor((Math.random() * nimet2.length));
  naytanimi.text = 'Miten olisi ' + nimet2[arvottunumero2] + '?';
}

function arvoNimi() {
  var arvottunumero = Math.floor((Math.random() * nimet.length));
  naytanimi.text = 'Miten olisi ' + nimet[arvottunumero] + '?';
}
      
      