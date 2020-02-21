const addBurg = document.getElementById('add')
const bName = document.getElementById('bName')

function test(id) {
    fetch('/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({ id: id })
    }) .then(location.reload())
}

addBurg.addEventListener('click', function() {
    fetch('/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({ name: bName.value })
      })
})