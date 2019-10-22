firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     
      var user = firebase.auth().currentUser;
  
      if(user != null){
          window.location.assign("index.html");
  
      }
  
    } else {
      // No user is signed in.
  
      //document.getElementById("user_div").style.display = "none";
      //document.getElementById("loginModal").style.display = "block";
  
    }
  });