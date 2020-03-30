import React from "react";
import fetch from "isomorphic-unfetch";
import FilesPage from "../../components/FilesPage";
import FileDetail from "../../components/FileDetail";

const FileDetailPage = props => {
  return (
    <FilesPage>
      <FileDetail {...props} />
    </FilesPage>
  );
};

FileDetailPage.getInitialProps = async ({ req, query }) => {
  const fileId = query.id;

  const resp = await fetch(`http://interview-api.snackable.ai/api/file/details/${fileId}`);
  const json = await resp.json();

  const segmentResp = await fetch(`http://interview-api.snackable.ai/api/file/segments/${fileId}`);
  const segmentJson = await segmentResp.json();

  return { fileId, ...json, segments: segmentJson };
};

export default FileDetailPage;
