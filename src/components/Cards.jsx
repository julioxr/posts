"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Pagination from "@/components/Pagination";

const Cards = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 10;
    const totalPages = posts.length / postsPerPage;

    const getPosts = async () => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="flex gap-4 flex-wrap justify-center mt-8 items-center">
            {currentPosts.map((post) => {
                return (
                    <Link href={`/posts/${post.id}`} key={post.id}>
                        <div className="bg-neutral-100 w-72 h-60 p-12 rounded cursor-pointer border-neutral-200 border-2 hover:bg-neutral-200 transition-all">
                            <h2 className="text-3xl font-semibold text-center mb-4">
                                Post {post.id}
                            </h2>
                            <h2 className="text-base text-center">
                                {post.title.charAt(0).toUpperCase() +
                                    post.title.slice(1)}
                            </h2>
                        </div>
                    </Link>
                );
            })}
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default Cards;
