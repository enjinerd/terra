import { AppShell } from "@mantine/core";
import Nav from "./Nav";
import Footer from "./Footer";

const links = {
  links: [
    {
      link: "#features",
      label: "Features",
    },
    {
      link: "#faq",
      label: "FAQ",
    },
    {
      link: "#contact-us",
      label: "Contact Us",
    },
  ],
};

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => (
  <AppShell header={<Nav links={links.links} />} footer={<Footer />} padding="md">
    {children}
  </AppShell>
);

export default Layout;
