import AudioPlayerView from "./AudioPlayerView";
import RawDataView from "./RawDataView";
import FileSegmentView from "./FileSegmentView";
import Link from "next/link";

export default ({
  fileId,
  fileName,
  mp3Path,
  originalFilepath,
  seriesTitle,
  segments
}) => (
  <div>
    {mp3Path && (
      <AudioPlayerView
        seriesTitle={seriesTitle}
        mp3Path={mp3Path}
        originalFilepath={originalFilepath}
      />
    )}

    {segments && segments.length > 0 && <FileSegmentView segments={segments} />}

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
