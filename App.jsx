import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, json } from 'react-router-dom';
import Home from './Home';
import Postpage from './Postpage';
import About from './About';
import Newpost from './Newpost';
import Missing from './Missing';
import Headerr from './Headerr';
import Footerr from './Footerr';
import Nav from './Nav';

const App = () => {
  const navigate = useNavigate();
  const [inputTitle, setinputTitle] = useState("");
  const [inputBody, setinputBody] = useState("");
  const [editTitle, seteditTitle] = useState("");
  const [editBody, seteditBody] = useState("");
  const [search, setSearch] = useState("");
  const [searchres , setSearchres] = useState([]) 
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("blog"));
    if (storedItems!=[]){
      setItems(storedItems)
    }
   

    }
  , []);

  



  useEffect(() => {
    const filterdd = items.filter((item) => ((item.title).toLowerCase()).includes(search.toLowerCase()))
    setSearchres(filterdd.reverse())
  }, [search,items])

  const addpost = () => {
    const idd = items.length ? items[items.length - 1].id + 1 : 1;
    const datee = new Date();
    const listt = { id: idd, date: `${datee.getFullYear()}-${datee.getMonth()+1}-${datee.getDate()} , Posted on : ${datee.getHours()}hr : ${datee.getMinutes()+1}min`, title: inputTitle, body: inputBody }
    const arrlist = [...items, listt]
    setItems(arrlist)
    setinputTitle("");
    setinputBody("")
    navigate("/home")
    localStorage.setItem("blog" , JSON.stringify(arrlist))
  }

  const handleChange = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, title: editTitle, body: editBody } : item
    );
    setItems(updatedItems);
    navigate("/home");

    localStorage.setItem("blog" , JSON.stringify(updatedItems))
  };

  const handleDelete = (id) => {
        const updatedItems = items.filter( (item) => item.id != id)
        setItems(updatedItems);
        navigate("/home")
        localStorage.setItem("blog" , JSON.stringify(updatedItems))
  }

  const searchItems = (e) => {
          e.preventDefault();
          

        }


  return (
    <>
      <Headerr title="Blog" />
      <Nav search={search}
        setSearch={setSearch}
        searchItems={searchItems} />
      <Routes>
        <Route path="/home">
          //doubt why send searchres
          <Route index element={<Home items={searchres} />} />
          <Route path=":id" element={<Postpage editTitle={editTitle}
            seteditTitle={seteditTitle}
            editBody={editBody}
            seteditBody={seteditBody}
            items={items}
            handleChange={handleChange}
            handleDelete = {handleDelete} />} />
        </Route>
        <Route path="/newpost" element={<Newpost inputTitle={inputTitle}
          setinputTitle={setinputTitle}
          inputBody={inputBody}
          setinputBody={setinputBody}
          addpost={addpost} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footerr />
    </>
  );
};

export default App;
