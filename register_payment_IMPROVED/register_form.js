const registerBtn = document.getElementsByClassName("registerBtn")[0];
registerBtn.addEventListener("click", validate);

function validate()
{
    let regx = new RegExp("^([a-zA-Z0-9\\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$");
    let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");


    let listOfWarningLabels = document.getElementsByClassName("warningLabels");
    // let li = document.getElementsByClassName("inputsContainer")[0];
    let listOfInputs = document.getElementsByTagName("input");

    // for (let input of listOfInputs)
    // {
    //     console.log(input);
    // }
    // console.log(listOfInputs);

    if (listOfInputs[2].value == "" || listOfInputs[2].value == null)
        listOfWarningLabels[2].textContent = "(Empty field!)";
    else if (!regx.test(listOfInputs[2].value))
        listOfWarningLabels[2].textContent = "(Invalid email!)";
    else
        listOfWarningLabels[2].textContent = "";

    if (listOfInputs[4].value == "" || listOfInputs[4].value == null)
        listOfWarningLabels[4].textContent = "(Empty field!)";
    else if (!mediumRegex.test(listOfInputs[4].value))
        listOfWarningLabels[4].textContent = "Password not strong enough";
    else
        listOfWarningLabels[4].textContent = "";
    
}

const showButton = document.getElementsByClassName("passwordInputContainer")[0].getElementsByTagName("button")[0];
showButton.addEventListener("click", showPassword);

function showPassword(e)
{
    let passwordInput = document.getElementsByClassName("passwordInputContainer")[0].getElementsByTagName("input")[0];
    let img = e.currentTarget.children[0];

    if (passwordInput.type == "password")
    {
        passwordInput.type = "text";
        img.src = "Images\\seen.png";
    }
    else
    {
        passwordInput.type = "password";
        img.src = "Images\\eye (1).png";
    }
}
