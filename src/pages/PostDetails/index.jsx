import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchPostData } from "../../actions/data";
import Loading from "../../components/Loading";
import Comment from "../../components/Comment";

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { postData } = useSelector((state) => state.dataReducer);
  // Fetch the post data when this component is first mounted.
  useEffect(() => {
    dispatch(fetchPostData(id));
  }, []);
  console.log(postData);
  return (
    <div className="h-screen w-full px-4 animate-background bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500">
      {postData === null && <Loading />}
      {postData !== null && (
        <div className="blur-none md:w-3/4 relative z-15 w-full h-screen border-2 mx-auto p-4 bg-white rounded-lg">
          <div className="w-full border-2 h-fit md:h-1/6 mb-2 rounded-t-lg px-4 py-2 flex flex-col space-y-2">
            <h1 className="text-xl font-bold text-center">{postData.title}</h1>
            <div className="w-full h-full flex justify-between">
              <p>{postData.points} points</p>
              <Link
                to={postData.url}
                className="block text-indigo-400 group-hover:text-slate-800 transition duration-200"
                target="_blank"
              >
                Read Article →
              </Link>
            </div>
          </div>
          <div className="w-full border-2 h-4/5 md:h-5/6 rounded-b-lg overflow-y-auto overflow-x-hidden flex flex-col space-y-2">
            {postData?.children?.map((child) => (
              <Comment key={child.id} comment={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
