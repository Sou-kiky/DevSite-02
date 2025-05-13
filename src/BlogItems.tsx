import { Link } from "react-router-dom";
import blog from "./data-json/nikki.json";

const BlogItems = () => {
    return (
        <div>
            <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blog.map((blog) => (
                    <li key={blog.id} className="">
                        <Link to={`/blog/${blog.id}`}>
                            <img src={blog.img} alt="" />
                        </Link>
                        <h2 className="text-2xl">{blog.title}</h2>
                        <p>{blog.content.substring(0, 100)}...</p>
                        <p className="text-sm">作成日: {blog.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogItems;
