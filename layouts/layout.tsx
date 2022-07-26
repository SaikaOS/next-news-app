import { FC, ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

type TypeOfChildren = {
    children?: ReactNode | undefined;
}

const Layout:FC<TypeOfChildren> = ({children}) => {
  return (
    <div className="min-h-screen max-w-6xl my-0 mx-auto flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
