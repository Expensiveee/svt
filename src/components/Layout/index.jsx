import * as S from "./styles";
import Sidebar from "../../components/Sidebar";

export default function Layout({ categories, children }) {
  return (
    <S.Layout>
      <Sidebar categories={categories} />
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
}