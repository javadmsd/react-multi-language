import { useEffect } from "react";
import { ConfigProvider } from "antd";
import { useTranslation } from "react-i18next";
import { useParams, Outlet } from "react-router-dom";
import { Layout } from "antd";

import CustomHeader from "./Header";

const { Header, Content, Footer } = Layout;

function CustomizeLayout() {
  const { locale } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
      console.log(i18n.language);
    }
  }, [locale, i18n]);

  return (
    <ConfigProvider direction={i18n.language === "fa" ? "rtl" : "ltr"}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <CustomHeader />
        </Header>
        <Content style={{ padding: 50 }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default CustomizeLayout;
