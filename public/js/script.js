//button id of devour - listener to change devoured to true in db - put req to api 

//button id of add - listener to add burger name - post req to api 

const devour = document.getElementById('devour')
const addBurg = document.getElementById('add')
const bName = document.getElementById('bName')

devour.addEventListener('click', function() {
    console.log('click on devour')
})

addBurg.addEventListener('click', function() {
    fetch('/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({ name: bName.value })
      })
    console.log(bName.value)
})