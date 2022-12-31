const members = document.getElementsByClassName('member');

for (let i = 1; i < members.length; i++) {
  if (i % 2 == 0) {
    console.log(members[i]);
  }
}

console.log(document.querySelectorAll('.language')[0]);
console.log(document.querySelectorAll('#javascript'));
console.log(document.querySelector('#list li'));
console.log(document.querySelector('.language'));