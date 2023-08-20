"use client";
import { useState } from "react";

const Comments = ({ postComments }) => {
    const [commentsVisible, setCommentsVisible] = useState(false);

    const showComments = () => {
        setCommentsVisible(!commentsVisible);
    };

    return (
        <div className="mt-8 flex flex-col justify-center cursor-pointer ">
            <button
                onClick={showComments}
                className="text-black underline pb-4"
            >
                Ver comentarios +
            </button>
            <div
                className={`transition-all pb-4 flex flex-col gap-4 rounded ${
                    commentsVisible ? "opacity-100 h-auto" : "opacity-0 h-0"
                }`}
            >
                {postComments.map((comment) => {
                    return (
                        <div className="bg-neutral-100 flex flex-col gap-4 p-4">
                            <div>
                                <p className="pb-1 text-lg">Comentario:</p>
                                <p className="italic">
                                    {comment.body.charAt(0).toUpperCase() +
                                        comment.body.slice(1)}
                                </p>
                            </div>
                            <h3 className="self-end underline underline-offset-2">
                                Email: {comment.email}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Comments;
