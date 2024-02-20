import {useLoaderData} from 'react-router-dom';
import Post from './Post';
import classes from './PostsList.module.css';


function PostsList(){
   
    const posts = useLoaderData();
    // const [isFetching, setIsFetching] = useState(false);

    // useEffect(() => {
    //     async function fetchPosts(){
    //         setIsFetching(true);
           
    //         setPosts(resData.posts);
    //         setIsFetching(false);
    //     }
    //     fetchPosts();
    // }, []);

 
    return(
        <>
        {posts.length >0 && ( 
        <ul className= {classes.posts} >
          {posts.map((post) => (
          <Post  
           key= {post.id} 
           id= {post.id}
           author={post.author}
           body= {post.body}/>
          ))}
        </ul>
        )}
        { posts.length === 0 && ( 
            <div style = {{textAlign: 'center' , color : 'white'}}>
                <h2>No Post yet.</h2>
                <p>Start Posting!</p>
            </div>
        )}
        </>
    );
}

export default PostsList;