var arr =['1', '2', '3', '4', 'five'];
var input;
while (input != 'stop') {
    input = prompt('Input your information:').toLowerCase();
    if (input != '' && input != 'stop') {
      arr[arr.length] = input;
    }
}
alert('Your array is: ' + arr + '.');
