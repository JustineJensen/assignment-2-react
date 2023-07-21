import UserProvider from "./UserContext";

const AppContent = (props) => {
  return <UserProvider>{props.children}</UserProvider>;
};

export default AppContent;
