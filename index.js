document.querySelector('button').addEventListener("click", Calculator)

function Calculator() {

  var x = document.querySelector('#num-one').value;
  var y = document.querySelector('#num-two').value;
  var z = document.querySelector('#result');

  if (document.querySelector('#add').checked) {

    z.value = parseInt(x) + parseInt(y);

  }
  if (document.querySelector('#subtract').checked) {

    z.value = parseInt(x) - parseInt(y);

  }
  if (document.querySelector('#multiply').checked) {

    z.value = parseInt(x) * parseInt(y);

  }
  if (document.querySelector('#divide').checked) {

    z.value = parseInt(x) / parseInt(y);

  }

}

document.querySelector('#Restart').addEventListener("click", function() {

  location.reload();
});
