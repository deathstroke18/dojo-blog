import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Arjun');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};
        setIsPending(true);

       fetch('http://localhost:9000/blogs', {
           method: 'POST',
           headers: {"content-type":"application/json"},
           body: JSON.stringify(blog)
       }).then(() => {
        setIsPending(false);
        //history.go(-1);
        history.push('/');
       })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog!</h2>
            <form
            onSubmit = {handleSubmit}>
            <label>Blog title:</label>
            <input 
            type="text"
            required
            value = {title}
            onChange = {(e) => setTitle(e.target.value)}
             />
             <label>
             Blog body:
             </label>
             <textarea 
             required
             value = {body}
             onChange = { (e) => setBody(e.target.value)}
             ></textarea>
             <label>Blog Author:</label>
             <select
             value = {author}
             onChange = {(e) => setAuthor(e.target.value)}
             >
                 <option value="arjun">Arjun</option>
                 <option value="appu">Appu</option>
             </select>
             {!isPending && <button>Add blog</button>}
             {isPending && <button disabled>Adding button....</button>}
            </form>
        </div>
     );
}
 
export default Create;