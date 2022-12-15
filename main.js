var myForm=document.querySelector('#my-form')
myForm.addEventListener('submit',getDetails)

var list=document.getElementById('users')




function getDetails(e){
    e.preventDefault()
    var UserName=document.getElementById('name').value
    // localStorage.setItem(UserName,'User Name')

    var Email=document.getElementById('email').value
    // localStorage.setItem(Email,'Email Id')

    var li=document.createElement('li')
    li.className='items'
   
    var Nametext= document.createTextNode(UserName)
    var spacetext=document.createTextNode(" ")
    var mailtext=document.createTextNode(Email)

    li.append(Nametext)
    li.append(spacetext)
    li.append(mailtext)

    list.append(li)
    
// li.appendChild(document.createTextNode())
    


    // let details={
    //     name:UserName,
    //     Email_id:Email
    // }
    // Details_Stringify=JSON.stringify(details)
    localStorage.setItem(Email,UserName)

    // console.log(Details_Stringify)
}

