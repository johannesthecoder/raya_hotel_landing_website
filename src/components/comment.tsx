type CommentParams = {
  comment: string;
  commenter: string;
  source: string;
};

export default function Comment({ comments }: { comments: CommentParams[] }) {
  return (
    <div className="flex flex-col gap-9 justify-center items-center">
      <h2 className="font-extrabold text-4xl">Comments</h2>
      <div className="flex gap-9 flex-wrap items-start justify-center">
        {comments.map((comment) => (
          <div
            className="z_rounded_xl w-96 p-6 border border-purple-200 text-purple-800
         shadow-lg shadow-purple-200"
          >
            {comment.comment}
            <div className="mt-4 p-3 flex justify-between bg-purple-100 rounded-full">
              <span className="italic text-sm font-bold">
                By <span className=" font-normal">{comment.commenter}</span>
              </span>
              <span className="italic text-sm font-bold">
                @ <span className=" font-normal">{comment.source}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
