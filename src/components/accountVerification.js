const AccountVerification = (container) => {
    const accountVerification = document.createElement("div");
    accountVerification.classList.add("tile-container");
    accountVerification.innerHTML = `
            <div class="content">
                <h2>Account Verification</h2>
                <p>To keep your account safe and secure, your account must be verified before we can process your withdrawal.</p>
            </div>`;
    container.appendChild(accountVerification);
};

export default AccountVerification;