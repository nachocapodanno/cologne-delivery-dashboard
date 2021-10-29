import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Navbar from "../NavigationBar/index";

const Layout = ({ children }:{children:any}) => {
  const { pathname } = useLocation();
  const withoutLayoutAndFooterPages = ["login"];
  const showComponent = withoutLayoutAndFooterPages.some(
    (page) => !pathname.includes(page)
  );
  return (
    <>
      {showComponent && <Navbar />}
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};
export default Layout;
