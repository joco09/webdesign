document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});




const classesArray = [{image:"images/running.jpg", time: "10:22", class: "cardio", trainer: "John", button: "Sign up"}, 
{image:"images/squats.jpg", time: "1:10", class: "squats", trainer: "John", button: "Sign up"},
{image:"images/handstand.jpg", time: "1:10", class: "handstand", trainer: "John", button: "Sign up"}]

    function loadingClasses(){   
        for(let classes of classesArray){
                let divNode = document.createElement("div")
                divNode.className = "class"
                document.getElementById("work-out-classes").appendChild(divNode); 
            for (const classesInfo in classes) {   
                if(classesInfo == "image"){
                    let imageNode = document.createElement("img")
                    imageNode.setAttribute("src", classes[classesInfo]);
                    imageNode.setAttribute("alt", "handstand");
                    imageNode.setAttribute("style", "width: 50%");
                    divNode.appendChild(imageNode); 
                }
                else if (classesInfo !== "image" && classesInfo !== "button"){
                    let textDiveNode = document.createElement("div");
                    textDiveNode.className = "textbox";
                    let text = classesInfo + " : " + classes[classesInfo];
                    let textnode = document.createTextNode(text); 
                    textDiveNode.appendChild(textnode);
                    divNode.appendChild(textDiveNode);   
                }
                else{
                    let buttonNode = document.createElement("button")
                    buttonNode.setAttribute("type", "button");
                    let textnode = document.createTextNode(classes[classesInfo]); 
                    buttonNode.appendChild(textnode);
                    divNode.appendChild(buttonNode); 
                }
                
            }
        }
        
    }
    loadingClasses();