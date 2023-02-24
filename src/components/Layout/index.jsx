import * as S from "./styles";
import Sidebar from "../../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <S.Layout>
      <Sidebar />
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
};

export default Layout;
