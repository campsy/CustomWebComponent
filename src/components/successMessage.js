const SuccessMessage = (container, active) => {
    const successMessage = document.createElement("div");
    successMessage.classList.add("tile-container", "success");
    successMessage.innerHTML = `
            <div class="icon"></div>
            <div class="content">
                <h2>Thanks!</h2>
                <p>To keep your account safe and secure, your account must be verified before we can process your withdrawal. If you have been asked to provide documentation to verify your account, please choose from one of the below options.</p>
            </div>`;
    container.appendChild(successMessage);
    active.length > 0 && successMessage.classList.add("active");


    successMessage.addEventListener("click", ()=>{
        successMessage.classList.remove("active");
    });
};

export default SuccessMessage;