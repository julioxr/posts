import Link from "next/link";
const Card = ({ post }) => {
    return (
        <Link href={`/posts/${post.id}`}>
            <div
                key={post.id}
                className="bg-neutral-100 w-72 h-60 p-12 rounded cursor-pointer border-neutral-200 border-2 hover:bg-neutral-200 transition-all"
            >
                <h2 className="text-3xl font-semibold text-center mb-4">
                    Post {post.id}
                </h2>
                <h2 className="text-base text-center">
                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </h2>
            </div>
        </Link>
    );
};

export default Card;
