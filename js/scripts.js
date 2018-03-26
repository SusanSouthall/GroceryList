$(document).ready(function(){
  $("form#toBuy").submit(function(event){
    event.preventDefault();

  var blanks = ["item1", "item2", "item3", "item4", "item5", "item6"];


    blanks.forEach(function(blank){
      var finalItems = $("input#" + blank).val();
      $("ul#output").append("<li>" + finalItems + "</li>");
    });
    // $("form#toBuy").reset();
    var lastItem = $("input#addItem").val();
    // alert(lastItem);


    // blanks.push(lastItem);
    // $("ul#output").append("<li>" + lastItem + "</li>");
    $("ul#output").append("<li>" + lastItem + "</li>")
      //  finalItems.push(lastItem);
      // $("ul#output").push("<li>" + lastItem + "</li>");
      // $(".addList").append(lastItem);
      debugger;
      // for(let i =0; i < blanks.length; i++){
      //   $("ul#output").append("<li>" + blanks[i] + "</li>");
      // }

  });
});
