import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Posts = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const api = await fetch("https://jsonplaceholder.typicode.com/posts");
  //       const data = await api.json();
  //       console.log(data);
  //     };
  //     fetchData();
  //   }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {data.map((post) => (
        <div
          key={post.id}
          className="m-5 mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-6xl"
        >
          <div className="p-8">
            <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
              {post.title}
            </div>
            {/* <p class="mt-1 block text-lg font-medium leading-tight text-black">
              Event Date
            </p> */}
            {/* <p className="mt-2 text-gray-500">{post.title}</p> */}
            <p className="my-5 text-gray-500">{post.body}</p>
            <div className="text-right">
              <Link
                className="mt-5 rounded-md border border-transparent
               bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 
               focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                to={`/postdetail/${post.id}`}
              >
                Ver Detalle
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Posts;
