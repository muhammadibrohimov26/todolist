document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.querySelector(".todo-input"),
    todoAddButton = document.querySelector(".todo-button"),
    todoList = document.querySelector("ul"),
    searchInput = document.querySelector('.searchInput'),
    allDelete = document.querySelector('.allDelete');

  todoAddButton.addEventListener("click", addItemListFun);

  document.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
      addItemListFun();
    }
  });

  function addItemListFun() {
    const task = todoInput.value;
    if (task === "") {
      console.log("iltimos biror narsa yozing !");
      
      return;
    }

    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");
    listItem.innerHTML = `
            <span>${task}</span>
            <span class="fa-solid fa-trash delete-button" ></span>
            `;
    todoList.append(listItem);
    // inputni tozalash
    todoInput.value = "";

    // item delete qilish
    const deleteButton = listItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', () =>{
    todoList.removeChild(listItem)
    })

    // bajarildi deyish

    listItem.addEventListener('click', (e) =>{
      if(e.target.tagName === 'LI'){
        listItem.classList.toggle('done');
      }
    })


  }

  allDelete.addEventListener('click', () =>{
    if(confirm('hamma narsa ochirmoqchimsiz ?')){
      todoList.innerHTML = ''
    }
  })
  ///search tizm 
  searchInput.addEventListener('input', () =>{
    const filter = searchInput.value.toLowerCase();
    const tasks = document.querySelectorAll('.todo-item');

    tasks.forEach((task) =>{

      const  taskText = task.querySelector('span').textContent.toLowerCase(); 

      if(taskText.includes(filter)){
        task.style.display = '';
      }
      else{
        task.style.display = 'none';
      }
    })
  })


});
