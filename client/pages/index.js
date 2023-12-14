// import buildClient from "../api/build-client";

const LandingPage = ({currentUser}) => {

  return currentUser ? (
    <h1>Hello, {currentUser.email}!</h1>
  ) : (
    <h1>You are not signed...</h1>
  );
};

export default LandingPage;

// export const getServerSideProps = async (ctx) => {
//   let res = await buildClient(ctx).get("/api/users/currentUser");

//   return {
//     props: res.data,
//   };
// };
