import { Posts } from './home';
import Card from 'react-bootstrap/Card';

interface Props {
    post: Posts;
}


export const Post = (props: Props) => {
    const { post } = props;
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.description}</Card.Text>
            <blockquote className="blockquote mb-0">
                <footer className="blockquote-footer">
                    @{post.username}
                </footer>
            </blockquote>
        </Card.Body>
    </Card>
    )
}