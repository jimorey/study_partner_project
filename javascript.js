function liveTime() {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
}

function lastUpdated() {
  var x = document.lastModified;
  document.getElementById("last-updated").innerHTML = x;
}

function start() {
  liveTime();
  lastUpdated();
}

function validateSignUp() {
  var uname = document.forms["sign-up-form"]["uname"].value;
  if (!(/^(\d|\w)+$/.test(uname))) {
    alert("Username is invalid.");
    return false;
  }

  var fname = document.forms["sign-up-form"]["fname"].value;
  if (!(/^(\w)+$/.test(fname))) {
    alert("First Name is invalid.");
    return false;
  }

  var lname = document.forms["sign-up-form"]["lname"].value;
  if (!(/^(\w)+$/.test(lname))) {
    alert("Last Name is invalid.");
    return false;
  }

  var uni = document.forms["sign-up-form"]["uni"].value;
  if (!(/^(\w)+(\s\w+)*$/.test(uni))) {
    alert("Uni is invalid.");
    return false;
  }

  var email = document.forms["sign-up-form"]["email"].value;
  if (!(/^(\d|\w)+@\w*\.edu\.au$/.test(email))) {
    alert("Email is invalid.");
    return false;
  }
}
