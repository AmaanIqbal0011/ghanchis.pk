import { getAllMarqueeComments } from "@/sanity/lib/products/getMarqueeComments";

const Comments = async () => {
  const data = await getAllMarqueeComments();

  // Safely extract first document
  const marqueeData = data?.[0];
  const comments = marqueeData?.items || [];
  const title = marqueeData?.title || "Marquee";

  if (comments.length === 0) {
    return <div className="text-center py-4">No comments available</div>;
  }

  return (
    <div className="w-full bg-black text-white overflow-hidden">


      <div className="whitespace-nowrap py-3 animate-marquee">
        {comments.map((comment: string, index: number) => (
          <span key={index} className="mx-8">
            {comment}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Comments;
