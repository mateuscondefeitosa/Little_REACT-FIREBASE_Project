import { Posts } from "./home";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface Props {
  post: Posts;
}

export const Post = (props: Props) => {
  const { post } = props;
  return (
    <Card border="info" style={{ width: "22rem" }} className="mx-4 my-4">
      <Card.Body className="text-start">
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.description}</Card.Text>
        <Button variant="light" size="sm">
          {" "}
          Like &#10084;{" "}
        </Button>
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
