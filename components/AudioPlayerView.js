export default ({ seriesTitle, mp3Path, originalFilepath }) => (
  <>
    <h1 className="text-3xl text-purple-400">{seriesTitle}</h1>

    <audio className="w-full my-5" controls>
      <source src={mp3Path} type="audio/mp3"></source>
    </audio>

    {originalFilepath && (
      <a href={originalFilepath} className={`block uppercase text-blue-400`}>
        Play Full Episode
      </a>
    )}
  </>
);
