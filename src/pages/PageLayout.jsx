import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import TEXTS from "../shared/texts/TEXTS";
import { useRecoilState } from "recoil";
import { languageState } from "../shared/state/atoms";
import Header from "../components/molecules/Header";

const PageLayout = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <>
      <Header></Header>

      <main>
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>TEST FOOTER</footer>
    </>
  );
};

export default PageLayout;
