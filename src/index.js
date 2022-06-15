document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault
    handleToDo(e.target.new-task-description)
  })
});

function handleToDo(todo){
  let p = document.createElement('button')
  Btn.textcontent = 'My Todos'
  p.appendChild(btn)
  document.querySelector('#My Todo_container').appendChild(p)
}