import React from "react";
import Layout from "../Layout";
import NoticeBoard from "../../../widgets/FeaturedSlice/NoticeBoard";
import QualificationWidget from "../../../widgets/FeaturedSlice/QualificationWidget";
import CrmTrainingWidget from "../../../widgets/FeaturedSlice/CrmTrainingWidget";

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
