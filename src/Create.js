const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a new blog!</h2>
            <form>
            <label>Blog title:</label>
            <input 
            type="text"
            required
             />
             <label>
             Blog body:
             </label>
             <textarea required></textarea>
             <label>Blog Author:</label>
             <select>
                 <option value="arjun">Arjun</option>
                 <option value="appu">Appu</option>
             </select>
             <button>Add blog</button>
            </form>
        </div>
     );
}
 
export default Create;