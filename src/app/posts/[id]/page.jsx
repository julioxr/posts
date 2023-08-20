import Article from "@/components/Article";

const getPost = async (id) => {
    try {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

const page = async ({ params }) => {
    const post = await getPost(params.id);
    return (
        <section className="container mx-auto">
            <h1 className="text-4xl mt-8 font-bold">Post {params.id}</h1>
            <Article post={post} idPost={params.id} />
        </section>
    );
};

export default page;
