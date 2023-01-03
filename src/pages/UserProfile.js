import React from "react";
import Spinner from "../components/Spinner";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase";
import ProfileBlogSection from "../components/ProfileBlogSection";
const UserProfile = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogsData();
  }, []);
  if (loading) {
    return <Spinner />;
  }
  const getBlogsData = async () => {
    setLoading(true);
    const blogRef = collection(db, "blogs");
    const first = query(blogRef, orderBy("title"), limit(4));
    const docSnapshot = await getDocs(first);
    setBlogs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setLoading(false);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="blog-heading text-center py-2 mb-4">
            Blogs by {user.displayName}
          </div>
          {blogs?.map((blog) => (
            //<div className="col-md-6" key={blog.id}>
            <ProfileBlogSection user={user} {...blog} />
            //</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
