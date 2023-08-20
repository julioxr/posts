import React from "react";
import Comments from "./Comments";

const getusers = async (id) => {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const getComments = async (id) => {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await res.json();

        const commentsPostsById = data.filter(
            (commentId) => commentId.postId == id
        );
        return commentsPostsById;
    } catch (error) {
        console.log(error);
    }
};

const Article = async ({ post, idPost }) => {
    const user = await getusers(post.userId);
    const postComments = await getComments(idPost);

    return (
        <article className="bg-neutral-200 p-12 mt-8 rounded relative mb-8">
            <h2 className="text-3xl font-semibold mb-4">
                {post.title.toUpperCase()}
            </h2>
            <p>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
            <footer className="bg-neutral-600 gap-4 h-12 absolute left-0 right-0 bottom-0 flex justify-end items-center pr-8">
                <p className="text-white ">
                    <span className="font-semibold">User:</span> {user.username}
                </p>
                <p className="text-white">
                    <span className="font-semibold">Email:</span> {user.email}
                </p>
            </footer>
            <Comments postComments={postComments} />
        </article>
    );
};

export default Article;
