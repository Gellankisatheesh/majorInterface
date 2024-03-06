 import { useState }from 'react'
 
 
 import './Uploder.css'
 import {MdCloudUpload , MdDelete } from 'react-icons/md'
 import {AiFillFileImage} from 'react-icons/ai'
 
 function Uploder() {
    const[Audio , setAudio] = useState(null)
    const[FileName , setFileName] = useState("No selected file")
   return (
    <main>
        < form action =""
        onClick={()=>document.querySelector(".input-field").click()}
        >
            <input type= "file" accept='audio/*' className='input-field' hidden 
            onChange={({target :{files}}) =>{
                files[0] && setFileName(files[0].name)
                if (files){
                    setAudio(URL.createObjectURL(files[0]))
                }

            }}
            />

    
            {Audio ?
            <img src={Audio} width={150} height={150} alt={FileName} />
            :
            <>
            <MdCloudUpload color = "#1475cf" size={60}/>
            <p>Browse File To Upload</p>
            </>
        }
        </form>
        <section className='Uploaded-row'>
            <AiFillFileImage color='#1475cf' />
            <span className='Upload-content'>
                {FileName}
                <MdDelete
                onClick={()=>{
                    setFileName("No selected file")
                    setAudio(null)
                }}
                />
            </span>
        </section>
    </main>
     
   )
 }
 
 export default Uploder
 