// create a function that replaces the big pic for the ones that you click on
// document.querySelector('#big') --> selects the id: 'big', but because it is an object, we need to call the key .src to get the value
//  = el.src --> replaces the current value for the new value, but because the element is an object as well, we need to call for the key to get the value
const makeBig = photo => {
  document.querySelector('#big').src = photo.src
}
