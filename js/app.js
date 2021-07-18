let database  ={
  page_title:'Basic Form',
  header_title:'Welcome To Test Driven Developement Odin Assignment 11',
  download_button:'Contact Me',
  header2_links:['capitalize','reverseString','calculator','Caesar Cipher','Array Analysis'],
  avatar:"https://avatars.githubusercontent.com/u/40745841?s=400&u=b3b4ed7263a659508bbfbfa924fd18166486ba96&v=4",
  inputs:"",
  expected_output:"",
  outputs:'',
  status:''
}
// querrselectors
const titleHead = document.querySelector('head');
const body = document.querySelector('body');


function pageLoading(){
  const title = document.createElement('title');
  const stylelink1 = document.createElement('link')
  const stylelink2 = document.createElement('link')
  const header = document.createElement('header')
  const headerTitle = document.createElement('h1')
  const downloadLink = document.createElement('button')


  const header2 = document.createElement('ul')
  const basic = document.createElement('li')
  const register= document.createElement('li')
  const login= document.createElement('li')
  const mini = document.createElement('li')
  const labels = document.createElement('li')



  const basicLink  = document.createElement('a')
  const registerLink = document.createElement('a')
  const loginLink = document.createElement('a')
  const miniLink  = document.createElement('a')
  const labelsLink  = document.createElement('a')




    title.innerText=database.page_title;
    stylelink1.rel = 'stylesheet'
    stylelink1.href = 'css/styles.css'
    headerTitle.innerText = database.header_title;
    downloadLink.classList.add('download-btn');
    downloadLink.innerText= database.download_button



    basicLink.innerText = database.header2_links[0]
    registerLink.innerText = database.header2_links[1]
    loginLink.innerText = database.header2_links[2]
    miniLink.innerText = database.header2_links[3]
    labelsLink.innerText = database.header2_links[4]



    basicLink.classList.add('class0')

    registerLink.classList.add('class1')
    loginLink.classList.add('class2')
    miniLink.classList.add('class3')
    labelsLink.classList.add('class4')





      titleHead.appendChild(title)
      titleHead.appendChild(stylelink1)
      titleHead.appendChild(stylelink2)
      body.appendChild(header)
      header.appendChild(headerTitle)
      header.appendChild(downloadLink)




      basic.appendChild(basicLink)
      register.appendChild(registerLink)
      login.appendChild(loginLink)
      mini.appendChild(miniLink)
      labels.appendChild(labelsLink)


      body.appendChild(header2)
      header2.appendChild(basic)
      header2.appendChild(register)
      header2.appendChild(login)
      header2.appendChild(mini)
      header2.appendChild(labels)





}
function downloadPopUp(){
  const body= document.querySelector('body')


const popup = document.createElement('div')
popup.classList.add('popup-div')

 let html= `<div class="popup-overlay">
                </div> <div class="popup">
                <div class="popup-close" onclick="closeLoginForm()">×</div>
                <div class="form">
                    <div class="avatar">
                        <img src="https://avatars.githubusercontent.com/u/40745841?s=400&u=b3b4ed7263a659508bbfbfa924fd18166486ba96&v=4" alt="">
                    </div>
                    <div class="header">       Contact Info     </div>
                    <div class="element">
                        <label>Full Name</label>
                        <h3>Mohamad Siysinyuy Banbong</h3>
                    </div>
                    <div class="element">
                        <label>Contacts</label>
                        <h3>msiysinyuy@gmail.com</h3>
                    </div>
                    <div class="element">
                        <label >Git Link</label>
                        <h3>Github.com/mrsuber</h3>
                    </div>

                </div>
            </div>`
popup.innerHTML = html
 body.appendChild(popup)
 openLoginForm()


}
function pageWrapper(){

  const wrapper = document.createElement('div')
  wrapper.classList.add('main-content')
  body.appendChild(wrapper)
  capitalizeFrontEnd()
}
function openLoginForm(){
  document.body.classList.add("showLoginForm");
}
function closeLoginForm(){
  document.body.classList.remove("showLoginForm");
  const pop= document.querySelector('.popup-div')
  if(pop!==null){
    pop.remove()
  }
}
function clearElement(element){
  // console.log(element.children)
  for(let i=0;i<element.children.length;i++){
    element.children[i].remove();
  }

}
function doSomething(event){
  let option = event.target

  if(option.classList[0]==='class0'){
    for(let i=0;i<option.parentNode.parentNode.children.length;i++){
      option.parentNode.parentNode.children[i].children[0].classList.remove('active')
    }
    if(document.querySelector('.main-content')!==null){
    const clear= document.querySelector('.main-content')
    clearElement(clear)
  }
    const active = document.querySelector('.class0')
    active.classList.add('active')
    capitalizeFrontEnd()


  }else  if(option.classList[0]==='class1'){
            for(let i=0;i<option.parentNode.parentNode.children.length;i++){
      option.parentNode.parentNode.children[i].children[0].classList.remove('active')}
              if(document.querySelector('.main-content')!==null){
              const clear= document.querySelector('.main-content')
              clearElement(clear)
            }
      // set a new active class
      const active = document.querySelector('.class1')
      active.classList.add('active')

  }else  if(option.classList[0]==='class2'){
    // remove the active class
    for(let i=0;i<option.parentNode.parentNode.children.length;i++){
      option.parentNode.parentNode.children[i].children[0].classList.remove('active')  }
      // clear the page of the previous forms
      if(document.querySelector('.main-content')!==null){
        const clear= document.querySelector('.main-content')
        clearElement(clear)
      }
      // set a new active class
    const active = document.querySelector('.class2')
    active.classList.add('active')
  }else  if(option.classList[0]==='class3'){
    // remove the active class
    for(let i=0;i<option.parentNode.parentNode.children.length;i++){
      option.parentNode.parentNode.children[i].children[0].classList.remove('active')  }
      // clear the page of the previous forms
      if(document.querySelector('.main-content')!==null){
        const clear= document.querySelector('.main-content')
        clearElement(clear)
      }
      // set a new active class
    const active = document.querySelector('.class3')
    active.classList.add('active')
  }else   if(option.classList[0]==='class4'){
    // remove the active class
    for(let i=0;i<option.parentNode.parentNode.children.length;i++){
      option.parentNode.parentNode.children[i].children[0].classList.remove('active')  }
      // clear the page of the previous forms
      if(document.querySelector('.main-content')!==null){
        const clear= document.querySelector('.main-content')
        clearElement(clear)
      }
      // set a new active class
    const active = document.querySelector('.class4')
    active.classList.add('active')
  }
  if(option.classList[0]==='class5'){
    // remove the active class
    for(let i=0;i<option.parentNode.parentNode.children.length;i++){
      option.parentNode.parentNode.children[i].children[0].classList.remove('active')  }
      // clear the page of the previous forms
      if(document.querySelector('.main-content')!==null){
        const clear= document.querySelector('.main-content')
        clearElement(clear)
      }
      // set a new active class
    const active = document.querySelector('.class5')
    active.classList.add('active')


  }
  if(option.classList[0]==='class6'){
    // remove the active class
    for(let i=0;i<option.parentNode.parentNode.children.length;i++){
      option.parentNode.parentNode.children[i].children[0].classList.remove('active')  }
      // clear the page of the previous forms
      if(document.querySelector('.main-content')!==null){
        const clear= document.querySelector('.main-content')
        clearElement(clear)
      }
      // set a new active class
    const active = document.querySelector('.class6')
    active.classList.add('active')



  }
}
function eventListerners(){
  const myContact = document.querySelector('.download-btn')
  const changePage = document.querySelector('ul')
  const runTest = document.querySelector('.run-test')

  myContact.addEventListener('click', downloadPopUp)
  changePage.addEventListener('click', doSomething)
  runTest.addEventListener('click' , runManualTest)
}
function capitalizeFrontEnd(){

  const wrapper = document.querySelector('.main-content')
  const capContainer = document.createElement('div')
  const table = document.createElement('table')
  const tableHead = document.createElement('thead')
  const tableHeadRow = document.createElement('tr')
  const tableheadColomn1 = document.createElement('th')
  const tableheadColomn2 = document.createElement('th')
  const tableheadColomn3 = document.createElement('th')
  const tableheadColomn4 = document.createElement('th')
  const tableBody = document.createElement('tbody')
  const tableBodyRow = document.createElement('tr')
  const tableBodyColomn1 = document.createElement('td')
  const tableBodyColomn2 = document.createElement('td')
  const tableBodyColomn3 = document.createElement('td')
  const tableBodyColomn4 = document.createElement('td')

  const input1 = document.createElement('input')
  const input2 = document.createElement('input')
  const buttonRunTest=document.createElement('button')
  const buttonRunAutoTest= document.createElement('button')
  buttonRunTest.classList.add('run-test')
  buttonRunTest.innerText="Run Test"
  buttonRunAutoTest.classList.add('run-auto-test')
  buttonRunAutoTest.innerText= "Run Auto Test"
  input1.classList.add('input')
  input1.placeholder="Enter Word/Sentence"
  input1.type='text'

  input2.classList.add('expected-output')
  input2.id="expected-output"
  input2.placeholder="Enter Expected Output"
  input2.type='text'


  capContainer.classList.add('cap-container')
  // tableBodyColomn1.classList.add('input')
  // tableBodyColomn2.classList.add('expected-output')
  tableheadColomn1.innerText = "Input"
  tableheadColomn2.innerText = "Expected Output"
  tableheadColomn3.innerText = "Submit"
  tableheadColomn4.innerText = "Data Analysis"

  // tableBodyColomn1.innerHTML = '<input class="input" type="text" placeholder="Enter Word/Sentence">'
  // tableBodyColomn2.innerHTML = '<input class="expected-output" type="text" placeholder="Enter Expected Output">'
  // tableBodyColomn3.innerHTML = '<button class="run-test">Run Test</button><button class="run-auto-test">Run Auto Test</button>'
  tableBodyColomn4.innerHTML="Input:"+database.inputs+" <br>OutPut:"+database.outputs+"<br>Expected Output:"+database.expected_output+"<br>Test Status: "+database.status

  wrapper.appendChild(capContainer)
  capContainer.appendChild(table)
  table.appendChild(tableHead)
  tableHead.appendChild(tableHeadRow)
  tableHeadRow.appendChild(tableheadColomn1)
  tableHeadRow.appendChild(tableheadColomn2)
  tableHeadRow.appendChild(tableheadColomn3)
  tableHeadRow.appendChild(tableheadColomn4)

  table.appendChild(tableBody)
  tableBody.appendChild(tableBodyRow)
  tableBodyRow.appendChild(tableBodyColomn1)
  tableBodyRow.appendChild(tableBodyColomn2)
  tableBodyRow.appendChild(tableBodyColomn3)
  tableBodyRow.appendChild(tableBodyColomn4)

  tableBodyColomn1.appendChild(input1)
  tableBodyColomn2.appendChild(input2)
  tableBodyColomn3.appendChild(buttonRunTest)
  tableBodyColomn3.appendChild(buttonRunAutoTest)


}
function runManualTest(e){
  const input = document.querySelector('.input')
  const expectedOutput = document.getElementById('expected-output')
  // console.log(input.value)
  if(input.value ===""){
    alert("please enter a string")
    return
  }

  if(expectedOutput.value===""){
    alert("please enter expected output")
    return
  }
capitalizingFirstLetter(input.value);
  database.expected_output=expectedOutput.value

  console.log(input.value)
  console.log(expectedOutput.value)
  console.log(e)
}
function capitalizingFirstLetter(string){
  if(String.typeOf(string)){
    alert("this is a string")
  }else{
    alert("enter a string")
  }
}




pageLoading()
pageWrapper()
eventListerners()
