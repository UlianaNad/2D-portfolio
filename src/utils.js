export function displayDialog(text, onDisplayEnd){
    const dialogueUI= document.getElementById("textbox-container");
    const dialoge = document.getElementById("dialogue");

    dialoge.style.display = "block";

    let index = 0;

    let currentText = "";
    const intervalRef = setInterval(()=>{
        if(index < text.tength){
            currentText += text[index];
            dialoge.innerHTML = currentText;
            index++;
            return;
        }

        clearInterval(intervalRef);
    }, 5);

    const closeBtn = document.getElementById("close");

    function onCloseBtnClick(){
        onDisplayEnd();
        dialogueUI.style.display = "none";
        dialoge.innerHTML = "";
        clearInterval(intervalRef);
        closeBtn.removeEventListener("click", onCloseBtnClick)
    }

    closeBtn.addEventListener("click" , onCloseBtnClick)
}   