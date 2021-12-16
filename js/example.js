
let cardChatId = document.getElementById("cardChatId")
let messageIcon = document.getElementById("messageIcon")
cardChatId.style.display="none"

const showChat = () =>{
    messageIcon.style.display="none"
    cardChatId.style.display="block"
}

const hideChat = () =>{
    cardChatId.style.display="none"
    messageIcon.style.display="block"
}
