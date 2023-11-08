const registerBtn = document.getElementsByClassName("registerBtn")[0];
registerBtn.addEventListener("click", validate);

function validate()
{
    let regx = new RegExp("^([a-zA-Z0-9\\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$");
    let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    let listOfWarningLabels = document.getElementsByClassName("warningLabels");
    let listOfInputs = document.getElementsByClassName("form")[0].getElementsByTagName("input");

    for (let i = 0; i < listOfInputs.length; i++)
    {
        if (listOfInputs[i].value == "" || listOfInputs[i].value == null)
        {
            listOfWarningLabels[i].textContent = "Empty Field!";
        }
        else
            listOfWarningLabels[i].textContent = "";

    }

    if (listOfInputs[3].value == "" || listOfInputs[3].value == null)
        listOfWarningLabels[3].textContent = "(Empty field!)";
    else if (!regx.test(listOfInputs[3].value))
        listOfWarningLabels[3].textContent = "(Invalid email!)";
    else
        listOfWarningLabels[3].textContent = "";

    if (listOfInputs[4].value == "" || listOfInputs[4].value == null)
        listOfWarningLabels[4].textContent = "(Empty field!)";
    else if (!mediumRegex.test(listOfInputs[4].value))
        listOfWarningLabels[4].textContent = "PIN not strong enough.";
    else
        listOfWarningLabels[4].textContent = "";


    if (listOfInputs[4].value != "" && listOfInputs[4].value != null && listOfInputs[5].value != "" && listOfInputs[5].value != null)
    {
        if (listOfInputs[4].value !== listOfInputs[5].value)
            listOfWarningLabels[5].textContent = "PINs don't match."
    }
    
}

const showButton1 = document.getElementsByClassName("passwordInputContainer")[0].getElementsByTagName("button")[0];
showButton1.addEventListener("click", showPassword);

const showButton2 = document.getElementsByClassName("passwordInputContainer")[1].getElementsByTagName("button")[0];
showButton2.addEventListener("click", showPassword);

function showPassword(e)
{
    let rightIndex = 0;

    if (e.currentTarget === showButton2)
        rightIndex = 1;

    let passwordInput = document.getElementsByClassName("passwordInputContainer")[rightIndex].getElementsByTagName("input")[0];
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
