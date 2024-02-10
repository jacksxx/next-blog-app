import Image from "next/image";
import { Post } from "@/types/Post";

const Card = (post: Post) => {
  return (
    <div className="m-2 rounded-lg border-[1px] border-black shadow-sm shadow-black ">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          alt={post.title}
          src={post.image}
          width={500}
          height={600}
          className="h-full w-full max-h-[350px] sm:max-h-[200px]"
        />
      </div>
      <div className="m-2 flex flex-col">
        <h1 className="textH1">{post.title}</h1>
        <h2 className="textP italic">{post.description}</h2>
        <p className="textP text-[10px]">
          #
          {post.tags
            .split(" ")
            .map((tag) => tag.trim().toLowerCase())
            .join("#")}
        </p>
        <p className="text-[15px] italic text-end">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Card;
