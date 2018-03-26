$(document).ready(function(){
  $("form#toBuy").submit(function(event){
    event.preventDefault();

  var blanks = ["item1", "item2", "item3", "item4", "item5", "item6"];

    blanks.forEach(function(blank){
      var finalItems = $("input#" + blank).val();
      $("ul#output").append("<li>" + finalItems + "</li>");

      // $("#button").click(function(){
      // $(this).toggleClass("toBuyList");
      // });
    });
  });
});
