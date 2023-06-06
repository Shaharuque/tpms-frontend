const useToken = () => {
  // Decrypt the access token from localStorage
  const token = localStorage.getItem("adminToken") || null;

  return { token };
};

export default useToken;
