let database  ={
  page_title:'Basic Form',
  header_title:'Welcome To Test Driven Developement Odin Assignment 11',
  download_button:'Contact Me',
  header2_links:['capitalize','reverseString','calculator','Caesar Cipher','Array Analysis'],
  avatar:"https://avatars.githubusercontent.com/u/40745841?s=400&u=b3b4ed7263a659508bbfbfa924fd18166486ba96&v=4"
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
      reverseStringFrontEnd()
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

  myContact.addEventListener('click', downloadPopUp)
  changePage.addEventListener('click', doSomething)
}
function capitalizeFrontEnd(){

  const wrapper = document.querySelector('.main-content')
  const capContainer = document.createElement('div')

  capContainer.classList.add('cap-container')
  wrapper.appendChild(capContainer)

}


pageLoading()
pageWrapper()
eventListerners()






function reverseStringFrontEnd(){
  const wrapper =  document.querySelector('.wrapper')
  if(wrapper.children!==null){wrapper.children.remove()}
  reverseStringContainer.classList.add('reverseString-container')
  wrapper.appendChild(reverseStringContainer)

}
