$("#change").click(function() {
  $("#change").html("Sim");
  $("#move").show();
});

$("#move").hover(function() {
  change();
});

function change() {
  var l = Math.floor(Math.random()*500)+1;
  var o = Math.floor(Math.random()*100)-3;
  var v = Math.floor(Math.random()*200)+1;
  $("#move").css({right: l+'px',left: o+'px',bottom: v+'px'});
}