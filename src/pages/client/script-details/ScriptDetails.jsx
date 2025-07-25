import React from "react";
import FileUpload from "../../../shared/FileUploader/FileUpload";
import Layout from "../Layout";
import ScriptDetailsSidebar from "../../../widgets/client/script-details/ScriptDetails";

function ScriptDetails(props) {
  return (
    <Layout>
      <ScriptDetailsSidebar />
    </Layout>
  );
}

export default ScriptDetails;
