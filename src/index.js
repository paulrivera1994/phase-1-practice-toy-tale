let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


// Render Toys
function renderToys(toy) {
  let h2 = document.createElement('h2')
  h2.innerText = toy.name
}


//Fetch requests
function getToys(){
  return fetch('http://localhost:3000/toys')
  .then(res => res.json())
}

// Get toys 
getToys().then(toys => {
  toys.forEach(toy => {
    //function to render toys goes here or something
    renderToys(toy)
  })
})



//Initialize my functions
function initialize(){
  getToys()
}
initialize()