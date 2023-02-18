import React, { useState, useCallback, useEffect } from "react";
import './home.css'
import Search from "./search";


const text = ['Game night?', 'Hungry?', 'Cooking gone wrong?']

function Home() {

  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * text.length);
    setnewName(text[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle])
  
  return (
    <div className="wrap">
      <h1 className="text">{newName}</h1>
      <section className="order">
        Order from the best restaurants from your location
      </section>
      <div className="field">
        <Search/>
      </div>
    </div>

  )

}

export default Home