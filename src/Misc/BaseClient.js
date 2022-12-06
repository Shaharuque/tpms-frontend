export const baseIp = "https://test-prod.therapypms.com/api/v1";
export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: localStorage.getItem("adminToken") || null,
};
