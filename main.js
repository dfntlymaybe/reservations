var reservations = {
  'bob': { claimed: false },
  'ted': { claimed: true }
}



var claimReservation = function () {
  var name = document.getElementById("name").value.toLowerCase();
  console.log(name);
  if (reservations[name] && reservations[name]["claimed"]){
    document.getElementById("respons").innerHTML = "This reservation has already been claimed";
    //alert("This reservation has already been claimed");
  }else if(reservations[name] && !reservations[name]["claimed"]){
    document.getElementById("respons").innerHTML = "Welcome Mr. " + name.toUpperCase();
    reservations[name] = {claimed: true};
      //alert("Welcome Mr. " + name);
  }else{
    //alert("Hey Mr " + name + ", there is no reservation under your name but its your lucky day we have a table for you");
    document.getElementById("respons").innerHTML = "Hey Mr " + name.toUpperCase() + ", there is no reservation under your name but its your lucky day we have a table for you";
    reservations[name] = {claimed: true};
    var node = document.createElement("LI");
    var textnode = document.createTextNode("New reservation for: " + name.toUpperCase() + " (" + Date() + ")");
    node.appendChild(textnode);
    document.getElementById("reservations-list").appendChild(node);
    //console.log(reservations);
  }
}

//claimReservation();