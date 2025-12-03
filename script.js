$(document).ready(function () {
  $(".open__drawer").click(function () {
    $("#todo_Drawer").addClass("active");
  });

  $(".close__modal").click(function () {
    $("#todo_Drawer").removeClass("active");
  });
  console.log("cvbnm ");
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

