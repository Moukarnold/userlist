import React, { useState } from "react";
import UsersInput from "./components/UsersInput";
import Affichage from "./components/Affichage";
import  "./index.css";


function App(){
   const [ contacts , setContacts] = useState([]);
    const [ isAffichageVisible, setIsAffichageVisible] = useState(false);

  function handleContactData(newContact){
   setContacts((prevContacts)=>{
      setIsAffichageVisible(true)
      return [...prevContacts, newContact]
     
   });

  }



return ( <div>
    <UsersInput onTransfert={handleContactData}/>
{isAffichageVisible && <Affichage contactData={contacts} />}
       
      </div>
         )
    

}
export default App;