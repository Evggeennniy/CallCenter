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
              path: "/operator/dashboard",
              icon: "dashboard",
            },
            {
              label: "Скрипти",
              path: "/operator/scripts/",
              icon: "contact_page",
            },
            {
              label: "LMS / Навчання",
              path: "/operator/lms/",
              icon: "auto_stories",
            },
            {
              label: "Правила роботи",
              path: "/operator/rules/",
              icon: "group_work",
            },
          ],
        },
      ]}
      toggleActive={toggleActive}
    />
  );
}

export default LeftNavigation;
