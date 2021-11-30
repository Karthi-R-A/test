import React from 'react';

class Child extends React.Component{
  
   
    render(){
        const {nameValue,phoneValue}=this.props.parentData;
        
        return(
            
        <div>
           <h1>{nameValue}</h1>
           <h1>{phoneValue}</h1>
       </div>
        )
    }
  }

  export default Child;



