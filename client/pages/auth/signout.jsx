import useRequest from "../../hooks/use-request";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { doRequest, errors } = useRequest({
    url: "/api/users/signout",
    method: "POST",
    body: {},
    onSuccess: (res) => {
      router.push("/auth/signin");
    },
  });

  useEffect(() => {
    doRequest();
  }, []);
};
