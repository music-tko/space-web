// import useFetch from "./useFetch.js";

const Destination = () => {
    // const { id } = useParams();
    // const {data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/" + id)

    return ( 
        <div className="blog-details">
        {isPending && <div> Loading</div>}
        {error && <div>{error}</div>} 
        {blog && 
        <article>
            <h2>{ blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>
                <p>{blog.body}</p>
            </div>
            <button onClick={handleClick}>delete</button>
        </article>}           
      </div>
      
     );
}
 
export default Destination;