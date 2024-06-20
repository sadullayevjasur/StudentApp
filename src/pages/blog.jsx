
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { PiStudentFill } from "react-icons/pi";


const blog = () => {
  const [blog, setBlog] = useState([]);
  const [title, setTitle] = useState('');
  const [descript, setDescript] = useState('');
  const [img, setImg] = useState('');
  const [show, setShow] = useState(true);
  const [id , setId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      const dataBase = await getDocs(collection(db, 'blogs'));
      const itemList = dataBase.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,

      }));
      setBlog(itemList);
    }
    getData();
  }, []);
  const database = collection(db, 'blogs');

  const handleCreate = async (e) => {
    e.preventDefault();

    if(title == "" || descript == " " || img == ""){
      return notification.error({ message:"Input bo'sh", description:"Iltimos malumotlarni to'liq kiriting"})
    }

    await addDoc(database, {
      title: title,
      descript: descript,
      img: img,
      id: uuidv4()

    });
    window.location.reload();
  }
  console.log(blog);

  const handleDelete = async (id) => {
    const deletePost = doc(db, 'blogs', id);
    await deleteDoc(deletePost)
    console.log(id);
   window.location.reload();

  }
  const handleEdit = async ( id , title ,descript, img) => {
    setId(id)
    setTitle(title)
    setDescript(descript)
    setImg(img)
    setShow(false)
    
  }
  const handleUpdate = async () => {
   const updateData = doc(db, 'blogs',id);
   await updateDoc(updateData, {title, descript, img})
   window.location.reload();

  }
  let active = document.querySelector('divinput')
 const handleAdd = async () => {
  active.classList.toggle('divinput')
 }
  console.log(descript);
  return (
    <div><h1>{error}</h1>
    <div className="navbar">
      <ul className='navbar-ul'>
        <li><a href=""><PiStudentFill className='icon' />
        </a></li>
        <h2>All Student</h2>
      </ul>
    </div>

      <div className='divinput '>
        <label >
          <span>Ism:</span><br />
          <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='border border-black ' />
        </label>
        <label>
          <span>Malumot:</span><br />
            <input value={descript} onChange={(e) => setDescript(e.target.value)} type="" className='border border-black ' />
        </label>
        <label>
          <span>Rasm:</span><br />
          <input value={img} onChange={(e) => setImg(e.target.value)} type="url" className='border border-black ' />
        </label>
        {show ? <button className='borderbutton m-6 bg-green-600' onClick={handleCreate}>Create</button>:
      <button className='border px-4 py-2 bg-green-600' onClick={handleUpdate}>Update</button>}
      </div>

       

      <section className="section">
        
        {
          blog.map((data) => {
            return (

            <div class="xl:w-1/4 md:w-1/3 p-4">
        <div class="bg-gray-300 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={data.img} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{data.title}</h3>
          <p class="leading-relaxed text-base">{data.descript}</p>
          <button className='border1 px-4 py-2 mt-2 bg-blue-600' onClick={() => handleEdit(data.id ,data.title, data.descript, data.img)}>Edit</button>
          <button className='border2 px-4 py-2 mt-2 bg-red-600' onClick={() => handleDelete(data.id)}>Delete</button>

        </div>
      </div>


            )
          })
        }
      </section>
    </div>

    

  )
}



export default blog




{/* <div className="container  w-1/2 ">
                      <img className="" src={data.img} />
                        <h2 className="tracking-widest "><b className='textName'>Name:</b>{data.title}</h2>
                        <p className="leading-relaxed"> <b>Malumot:</b> <br />{data.descript}</p>

                      
                      <button className='border px-4 py-2 mt-2 bg-blue-600' onClick={() => handleEdit(data.id ,data.title, data.descript, data.img)}>Edit</button>
                      
                      <button className='border px-4 py-2 mt-2 bg-red-600' onClick={() => handleDelete(data.id)}>Delete</button>
                    </div>
                     */}