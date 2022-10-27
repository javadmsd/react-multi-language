import { useTranslation } from "react-i18next";
import { Link, useLocation, useParams } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, HeartOutlined, GlobalOutlined } from "@ant-design/icons";

function Header() {
  const { locale } = useParams();
  const location = useLocation();
  const { t } = useTranslation();

  const generateLanguageLink = (lang) => {
    const cleanLocation = location.pathname.replace(`/${locale}`, "");
    return `/${lang}${cleanLocation}${location.search}`;
  };

  const enLink = generateLanguageLink("en");
  const faLink = generateLanguageLink("fa");

  return (
    <Menu mode="horizontal" theme="dark" defaultSelectedKeys={["home"]}>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to={`/${locale}`}>{t("Home")}</Link>
      </Menu.Item>

      <Menu.Item key="about" icon={<HeartOutlined />}>
        <Link to={`/${locale}/about`}>{t("About")}</Link>
      </Menu.Item>

      <Menu.SubMenu
        key="languages"
        title={t("Languages")}
        icon={<GlobalOutlined />}
      >
        <Menu.Item key="en">
          <Link to={enLink}>English</Link>
        </Menu.Item>
        <Menu.Item key="fa">
          <Link to={faLink}>فارسی</Link>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}

export default Header;
