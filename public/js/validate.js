document.addEventListener("DOMContentLoaded", function (event) {

    document.querySelector('#send').addEventListener('click', (event) => {
        event.preventDefault();
        // console.log('event ok');
        let navn = document.querySelector('#navn').value;
        let email = document.querySelector('#email').value;
        let telefon = document.querySelector('#telefon').value;
        let emne = document.querySelector('#emne').value;
        let besked = document.querySelector('#besked').value;

        let valid = true;

        if ((!ValidateLength(navn, 1) || !ValidateLength(email, 1)) && valid) {
            valid = false;
            alert("Alle felter skal udfyldes!");
        }

        if (!ValidateLength(navn, 2) && valid) {
            valid = false;
            alert("Navn skal være mindst 2 tegn!");
        };

        if (!ValidateEmail(email) && valid) {
            valid = false;
            alert("Du har indtastet en ugyldig email!");
        };

        if (!ValidateTelefon(telefon) && valid) {
            valid = false;
            alert("Du har indtastet forkert telefon nr.");
        };

        // console.log(emne);
        if (!ValidateLength(emne, 2) && valid) {
            valid = false;
            alert("Emne skal være mindst 2 tegn!");
        };

        if (!ValidateLength(besked, 2) && valid) {
            valid = false;
            alert("besked skal være mindst 2 tegn!");
        };

        // console.log(ValidateTelefon(telefon));

        // console.log(ValidateEmail(email));

        if (valid) {
            document.querySelector('#navn').value = "";
            document.querySelector('#email').value = "";
            document.querySelector('#telefon').value = "";
            document.querySelector('#emne').value = "";
            document.querySelector('#besked').value = "";



            let init = {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json'
                },
                body: `{"navn":"${navn}","email":"${email}", "telefon":"${telefon}", "emne":"${emne}", "besked":"${besked}" }`
                , cache: 'no-cache',
                mode: 'cors'
            };

            let request = new Request('/kontaktForm', init);

            fetch(request)
                .then(response => { console.log(response) }).catch(err => {
                    alert("STOP!");
                    console.log(err)
                });
        }



    })
    //Email-validering
    function ValidateEmail(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!reg.test(email)) {
            return false;
        }
        return true;
    }

    //Validering af længden på navn
    function ValidateLength(navn, antal) {
        if (navn.length < antal) {
            return false;
        }
        return true;
    }

    //Telefonvalidering
    function ValidateTelefon(telefon) {
        var reg = /^[0-9]{8}$/;
        if (!reg.test(telefon)) {
            return false;
        }
        return true;
    }


});