
function ClickHandler(e) {
  var name = prompt ("Please enter your name");
  console.log (name)

  if (!name){
    alert ("Enter a valid name");
    return ClickHandler(e);
  } else {
    alert ("Thanks for Signing Up " + name);
  }
}

$(".btn-signup").on('click', ClickHandler)
