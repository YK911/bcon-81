const { reviewForm } = document.forms;

reviewForm.onsubmit = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(event.target));

  console.log("🚀 ~ formData:", formData);

  event.target.reset();
};

const formCaption = document.querySelector(".js-caption");
formCaption.classList.add("modal-caption");

// formCaption.style.width = "300px";
// formCaption.style.marginBottom = "40px";
// formCaption.style.fontWeight = 600;
// formCaption.style.fontSize = "24px";
// formCaption.style.lineHeight = 1.17;

// width: 300px;
// margin-bottom: 40px;
// font-weight: 600;
// font-size: 24px;
// line-height: 1.17;
// letter-spacing: -0.03em;
// text-transform: uppercase;
