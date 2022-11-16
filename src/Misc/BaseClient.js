import CryptoJS from "crypto-js";
let decryptedData;
// Decrypt the access token from localStorage
const gatheredData = localStorage.getItem("adminToken") || null;
if (gatheredData) {
  let bytes = CryptoJS.AES.decrypt(gatheredData, "tpm422");
  decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //console.log("decrypted data:", decryptedData);
}

export const baseIp = "https://ovh.therapypms.com/api/v1";
export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: decryptedData,
};
