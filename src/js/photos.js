const inputElements = document.querySelectorAll('.addedImg input');


inputElements.forEach(input => input.addEventListener('change', (event)=>{

  const clickedElement = event.target.files[0]

  console.log(event);
  
  let fileURL = clickedElement.name
  const fileReader = new FileReader()

  const labelItem = document.querySelector(`label[for="${event.target.id}"]>img`)
  
  console.log(labelItem)

  labelItem.src = `pic/${fileURL}`
 
 
}))