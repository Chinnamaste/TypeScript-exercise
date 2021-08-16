import React, { useState } from 'react';
import { IState as Props} from '../App'; 

interface IProps {
    people: Props["people"],                          // defining the people as type Props of people    
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps>= ({people, setPeople}) => {            // deconstructing people and setPeople props to be uset in handleClick function later

    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        notes: ""
        }
    ) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {          // giving the type of e for typescript, HTMLTextAreaElement for textarea input field (othervise doesn't accept the onChange function) + specifying the return of the function to be void (nothing) (no return value is allowed)
        setInput ({
            ...input,                               // input will stay and have the same object values as previously
            [e.target.name] : e.target.value        // the input with the name value: name, age etc. will receive the new input value
        })

    }   

    const handleClick = (): void => {
        if(
            !input.name || !input.age || !input.img
        ) {
        return
    }

    setPeople([
        ...people,                                  // all the people that are already on the list
        { name: input.name,                         // + a brand new object that is set by input
        age: parseInt(input.age),                   // has to be parsed to integer otherwise will be a string and img will not accept type string
        url: input.img,
        note: input.notes   
        }
    ])

    setInput({ 
        name: "",
        age: "",
        img: "",
        notes: ""
    })
}

    return (
        <div className="AddToList"> 
                <input type="text" className="AddToList-input" placeholder="Name" value={input.name} onChange={handleChange} name="name" />
                <input type="number" min="0" className="AddToList-input" placeholder="Age" value={input.age} onChange={handleChange} name="age" />
                <input type="text" className="AddToList-input" placeholder="Image Url" value={input.img} onChange={handleChange} name="img" />
                <textarea className="AddToList-input" placeholder="Notes" value={input.notes} onChange={handleChange} name="notes"/>
                <button className="AddToList-btn" onClick={handleClick}>Add to list</button>
        </div>
    )      
}

export default AddToList;       