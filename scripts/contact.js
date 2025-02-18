function sendMail()
{
    let parms = {
        firstName : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message: document.getElementById("subject").value,
    }

    emailjs.send("service_ggy8j7e,template_kweh87k",parms).then(alert("Email sent!!"))
}