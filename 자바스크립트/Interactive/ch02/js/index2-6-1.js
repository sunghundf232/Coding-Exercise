
const fields = document.querySelectorAll('[field]');
//console.log(fields)


const task = {
  title : '코드 에디터 개발',
  manager : 'CastleRing,Raccon Lee',
  status : ''
};


for(let tag of fields){
  const field = tag.getAttribute('field');
  tag.textContent = task[field];
}

const btns = document.querySelectorAll('.btn');
for (let btn of btns) {
  const status = btn.getAttribute('status');
  btn.onclick = function(){
    fields[2].textContent = status;
    fields[2].setAttribute('status',status);
  };
}