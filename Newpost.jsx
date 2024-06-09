

const Newpost = ({inputTitle,setinputTitle,inputBody,setinputBody,addpost }) => {

    return(
        <form className="form" onSubmit={(e) => e.preventDefault()}>

            <input
               required
               placeholder="Enter your Title"
               value={inputTitle}
               onChange={(e) => setinputTitle(e.target.value)}></input>

             <input
               required
               placeholder="Enter your body"
               value={inputBody}
               onChange={(e) => setinputBody(e.target.value)}></input>
               
             <button onClick={addpost}>Submit</button>  
        </form>

    )
}

export default Newpost