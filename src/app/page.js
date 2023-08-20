import Card from "@/components/Card";

const getPosts = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default async function Home() {
    const posts = await getPosts();
    return (
        <section className="container mx-auto">
            <h1 className="text-4xl mt-8 font-bold">Elije un Posts</h1>
            <section className="flex gap-4 flex-wrap justify-center mt-8 items-center">
                {posts.map((post) => {
                    return <Card key={post.id} post={post} />;
                })}
            </section>
        </section>
    );
}
