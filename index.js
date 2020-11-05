const heyLogo =
  "https://production.haystack-assets.com/assets/avatars/defaults/hey-84b6169bf4060a76a94a072fe96b5fef7970b02d19507e2ab3952c042c21b154.svg";

const linksList = [
  "esam18ahmed@gmail.com",
  "github/EsamAhmed77",
  "IG/esam_roshdi",
  "FB.com/EsaamJr/",
  "in/esam-ahmed",
  "Wuzzuf.net/me/Esam-Ahmed",
  "01096132729",
];

const baseScaleChange = 0.033333333;
const baseTranslateChange = 0.7;

document.addEventListener("DOMContentLoaded", () => {
  const stack = document.querySelector("#stack");
  for (let i = 0; i < linksList.length; i++) {
    let div = document.createElement("div");
    div.classList.add("single-block");
    div.innerHTML = ` 
        <div class="content">
          <img src="${heyLogo}" alt="logo" />
          <div><h3>${linksList[i]}</h3></div>
        </div>`;
    const reverseIndex = linksList.length - 1 - i;
    div.style.transform = ` scale(${
      1 - reverseIndex * baseScaleChange
    }) translateY(-${baseTranslateChange * reverseIndex}rem)`;
    stack.append(div);
  }

  stack.addEventListener("click", (e) => {
    e.stopPropagation();
    const blocks = document.querySelectorAll(".single-block");
    blocks.forEach((block, i) => {
      const reverseIndex = blocks.length - 1 - i;
      block.style.transform = `rotate(${reverseIndex * 1.1}deg) translate(-${
        reverseIndex * 0.3
      }rem, -${reverseIndex * 4}rem)`;
    });
  });

  document.addEventListener("click", (e) => {
    const blocks = document.querySelectorAll(".single-block");
    blocks.forEach((block, i) => {
      const reverseIndex = linksList.length - 1 - i;
      block.style.transform = ` scale(${
        1 - reverseIndex * baseScaleChange
      }) translateY(-${baseTranslateChange * reverseIndex}rem)`;
    });
  });
});
