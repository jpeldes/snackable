import { useState } from "react";

const toHHMMSS = (seconds) => {
  var sec_num = parseInt(seconds, 10);
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds;
}

const SegmentItem = ({ segmentText, time }) => (
  <div className="max-w-xl border border-gray-400 rounded my-2">
    <div className="mt-2 px-5 text-gray-600">Starting from { time }</div>
    <div className="m-4 p-2 h-36 overflow-auto bg-gray-300 rounded">
      {segmentText}
    </div>
  </div>
);

export default ({ segments = [] }) => {
  const [idx, setIdx] = useState(0);

  const segment = segments[idx];

  

  return (
    <div>
      <h1 className="text-2xl my-6 text-purple-400">Segments</h1>

      <div className="block mb-4">
        <span className="cursor-pointer text-blue-400" onClick={() => setIdx(Math.max(0, idx - 1))}>Prev</span>
        <span className="mx-3 py-2 px-3 rounded bg-gray-300">
          {idx + 1} / {segments.length}
        </span>
        <span className="cursor-pointer text-blue-400" onClick={() => setIdx(idx + 1)}>Next</span>
      </div>

      <SegmentItem segmentText={segment.segmentText} time={toHHMMSS(segment.startTime / 1000)} />
    </div>
  );
};
