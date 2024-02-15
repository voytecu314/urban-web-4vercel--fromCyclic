info = {
    EN: {
        contact: {
        title: "Message sent!",
        msg: "We will get back as soon as possible."
        },
    },
    DE: {
        contact: {
            title: "Nachricht gesendet!",
            msg: "Wir melden uns so schnell wie möglich."
        },
    },
    PL: {
        contact: {
            title: "Wiadomość wysłana!",
            msg: "Odpowiemy tak szybko, jak to możliwe."
        },
    },
}

const triggerInfoModal = document.getElementById('triggerInfoModal');
const infoModal = document.getElementById('infoModal');

function runInfoModal(title, msg) {

    const modalTitle = document.getElementById('infoModalTitle');
    const modalMessage = document.getElementById('infoModalMessage');

    modalTitle.textContent=title;
    modalMessage.textContent=msg;

    triggerInfoModal.click();
    contactForm.reset();
}