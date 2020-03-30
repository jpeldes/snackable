import React from "react";
import fetch from "isomorphic-unfetch";
import FileList from "../../components/FileList";
import FilesPage from "../../components/FilesPage";

const FileListPage = props => {
  return (
    <FilesPage>
      <FileList {...props} />
    </FilesPage>
  );
};

FileListPage.getInitialProps = async ({ query }) => {
  const offset = parseInt(query.offset || 0);
  const filter = query.filter || "ALL";

  const resp = await fetch(`http://interview-api.snackable.ai/api/file/all?offset=${offset}`);
  const json = await resp.json();

  let files = json;
  if (filter !== "ALL") {
    files = files.filter(item => item.processingStatus === filter);
  }

  const canSyncMore = json.length === 5;

  return { files, offset, filter, canSyncMore };
};

export default FileListPage;
