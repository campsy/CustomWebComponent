/* eslint-disable */
import styles from "/styles.scss";
import SuccessMessage from "./components/successMessage";
import AccountVerification from "./components/accountVerification";
import VerificationTile from "./components/verificationTile";
import JummioVerification from "./services/endpoint";

class UserTemplate extends HTMLElement {
    #userVerificationTemplate = null;
    #data = null;

    constructor() {
        super();
        this.#userVerificationTemplate = this.attachShadow({ mode: "closed" });
    }

    connectedCallback () {
        // Get Attributes
        const casinoId = this.getAttribute("casinoId");
        const pId = this.getAttribute("pId");
        const _URL = this.getAttribute("baseURL");
        const active = this.getAttribute("active") != null ? "active" : "";

        // Styles
        const style = document.createElement("style");
        style.innerHTML = styles;
        this.#userVerificationTemplate.appendChild(style);

        const container = document.createElement("div");
        container.classList.add("container");

        const _DATACALL = async()=>{
            const _data = await JummioVerification.getData(_URL);
            this.#data = _data.FakeData;            
            console.log(_data.APICall);
   
            SuccessMessage(container, active);
            AccountVerification(container);
            VerificationTile(container, this.#data, casinoId, pId);
            
            this.#userVerificationTemplate.appendChild(container);
        }
        _DATACALL();
    }
}
customElements.define("verification-paths", UserTemplate);