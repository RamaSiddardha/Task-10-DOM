var myForm=document.querySelector('#my-form')
myForm.addEventListener('submit',getDetails)

function getDetails(e){
    e.preventDefault()

    let UserName=document.getElementById('name').value
    // localStorage.setItem('User Name',UserName)

    let Email=document.getElementById('email').value
    // localStorage.setItem('Email Id',Email)

    let details={
        name:UserName,
        Email_id:Email
    }
    Details_Stringify=JSON.stringify(details)
    localStorage.setItem('Details',Details_Stringify)

    console.log(Details_Stringify)
}
