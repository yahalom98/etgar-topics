import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import {db} from './firebase';

export default function App() {

  async function addPost() {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "posts"), {
      postName: "Test of Post",
      postValue: "aksdlasjdlasjdlsajkldsaljdl",
      postDate:'25-05-26',
      postAuthor:'Zipi Shavit',
    });
    console.log("Document written with ID: ", docRef.id);
  }



  return (
    <div>
      <button onClick={addPost}>Add</button>
    </div>
  )
}
