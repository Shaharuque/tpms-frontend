import CryptoJS from "crypto-js";
let decryptedData;
// Decrypt the access token from localStorage
const gatheredData = localStorage.getItem("adminToken")
  ? localStorage.getItem("adminToken")
  : null;
if (gatheredData) {
  let bytes = CryptoJS.AES.decrypt(gatheredData, "tpm422");
  decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  console.log("decrypted data:", decryptedData);
}

export const ip = "https://app.therapypms.com";

export const headers = {
  Accept: "application/json",
  Authorization: decryptedData,
};
