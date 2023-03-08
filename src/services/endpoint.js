import axios from "axios";

class JummioVerification {
  static getData = async (_URL) => {
    const APICall = await axios.get(_URL);
    
    return {
        APICall: APICall.data,
        FakeData: [
            {
              icon: "identification",
              title: "I.D Verification",
              description:
                "TBC We verify your account to keep you and your money safe and secure, the process is quick and easy. TBC We verify your account to keep you and your money safe and secure, the process is quick and easy. TBC We verify your account to keep you and your money safe and secure, the process is quick and easy.",
              baseURL: "/",
            },
            {
              icon: "address",
              title: "Address Verification",
              description:
                "TBC We verify your account to keep you and your money safe.",
              baseURL: "/",
            },
            {
              icon: "payment",
              title: "Card Verification",
              description:
                "TBC We verify your account to keep you and your money safe and secure, the process is quick and easy.",
              baseURL: "/",
            },
          ]
    }
  };
}
export default JummioVerification;
