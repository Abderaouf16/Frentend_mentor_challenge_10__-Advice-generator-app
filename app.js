const changeAdvice = document.getElementById("advice-generator");
const adviceNumber = document.getElementById("advice-num");
const AdviceText = document.getElementById("advice");

const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(url);
  const {
    slip: { id, advice },
  } = await res.json();
  adviceNumber.innerText = id;
  AdviceText.innerText = advice;
}
getAdvice();
changeAdvice.addEventListener("click", function () {
  getAdvice();
});
