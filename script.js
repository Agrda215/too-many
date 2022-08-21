const btn = document.getElementById("check");
const word = document.getElementById("text-input");
const result = document.getElementById("result");

word.addEventListener("keyup", ()=>{
  console.log(result.value);
  result.innerHTML = word.value.length
})

getText("style.css")

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  result.innerText = y;
  word.value = y;
  document.title = y.length;
}
