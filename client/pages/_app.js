import "bootstrap/dist/css/bootstrap.min.css";
import buildClient from "../api/build-client";
import Header from "../components/header";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Bypass SSL verification
const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} currentUser={currentUser} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const { data } = await buildClient(appContext.ctx).get(
    "/api/users/currentuser"
  );
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
