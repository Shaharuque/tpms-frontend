import CryptoJS from "crypto-js";
const useToken = () => {
  let token;
  // Decrypt the access token from localStorage
  const gatheredData = localStorage.getItem("adminToken") || null;
  if (gatheredData) {
    let bytes = CryptoJS.AES.decrypt(gatheredData, "tpm422");
    token = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    //console.log("decrypted data:", decryptedData);
  }

  return { token };
};

export default useToken;
