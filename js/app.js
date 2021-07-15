let database  ={
  page_title:'Basic Form',
  header_title:'Welcome To Test Driven Developement Odin Assignment 11',
  download_button:'Contact Me',
  header2_links:['capitalize','reverseString','calculator','Caesar Cipher','Array Analysis'],
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
  const downloadLink = document.createElement('a')


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
    downloadLink.href = "#";
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

pageLoading()
