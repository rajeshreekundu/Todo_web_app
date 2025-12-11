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
    if (inputBox.value === "") {
      // alert("You have to write something");
      errorSMS.textContent = "Please fill the required field";
      errorSMS.prepend(icn)
      console.log('51458453')
    } else {
      let card = document.createElement("card");
      let cardTitle = document.createElement("h3");
      let cardDesc = document.createElement("p");
      let taskDate = document.createElement("p");
      let deleteTask = document.createElement("span");
      // let checkbox = document.createElement("i");

      card.classList.add("todo--card");
      taskDate.classList.add("card__date");
      deleteTask.classList.add("delete__card");
      // checkbox.classList.add("fa fa-square-o");

      cardTitle.innerHTML = inputBox.value;
      cardDesc.innerHTML = desc.value;
      taskDate.innerHTML = formattedDate;

      listContainer.appendChild(card);
      card.appendChild(cardTitle);
      card.appendChild(cardDesc);
      card.appendChild(taskDate);
      card.appendChild(deleteTask);
    }
    inputBox.value = "";
    desc.value = "";
    saveData();
  });

  listContainer.addEventListener(
    "click", function (e) {
      if (e.target.tagName === "CARD") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
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
});
