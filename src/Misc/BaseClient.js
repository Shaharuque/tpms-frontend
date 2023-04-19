// export const baseIp = "https://stagapi.therapypms.com/api/internaladmin";
export const baseIp = "http://localhost:9000/api/internaladmin";
export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: localStorage.getItem("adminToken") || null,
};
