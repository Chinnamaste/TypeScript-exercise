import React from 'react';
import { IState as IProps} from '../App';          // importing IState from App.tsx and naming it as IProps (which is used in List function)

const List = ({ people } : IProps) => {           // getting the props and prop types from IProps, props (people) destructured. Also possible: const List:React.FC<IProps> = () => { ..., then TypeScript knows it's a functional component with types of IProps
    const renderList = (): JSX.Element[] => {     // can be defined for TypeScript as a function that returns a JSX element, then new return () has to be added to be typed correctly
        return people.map((person) => {
            return (
            <li className="List">
                <div className="List-header">
                    <img alt="Thumbnail of person" className="List-img" src={person.url} />
                    <h2>{person.name}</h2>
                </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
            </li>
            )

        })
    }    
    
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List;