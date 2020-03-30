import { useState } from "react";

const SegmentItem = ({ segmentText }) => (
  <div className="max-w-xl border border-gray-400 rounded my-2">
    <div className="m-4 p-2 h-36 overflow-auto bg-gray-400 rounded">
      {segmentText}
    </div>
  </div>
);

export default ({ segments = [] }) => {
  const [idx, setIdx] = useState(0);

  const segment = segments[idx];

  return (
    <div>
      <h1 className="text-2xl mt-6 mb-3 text-purple-400">Segments</h1>

      <div>
        <span className="cursor-pointer text-blue-400" onClick={() => setIdx(Math.max(0, idx - 1))}>Prev</span>
        <span className="mx-3 py-2 px-3 rounded bg-gray-300">
          {idx + 1} / {segments.length}
        </span>
        <span className="cursor-pointer text-blue-400" onClick={() => setIdx(idx + 1)}>Next</span>
      </div>

      <SegmentItem segmentText={segment.segmentText} />
    </div>
  );
};
