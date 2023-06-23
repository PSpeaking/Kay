function checkVerbs() {
  var verb1 = document.getElementById('verb1').value.toLowerCase();
  var verb2 = document.getElementById('verb2').value.toLowerCase();
  var verb3 = document.getElementById('verb3').value.toLowerCase();
  var verb4 = document.getElementById('verb4').value.toLowerCase();
  var verb5 = document.getElementById('verb5').value.toLowerCase();

  if (verb1 === 'speaks' && verb2 === 'does not indicate' && verb3 === 'emphasized' && verb4 === 'was traveling' && verb5 === 'encourages') {
    document.getElementById('feedback2').innerHTML = 'Correct!';
  } else {
    document.getElementById('feedback2').innerHTML = 'Incorrect. Try again.';
  }
}
