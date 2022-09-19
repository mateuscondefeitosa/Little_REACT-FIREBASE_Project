import { useEffect, useState } from 'react';
import { getDocs, collection} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Post } from './post'

export interface Posts {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
}

export const Home = () => {
    const [postsList, setPostsList] = useState<Posts[] | null>(null);
    const postsRef = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id })) as Posts[]);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return <div>{postsList?.map((post) => <Post post={post}/> )}</div>;
}