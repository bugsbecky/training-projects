const faqItems = document.getElementsByClassName("faq-item");
const faqItemsBody = document.getElementsByClassName("faq-item-body")

for(let index = 0; index < faqItems.length; index++) {
    const faqItem = faqItems[index];
    const toggleBtn = faqItem.querySelector(".toggle-btn");
    const faqItemBody = faqItem.querySelector(".faq-item-body");

    toggleBtn.addEventListener("click", () => {
        removeClassnameActive();
        faqItemBody.classList.toggle("active");
    })
}

function removeClassnameActive() {
    for(let index = 0; index < faqItemsBody.length; index++) {
        const faqItemBody = faqItemsBody[index];
        faqItemBody.classList.remove("active");
    }
}
