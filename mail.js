// sending email through contact form 

function sendEmail() {
    var nm = document.querySelector("#form-details form #name").value;
    var em = document.getElementById("#form-details form #email").value;

    var subj = document.getElementById("#form-details form #email").value;
    var txt = document.getElementById("#query").value;
    var body = "Subject: " + subj + "<br><br>" + txt + "<br><br>name: " + nm + "<br>email: " + em;
    Email.send({
        SecureToken: "03aa0893-10ea-4672-9584-b33ca0542468",
        To: 'satwikagrawal2002@gmail.com',
        From: "websitemailer002@gmail.com",
        Subject: "message from " + nm,
        Body: body
    }).then(
        message => {
            if (message == 'OK') {
                alert("Your Message Sent Successfully");
            }
            else {
                console.error(message);
                alert("There is error at sending message");
            }

        }

    );
}