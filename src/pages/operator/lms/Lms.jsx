import React from "react";
import Layout from "../Layout";
import NoticeBoard from "../lms/components/NoticeBoard";
import QualificationWidget from "../lms/components/QualificationWidget";
import CrmTrainingWidget from "../lms/components/CrmTrainingWidget";

function Lms() {
  return (
    <Layout>
      <NoticeBoard/>
      <QualificationWidget />
      <CrmTrainingWidget />
    </Layout>
  );
}

export default Lms;
