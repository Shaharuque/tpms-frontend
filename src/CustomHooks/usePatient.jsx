import { useEffect, useState } from "react";

const usePatient = () => {
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://app.therapypms.com/api/v1/admin/ac/patient", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYzhkOTM0NTUwYWI2Mzk0OTgzMmM4MDA4MTJjODIyYmNlMTNhNzkwYjdmZGZhMzhkYmQyNzllYTJmY2ZhZmRkNjNjNmQ1MTZiZTkyMTJkMjIiLCJpYXQiOjE2NTk2MDMwMDMuMjU5MDIzOTA0ODAwNDE1MDM5MDYyNSwibmJmIjoxNjU5NjAzMDAzLjI1OTAyNzAwNDI0MTk0MzM1OTM3NSwiZXhwIjoxNjkxMTM5MDAzLjI1NzkyOTA4NjY4NTE4MDY2NDA2MjUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.UMDDJuxIwkgK3vYtcfKoRmcn4pj9tq3vBiaf0m2zz7ndkYsLVAWS5o6IXCnYZCwMV93u7tankgRn7Ap8nLs4Cl5vAQevBQlYF8EoU8e267uP0xyJrEfiGzhM6BzpeSQ3FAG-8o0kQQcadMpyceBmDKfpqfXbHmKR2UcGH0dYqoxOS7HbMEAKmdJmhLuau4vwZqRszk0_thCgSV3ingOG5GZx9aGO4heEPau1WKlvIfmhid2mf4ea9Aa7mvzh_zGsAXvzxKP85gcwlw_N0ZvY8yDGEiphEHkrVHCzgUjZKFT6tk_YYHRBDJSIXQ1RLNOVoZGsxQxHf_Au9yB06Ps-9tpH_64bpXf3ubm1gzO7d9mcZpe0I-_uCVRIKZ_nlgmiolBrkPIc31ZClUs5cGcV-UCHJX21kEkCnXKeie4tCwK9Solb0Fqm5n1gmsgNniCj4rsmRFVuplUJsBneCn0EFawcWDEcroITS6I2AyJtCtW8Ycx35jBC0blnRz3j0EcXYcJPTmbXiCzLLn-J3R-fx9v_2BTPLTexTA71BWqQhK_zBNs4qQAcrjBA0BuxabWmlvLNiEVwAi4heikxcd_sB148DYNWCxuwV3op2EvN1ImdDZEVaW9YemIzQSdL53ZEnWsfmIJSsoodE-tHv1zeCPEVSI3DjSpHOeTOl0Vy-c4",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPatients(data);
      });
  }, []);

  return [patients, setPatients, loading];
};

export default usePatient;
