document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const msgEl = document.getElementById("formMessage");
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (!email.value.trim().match(emailPattern)) {
      alert("Invalid email format");
      msgEl.textContent = "";
      return;
    }
  
    if (name.value.trim() === "") {
      alert("Name is required");
      msgEl.textContent = "";
      return;
    }
  
    msgEl.textContent = "Submitted successfully!";
    msgEl.style.color = "green";
  
    name.value = "";
    email.value = "";
  
    setTimeout(() => {
      msgEl.textContent = "";
    }, 3000);
  });
  
  function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    const list = document.getElementById("todoList");
  
    if (text !== "") {
      const li = document.createElement("li");
      li.innerHTML = `${text} <button onclick="this.parentElement.remove()">Delete</button>`;
      list.appendChild(li);
      input.value = "";
    }
  }