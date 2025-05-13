import { useParams } from "react-router-dom";
import blog from "./data-json/nikki.json";

const BlogContent = () => {
    const { id } = useParams();
    const blogPost = blog.find((post) => post.id === parseInt(id || "", 10));

    if (!blogPost) {
        return <div className="text-red-500">Del Page</div>;
    }

    return (
        <>
            <div className="text-red-500">
                <p className="text-sm">日付: {blogPost.date}</p>
                <h1 className="text-3xl font-bold">{blogPost.title}</h1>
                <img className="mb-10" src={blogPost.img} alt="" />
                <a className="" href={blogPost.url}>
                    URL: {blogPost.url}
                </a>
                <div className="text-base">{blogPost.content}</div>
            </div>
        </>
    );
};

export default BlogContent;
