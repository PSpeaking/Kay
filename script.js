function checkVerbs() {
    var verb1 = document.getElementById('verb1').value.toLowerCase();
    // Add code to retrieve other input values
  
    if (verb1 === 'speaks' && verb2 === 'does not indicate' && verb3 === 'emphasized' && verb4 === 'was traveling' && verb5 === 'encourages') {
      document.getElementById('feedback2').innerHTML = 'Correct!';
    } else {
      document.getElementById('feedback2').innerHTML = 'Incorrect. Try again.';
    }
  }