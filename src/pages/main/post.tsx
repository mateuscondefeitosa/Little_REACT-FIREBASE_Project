import { Posts } from "./home";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addDoc, getDocs, collection, query, where, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

interface Props {
  post: Posts;
}

interface Like {
  likeId: string;
  userId: string
}


export const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth);

  const [likes, setLikes] = useState<Like[] | null>(null);

  const likesRef = collection(db, "likes");

  const likesDoc = query(likesRef, where("postId", "==", post.id));

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(data.docs.map((doc) => ({userId: doc.data().userId, likeId: doc.id})));
  }


  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesRef, {userId: user?.uid ,postId: post.id});
      if (user) {
        setLikes((prev) => prev ? [...prev, {userId: user?.uid, likeId: newDoc.id}] : [{userId: user.uid, likeId: newDoc.id}]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeLike = async () => {
    try {
      const likeToDeleteQuery = query(likesRef, where("postId", "==", post.id), where("userId", "==", user?.uid));
      const likeToDeleteData = await getDocs(likeToDeleteQuery);

      const deleteLike = doc(db, "likes", likeToDeleteData.docs[0].id);
      await deleteDoc(deleteLike);
      if (user) {
        setLikes((prev) =>prev && prev.filter((like) => like.likeId !== likeToDeleteData.docs[0].id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const hasUserLiked = likes?.find((like) => like.userId === user?.uid)

  
  useEffect(() => {
    getLikes();
  }, []);


  return (
    <Card border="info" style={{ width: "22rem" }} className="mx-4 my-4">
      <Card.Body className="text-start">
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.description}</Card.Text>
        <div className="d-inline-flex">
          <Button variant="light" size="sm" onClick={hasUserLiked ? removeLike : addLike}>
             {hasUserLiked ? <>&#128078;</> : <>&#10084;</>}
          </Button>
          {likes && <p className="text-muted">Likes: {likes?.length}</p>}
        </div>
        <blockquote className="blockquote mb-0 d-inline text-start">
          <footer
            className="blockquote-footer text-end"
            style={{ fontSize: "12px" }}
          >
            @{post.username}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
