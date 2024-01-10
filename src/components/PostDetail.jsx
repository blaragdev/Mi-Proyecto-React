import { useFetch } from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

const PostDetail = () => {
  const params = useParams();
  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div
        key={data.id}
        className="m-5 mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-6xl"
      >
        <div className="p-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            {data.title}
          </div>
          <p className="my-5 text-gray-500">{data.body}</p>
          <div className=" text-center">
            <Link
              className="rounded-md border border-transparent
           bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              to={`/posts`}
            >
              Volver
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetail;
