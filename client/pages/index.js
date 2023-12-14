process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Bypass SSL verification
import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log({ currentUser });

  return <h1>Hello, {currentUser?.email ?? "user"}</h1>;
};

export default LandingPage;

export const getServerSideProps = async (ctx) => {
  let res = await buildClient(ctx).get("/api/users/currentUser");

  return {
    props: res.data,
  };
};
