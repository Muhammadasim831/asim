import React, { useState } from "react";

const App = () => {

  const [fullname, setfullname] = useState({
    fname: '',
    lname: '',
    email:'',
    phone:'',
  });
  



  const inputEvent = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);

    const {value,name} = event.target;
   
    
    setfullname((prevValue)=>{
      console.log(prevValue);


      return {
      ...prevValue,
      [name]:value,

      }


    // if(name==='fname'){
    //   return{
    // fname: value,
    // lname: prevValue.lname,
    // email:prevValue.email,
    // phone:prevValue.phone,
    //   }
    //    }

    //    else if(name==='lname'){
    //     return{
    //       fname: prevValue.fname,
    //       lname: value,
    //       email:prevValue.email,
    //       phone:prevValue.phone,
  
    //     }
    //      }

    //      else if(name==='lname'){
    //       return{
    //         fname: prevValue.fname,
    //         lname: value,
    //         email:prevValue.email,
    //         phone:prevValue.phone,
    
    //       }
    //        }

    //        else if(name==='email'){
    //         return{
    //           fname: prevValue.fname,
    //           lname: prevValue.lname,
    //           email:value,
    //           phone:prevValue.phone,
      
    //         }
    //          }

    //          else if(name==='phone'){
    //           return{
    //             fname: prevValue.fname,
    //             lname: prevValue.lname,
    //             email:prevValue.email,
    //             phone:value,
        
    //           }
    //            }



    })

  };

  const onSubmits = (event) => {
    event.prevebtDefault();
    alert('form sumitted');
  };


return (
  <>
    <form onSubmit={onSubmits}>
      <div>
        <h1>Hello {fullname.fname} {fullname.lname}</h1>
        <p>{fullname.email}</p>
        <p>{fullname.phone}</p>
        


        <input
          type="text"
          Placeholder="Enter your name"
          name="fname"
          onChange={inputEvent}
           value={fullname.fname}
        />
          <br></br>

        <input
          type="text"
          Placeholder="Enter your last name"
          name="lname"
          onChange={inputEvent}
           value={fullname.lname}
        />
          <br></br>
        <input
          type="email"
          Placeholder="Enter your email"
          name="email"
          onChange={inputEvent}
           value={fullname.email}
           
        />
          <br></br>

        <input
          type="number"
          Placeholder="Enter your phone  number"
          name="phone"
          onChange={inputEvent}
           value={fullname.phone}
        />
          <br></br>
 
       
        <button
          type='submit'
          onClick={onSubmits}>
          click me
        </button>
      </div>
    </form>
  </>
);

};



export default App;
