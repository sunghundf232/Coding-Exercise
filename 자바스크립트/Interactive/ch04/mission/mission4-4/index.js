const input = document.querySelector('#input');

function checker() {
  const words = document.querySelectorAll('.word');
  if (words.length === 0) {
    alert('Success!π');
    if(confirm('retry?')) {
      window.location.reload();
    }
  }
}

// μ¬κΈ°μ μ½λλ₯Ό μμ±νμΈμ
function removeWord() {
  const word = document.querySelector(`[data-word="${input.value}"]`);
  if(word){
    word.remove();
    checker();
  }
  input.value='';
}
input.addEventListener('change',removeWord);
/*
function removeWord(){
  if(!word){
    return
  }
  word.remove()
}
*/