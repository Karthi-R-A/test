
import React from 'react';
import Child from './Child';
import { useState } from "react";

export default function Parent() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [data, setData] = useState('');

  const submit = () => {
    const val= 
      {
      nameValue: name,
      phoneValue: phone
      }
    setData(val)
  }


  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <button onClick={submit}>submit</button>
      {data !== null ? (
        <Child parentData={data} />
      ) : <h1>Data is Loading</h1>}
    </div>
  )
}
// class Parent extends React.Component{
//   constructor(props){
//       super(props);
//       this.state = {
//           name: null,
//           phone: null,
//           data: null,
//       }
//   }

//   // handleCallback = (childData) =>{
//   //     this.setState({data: childData})
//   // }
  // submit = () => {
  //   const { name, phone } = this.state;
  //   const val = {
  //     nameValue: name,
  //     phoneValue: phone,
  //   }
  //   this.setState({ data: val })
  // }

//   render(){
//       const { name, phone, data } = this.state;
//       return(
          // <div>
          //     <input type="text" value={name} onChange={(e) => this.setState({ name: e.target.value})} />
          //     <input type="text" value={phone} onChange={(e) => this.setState({ phone: e.target.value})} />
          //     <button onClick={() => this.submit()}>submit</button>
          //   {data !== null ?(
          //     <Child parentData={data} />
          //   ) : <h1>Data is Loading</h1>

          //   }
          // </div>
//       )
//   }
// }


// export default Parent;