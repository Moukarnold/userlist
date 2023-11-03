import React, { useState } from "react";
import CardError from  "./CardError";

function UsersInput(props){
  const [ contact , setContact] = useState({
       userName: "",
       age:""
  
});
 const [ contactError, setContactError] = useState({
       userName: "",
       age:"" 
 });

 const [isCardErrorVisible, setIsCardErrorVisible] = useState(false);


 function handleSubmit(event){
   event.preventDefault();
      const { userName, age}= contact;
     
       let userNameError= "";
       let ageError= "";

       if( userName.trim()=== ""){
              userNameError = "  please enter ein name  ";
       }

  if(age.trim()=== ""){
       ageError= " please enter the right age  "
  } else if (age.trim() <1){
       ageError= " the age can not be <0  "

  }

  setContactError({
       userName: userNameError,
       age:ageError
  });


if ( !userNameError && !ageError){
       props.onTransfert(contact);
              setContact({userName: "", age: "" })

} else {
       setIsCardErrorVisible(true);
}



       }
      
function handleChange(event){
  const { name , value} = event.target;
setContact((prevInput)=>({
    ...prevInput,
    [name]: value
}));

setContactError((prevError)=>({
   ...prevError,
     [name]: ""
}));

}


return (

<div className="container"> 
       <form onSubmit= {handleSubmit}>
         <p> Username</p>
        <input name= "userName" onChange = {handleChange} type="text" value={contact.userName}/>
            

         <p> Age (Years)</p>
         <input name= "age" onChange = {handleChange}type="number" value={contact.age}/>

        <br />
        {/* {contactError.userName || contactError.age ? <CardError errorTextName={contactError.userName} errorTextAge={contactError.age}  onClose={() => setIsCardErrorVisible(false)}/> : null} */}
        
        <button  type="submit">   Add User    </button>
        {isCardErrorVisible && ( <CardError
            errorTextName={contactError.userName}
            errorTextAge={contactError.age}
            onClose={() => setIsCardErrorVisible(false)}
          />)}
       </form>

</div>
)
    
};

export default UsersInput;
