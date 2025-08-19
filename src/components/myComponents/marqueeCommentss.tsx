import { getAllMarqueeComments } from "@/sanity/lib/products/getMarqueeComments";

const Comments = async () => {
  const data = await getAllMarqueeComments();

  const marqueeData = data?.[0];
  const comments = marqueeData?.items || [];
  const title = marqueeData?.title || "Marquee";

  if (comments.length === 0) {
    return <div className="text-center py-4">No comments available</div>;
  }

  return (
    <div className="w-full bg-black text-white overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {comments.map((comment: string, index: number) => (
          <span key={`1-${index}`} className="mx-8">
            {comment}
          </span>
        ))}
      </div>
      <div className="flex whitespace-nowrap animate-marquee absolute top-0">
        {comments.map((comment: string, index: number) => (
          <span key={`2-${index}`} className="mx-8">
            {comment}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Comments;
