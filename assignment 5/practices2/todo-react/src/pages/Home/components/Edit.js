import { useState } from "react"
import { v4 } from "uuid"

const Edit = ({ addData, submitState }) => {
    const [todotext, setTodotext] = useState("")


    const handleAdd = () => {
        submitState.current = true //執行新增動作前，讓狀態為true才會讓useEffect內的function執行
        addData((prevData) => {
            return [...prevData, { id: v4(), todotext, checked: false }]
        })
        setTodotext("");
    }


    return (
        <>
            <h4>Todo App</h4>
            <div className="todo-control">
                <input className="todo-input" type="text" placeholder="Add your new todo" value={todotext} onChange={(e) => setTodotext(e.target.value)} />
                <button className="add-btn" onClick={handleAdd}><svg width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg></button>
            </div>
        </>
    )
}

export default Edit