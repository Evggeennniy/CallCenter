import React from "react";
import LeftSidebarMenu from "../../../shared/Layout/LeftSidebarMenu";

function LeftNavigation({ toggleActive }) {
  return (
    <LeftSidebarMenu
      menuSections={[
        {
          title: "Сторінки",
          items: [
            {
              label: "Дашборд",
              path: "/client/dashboard/",
              icon: "dashboard",
            },
            {
              label: "Скрипти",
              path: "/client/scripts/",
              icon: "contact_page",
            },
            {
              label: "FAQ",
              path: "/client/faq/",
              icon: "auto_stories",
            },
          ],
        },
      ]}
      toggleActive={toggleActive}
    />
  );
}

export default LeftNavigation;
