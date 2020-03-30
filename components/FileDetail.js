import AudioPlayerView from "./AudioPlayerView";
import RawDataView from "./RawDataView";
import Link from "next/link";

export default ({
  fileId,
  fileName,
  mp3Path,
  originalFilepath,
  seriesTitle
}) => (
  <div>
    {mp3Path && (
      <AudioPlayerView
        seriesTitle={seriesTitle}
        mp3Path={mp3Path}
        originalFilepath={originalFilepath}
      />
    )}
    <RawDataView
      fileId={fileId}
      fileName={fileName}
      seriesTitle={seriesTitle}
      mp3Path={mp3Path}
      originalFilepath={originalFilepath}
    />

    <Link href="/files">
      <a className="text-sm text-blue-600 inline-block mt-5">
        &#171; Back to File List
      </a>
    </Link>
  </div>
);
