import { Link, Form, redirect } from 'react-router-dom'; 
import classes from './NewPost.module.css';
import Model from '../Components/Model';

function NewPost(){

    return(
        <Model>
        <Form method='post' className={classes.form}>
            <p>
                <label htmlFor = "body">Text</label>
                <textarea id="body" name = "body" required rows ={3} />
            </p>
            <p>
            <label htmlFor = "name">Your name</label>
            <input type = "text" id = "name" name= "author" required  />
            </p>
            <p className={classes.action}>
                <Link to =".."  type = "button" >
                  Cancel
                </Link>
                <button>Submit</button>
            </p>
        </Form>
        </Model>
    );

}

export default NewPost;

export async function action({request}){
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); 
    // {body : '...', author : '...'}
    console.log(postData);
    await fetch('http://localhost:8080/posts', {
        method:'POST',
        body: JSON.stringify(postData),
        header: {
            'content-type': 'application/json'
        },
     });

     return redirect('/'); //path home-page

}