let isEditing = false;
let cardBeingEdited = null;

$(document).ready(function () {
  $(".open__drawer").click(function () {
    $("#todo_Drawer").addClass("active");
  });
  $(".close__modal").click(function () {
    $("#todo_Drawer").removeClass("active");
  });
  // console.log("cvbnm ");
});

const inputBox = document.getElementById("inputId");
const listContainer = document.getElementById("todoList");
const desc = document.getElementById("textareaId");
const errorSms = document.getElementById("errorText");

// let addTask = function () {
// //   if (inputBox.value == " ") {
// //     alert("You may write task");
// //   } else {
// //     let card = document.createElement("card");
// //     card.classList.add("todo--card");
// //     card.innerHTML = inputBox.value;
// //     listContainer.appendChild("card");
// //   }
//   console.log('hello!!!!!!!');
// };

const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 and pad
const day = date.getDate().toString().padStart(2, "0"); // Pad day

const formattedDate = `${day}-${month}-${year}`;

const errorSMS = document.getElementById("erroText");
const icn = document.createElement("i");
icn.className = "fa fa-exclamation-circle";

$(document).ready(function () {
  $(".butn-cls").click(function () {
    if (inputBox.value.trim() === "") {
      // alert("You have to write something");
      errorSMS.textContent = "Please fill the required field";
      errorSMS.prepend(icn);
      console.log("51458453");
      return;
    }

    if (isEditing && cardBeingEdited) {
      // // ‼️ UPDATE EXISTING CARD
      // cardBeingEdited.querySelector("h3").textContent = inputBox.value;
      // cardBeingEdited.querySelector("p").textContent = desc.value;

      // // reset mode
      // isEditing = false;
      // cardBeingEdited = null;

      $(".open__drawer").text("Add Todo"); // optional
      console.log("12355");
    } else {
      let card = document.createElement("card");
      let topCard = document.createElement("div");
      let botomCard = document.createElement("div");
      let cardTitle = document.createElement("h3");
      let cardDesc = document.createElement("p");
      let taskDate = document.createElement("p");
      let editCard = document.createElement("span");
      let deleteTask = document.createElement("span");

      card.classList.add("todo--card");
      taskDate.classList.add("card__date");
      editCard.classList.add("edit__card");
      deleteTask.classList.add("delete__card");
      // checkBox.classList.add("checkbox", "fa");
      topCard.classList.add("card--top");
      botomCard.classList.add("card--foter");

      // topCard.innerHTML = "hello";

      cardTitle.innerHTML = inputBox.value;
      cardDesc.innerHTML = desc.value;
      taskDate.innerHTML = formattedDate;

      listContainer.appendChild(card);
      // card.appendChild(cardTitle);
      card.appendChild(cardDesc);
      card.prepend(topCard);
      card.appendChild(botomCard);
      topCard.appendChild(cardTitle);
      botomCard.prepend(taskDate);
      botomCard.appendChild(editCard);
      botomCard.appendChild(deleteTask);
    }
    inputBox.value = "";
    desc.value = "";
    saveData();
  });

  listContainer.addEventListener(
    "click",
    function (e) {
      if (e.target.tagName === "CARD") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.classList.contains("delete__card")) {
        e.target.parentElement.parentElement.remove();
        saveData();

      } else if(e.target.classList.contains("edit__card")) {
        // e.target.parentElement
      }
    },
    false
  );

  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
  }

  function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
  }

  showList();
  localStorage.clear();
});
