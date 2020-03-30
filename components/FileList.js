import Link from "next/link";

const FileListNavBtn = ({
  filter,
  offset,
  children,
  disabled,
  color = "bg-gray-500"
}) =>
  disabled ? (
    <a className="cursor-not-allowed bg-gray-400 rounded text-white p-2 m-2">
      {children}
    </a>
  ) : (
    <Link href={{ pathname: "/files", query: { filter, offset } }} as="/files">
      <a className={`${color} rounded text-white p-2 m-2`}>{children}</a>
    </Link>
  );

const FileListFilterBtn = ({ offset, filter }) => (
  <FileListNavBtn offset={offset} filter={filter} color="bg-blue-500">
    {filter}
  </FileListNavBtn>
);

export default ({ files, offset, filter }) => (
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
        <td colSpan="2" className="border border-gray-400 text-center py-2">
          <FileListNavBtn
            offset={offset - 5}
            filter={filter}
            disabled={offset === 0}
          >
            Prev
          </FileListNavBtn>
          <FileListNavBtn offset={offset + 5} filter={filter}>
            Next
          </FileListNavBtn>
        </td>
      </tr>
      <tr>
        <td colSpan="2" className="border border-gray-400 text-center py-2">
          <span>Filter:</span>
          <FileListFilterBtn offset={offset} filter="ALL" />
          <FileListFilterBtn offset={offset} filter="FINISHED" />
          <FileListFilterBtn offset={offset} filter="PROCESSING" />
          <FileListFilterBtn offset={offset} filter="FAILED" />
        </td>
      </tr>
    </tfoot>
  </table>
);
