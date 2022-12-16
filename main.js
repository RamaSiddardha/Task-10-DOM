var myForm=document.querySelector('#my-form')
myForm.addEventListener('submit',getDetails)

var list=document.getElementById('users')

list.addEventListener('click',removelist)


function removelist(e){
    if(e.target.classList.contains('delete')==true){
        var removeitem=e.target.parentElement
        list.removeChild(removeitem)
    }
}


function getDetails(e){
    
    e.preventDefault()
    var UserName=document.getElementById('name').value
    // localStorage.setItem(UserName,'User Name')

    var Email=document.getElementById('email').value
    // localStorage.setItem(Email,'Email Id')

    if(localStorage.getItem(Email)!=null){
        var dltText=document.getElementById(Email)
        if(dltText !==null)dltText.remove()
    }
    var li=document.createElement('li')
    li.className='items'
    li.id=Email
   
    var dltBtn=document.createElement('button')
    var dltBtn_Text=document.createTextNode('Delete')
    dltBtn.className='delete'
    dltBtn.append(dltBtn_Text)

    var editBtn=document.createElement('button')
    var editBtn_Text=document.createTextNode('Edit')
    editBtn.append(editBtn_Text)

    var Nametext= document.createTextNode(UserName)
    var spacetext=document.createTextNode('_')
    var mailtext=document.createTextNode(Email)

    li.append(Nametext)
    li.append(spacetext)
    li.append(mailtext)
    li.append(editBtn)
    li.append(dltBtn)

    list.append(li)

    localStorage.setItem(Email,UserName)

    }
 