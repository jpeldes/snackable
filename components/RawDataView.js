const Row = ({ children }) => (
  <div className={`my-2 text-gray-500`}>{children}</div>
);

const ReadOnlyInput = ({ value }) => (
  <input
    readOnly
    value={value}
    placeholder="N/A"
    className="border border-gray-400 px-2"
    onClick={event => event.target.select()}
  />
);

export default ({
  seriesTitle,
  fileId,
  fileName,
  mp3Path,
  originalFilepath
}) => (
  <div>
    <Row faded>Series title: {seriesTitle || "N/A"}</Row>
    <Row faded>File name: {fileName}</Row>
    <Row faded>File ID: {fileId}</Row>
    <Row faded>
      MP3 path: <ReadOnlyInput value={mp3Path} />
    </Row>
    <Row faded>
      Original path: <ReadOnlyInput value={originalFilepath} />
    </Row>
  </div>
);
