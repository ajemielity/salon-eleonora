let runForm = () => {
  let name = document.getElementById('name').value,
    email = document.getElementById('email').value,
    phonenumber = document.getElementById('phonenumber').value,
    message = document.getElementById('message').value,
    dataForMessage = 'name=' + name + '&email=' + email + '&message=' + message;
  /*
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "sendEmail.php", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
      value: dataForMessage
    }));
  */

  let xhr = new XMLHttpRequest()

  xhr.open('POST', 'sendEmail.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {
    if (xhr.status === 200 && xhr.responseText !== newName) {
      alert('Something went wrong.  Name is now ' + xhr.responseText);
    } else if (xhr.status !== 200) {
      alert('Request failed.  Returned status of ' + xhr.status);
    }
  };
  xhr.send(encodeURI(dataForMessage));


}