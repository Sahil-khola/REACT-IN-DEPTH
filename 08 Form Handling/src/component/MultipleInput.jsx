import React, { useState } from "react";

const MultipleInput = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });

  function onChangeHandeler(event) {
    const {name,value}=event.target

    setForm({...form,[name]:value})
} 

  function handelSubmit(event) {
    event.preventDefault();
   console.log(form)
   setForm({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
   })
  }
  return (
    <>
      <h1>Multiple Input</h1>
      <form onSubmit={handelSubmit}>
        <div>
          Name :- <input type="text" value={form.name} name='name' onChange={onChangeHandeler} />
        </div>
        <div>
          Email :- <input type="email" value={form.email} name="email" onChange={onChangeHandeler}
        />
        </div>
        <div>
          Password :- <input type="password" value={form.password} name="password" onChange={onChangeHandeler}  />
        </div>
        <div>
          Age :- <input type="number" value={form.age} name="age" onChange={onChangeHandeler} />
        </div>
        <div>
          Phone :- <input type="number" value={form.phone} name="phone" onChange={onChangeHandeler}  />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default MultipleInput;
