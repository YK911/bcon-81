import axios from "axios";
import { customAlphabet } from "nanoid";

import { Toast } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MESSAGE_TYPE = {
  error: "❌ Something went wrong",
  success: "✅ Success",
};
const form = document.forms.commentForm;
const commentsList = document.querySelector(".js-comment-list");
const toastContainer = document.querySelector(".js-toast-container");
const toastEl = new Toast(document.querySelector(".js-toast"));

const nanoid = customAlphabet("1234567890", 2);

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const formData = Object.fromEntries(new FormData(form));
  formData.postId = Number(nanoid());
  formData.userId = Number(nanoid());

  addComment(formData)
    .then(({ data }) => {
      commentsList.insertAdjacentHTML("beforeend", addCommentMarkup(data));

      toastEl._element.textContent = MESSAGE_TYPE.success;
      toastEl._element.classList.add("text-bg-success");
      toastEl.show();
    })
    .catch(error => {
      console.log("🚀 ~ handleFormSubmit:", error);

      toastEl._element.textContent = MESSAGE_TYPE.error;
      toastEl._element.classList.add("text-bg-danger");
      toastEl.show();
    })
    .finally(() => {});

  form.reset();
}

function addComment(commentInfo = {}) {
  return axios.post("https://dummyjson.com/comments/add", commentInfo);
}

function addCommentMarkup({ postId, body, user: { fullName } } = {}) {
  return `<li id="${postId}">
        <h4>${fullName}</h4>
        <p>${body}</p>
    </li>`;
}
