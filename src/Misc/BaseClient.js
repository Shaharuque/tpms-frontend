//export const baseIp = "https://stagapi.therapypms.com/api/v1/inadmin";
export const baseIp = "http://localhost:8080/api/v1/inadmin";
export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: localStorage.getItem("adminToken") || null,
};
