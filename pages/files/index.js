import React from "react";
import fetch from "isomorphic-unfetch";
import FileList from "../../components/FileList";
import FilesPage from "../../components/FilesPage";

const FileListPage = ({ files, offset }) => {
  return (
    <FilesPage>
      <FileList files={files} offset={offset} />
    </FilesPage>
  );
};

FileListPage.getInitialProps = async ({ query }) => {
  const offset = parseInt(query.offset || 0);

  const resp = await fetch(`http://interview-api.snackable.ai/api/file/all?offset=${ offset }`);
  const json = await resp.json();
  return { files: json, offset };
};

export default FileListPage;
