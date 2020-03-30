import Link from "next/link";

const FileListNavBtn = ({ offset, children, disabled }) =>
  disabled ? (
    <a className="cursor-not-allowed bg-gray-400 rounded text-white p-2 m-2">
      {children}
    </a>
  ) : (
    <Link href={`/files?offset=${offset}`} as="/files">
      <a className={`bg-gray-500 rounded text-white p-2 m-2`}>{children}</a>
    </Link>
  );

export default ({ files, offset }) => (
  <table className="border-collapse border-2 border-gray-500">
    <thead>
      <tr>
        <th className="border border-gray-400 px-4 py-2 text-gray-800">
          File ID
        </th>
        <th className="border border-gray-400 px-4 py-2 text-gray-800">
          Processing Status
        </th>
      </tr>
    </thead>
    <tbody>
      {files.map(file => {
        return (
          <Link key={file.fileId} href={`/files/${file.fileId}`}>
            <tr className="hover:bg-gray-100 cursor-pointer">
              <td className="border border-gray-400 px-4 py-2">
                {file.fileId}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {file.processingStatus}
              </td>
            </tr>
          </Link>
        );
      })}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="2" className="text-center py-2">
          <FileListNavBtn offset={offset - 5} disabled={offset === 0}>
            Prev
          </FileListNavBtn>
          <FileListNavBtn offset={offset + 5} disabled={files.length < 5}>
            Next
          </FileListNavBtn>
        </td>
      </tr>
    </tfoot>
  </table>
);
