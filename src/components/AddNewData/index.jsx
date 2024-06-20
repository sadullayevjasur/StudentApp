import { useState } from "react";
import {v4 as uuidv4 } from "uuid";



function AddNewData({addData, setshowModal}) {
    const [name ,setName]= useState('')
    const [age, setAge] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        let id = 1;
        const obj = {
            id: uuidv4(),
            name: name,
            age: age,
        }
        console.log(obj);
        addData(obj)

        setName("")
        setAge("")
        setshowModal(false)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label >
                    <span>Name</span><br />
                    <input type="text"required onChange={(e)=> setName(e.target.value)} value={name} /><br />
                </label>
                <label >
                    <span>
                        Age
                    </span><br />
                        <input type="text" onChange={(e)=> setAge(e.target.value)} value={age}  />
                </label><br /><br />

                <p>Name: {name}</p>
                <p>Age: {age}</p>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddNewData