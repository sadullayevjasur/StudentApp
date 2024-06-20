import  './style.modal.css'
import {IoMdCloseCircle} from "react-icons/io";
function Modal({setshowModal, children}) {
    const closeModal = () => {
        setshowModal(false)
    }
  return (
    <div className="modal">
        <div className="modal__content">
        <IoMdCloseCircle onClick={closeModal} className='modal__close'/>
        <section>
            {children}
        </section>
        </div>
    </div>    
  )
}

export default Modal