let form = document.getElementById("login_form")

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    action_A()
})
let action_A = ()=>{
    let email = document.getElementById("inputted_mail").value.trim()
    let pass = document.getElementById("inputted_password").value.trim()
    if (email === "first@mail.com" && pass==="1212"){
        window.location.href="UserDashboard.html"
    }
}