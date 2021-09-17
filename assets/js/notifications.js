const body = document.querySelector("body");

const fireNotification = (text, color) => {
    const notification = document.createElement("div");
    notification.innerText = text;
    notification.style.backgroundColor = color;
    body.appendChild(notifications);

} 

export const handleNewUser = ({nickname}) => {
    fireNotification(`${nickname} just joind! `,"rgb(0, 122, 255)");
};

export const handleDisconnected = ({nickname}) => {
    fireNotification(`${nickname} just left `,"rgb(255, 149, 0)");
};
