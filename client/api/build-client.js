import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    console.log("**************** window is undefined ****************");
    let svc_name = "ingress-nginx-controller";
    let ingress_nginx = "ingress-nginx";
    return axios.create({
      baseURL: `https://${svc_name}.${ingress_nginx}.svc.cluster.local`,
      withCredentials: true,
      headers: req.headers,
    });
  } else {
    logger.log("**************** window is defined ****************");
    return axios.create({
      baseURL: `https://ticketing.hazi`,
    });
  }
};
