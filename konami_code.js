const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init(e) {
  const key = parseInt(e.detail || e.which || e.detail);

  if (key === code[index]){
    index++
  }

  if (index === code.length){
    alert('Cheat Unlocked!');
  } else {
    index = 0;
  }
}
