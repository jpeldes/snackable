import Link from "next/link";

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
          <Link href={`/files?offset=${offset - 5}`} as="/files">
            <a className="bg-gray-500 rounded text-white p-2 m-2">Prev</a>
          </Link>
          <Link href={`/files?offset=${offset + 5}`} as="/files">
            <a className="bg-gray-500 rounded text-white p-2 m-2">Next</a>
          </Link>
        </td>
      </tr>
    </tfoot>
  </table>
);
