//remove a song from your list
import { useState } from "react"
import EditForm from "./EditForm"

export default function DeleteForm({deleteData, editData, id, podName}){
    const [toggle, setToggle] = useState(false)
console.log(podName)
    return(
        <div>
            {!toggle ?
            <>
                <h1>{podName}</h1>
                    <button
                        onClick={()=> deleteData(id)}
                        id = 'delete'>
                        Delete
                    </button>
                    <button
                        onClick={()=> setToggle(beforeToggle => !beforeToggle)}
                        id = "edit">
                        Edit
                    </button>
            </>
            :
            <>
                <EditForm
                    podName={podName}
                    id={id}
                    editData={editData}
                    btnTx="submit edits"
                />
                <button
                    onClick={()=> setToggle(beforeToggle => !beforeToggle)}>
                    Close
                </button>
            </>
            }
        </div>
    )
}