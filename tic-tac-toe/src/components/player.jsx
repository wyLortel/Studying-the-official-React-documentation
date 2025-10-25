import { useState } from "react"

   export default function Player({initialName , symbol ,isActive}){

    const [playerName, setplayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(event){
        setplayerName(event.target.value)
    }

    
    let editableplayerName =  <span className='player-name'>{playerName}</span>

    if (isEditing) {
        editableplayerName = (<input type="text" required value={playerName} onChange={handleChange} />);
        
    }

    function handleEditClick(){
        setIsEditing((editing)=>!editing);
    }
    
    return(
            <li className={isActive ? 'active' : undefined}>
            <span className="player"></span>
            {editableplayerName }
            <span className='player-symbol'>{symbol}</span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : "Edit"}</button>
          </li>
    )
   }