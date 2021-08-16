import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {        // defining an interface to store types of people object
  people: {
    name: string
    age: number
    url: string
    note?: string               // note is not required
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([            // gets the types from IState interface
    {
    name: "Greta Thurnberg",
    age: 18,
    url: "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/hnlhpm4wx0cqfamszamk",
    note: '"The moment we decide to fulfill something, we can do anything."'
    },
    {
      name: "Neil Armstrong",
      age: 82,
      url: "https://pbs.twimg.com/profile_images/667177467438755841/lhTRZK0K_400x400.jpg",
      note: '"Shoot for the stars but if you happen to miss shoot for the moon instead."'
      }
  ]);       

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
