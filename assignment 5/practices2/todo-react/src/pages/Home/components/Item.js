const Item = ({ id, todotext, editData, submitState }) => {
    const handleDelete = () => {
        submitState.current = true  //執行新增動作前，讓狀態為true才會讓useEffect內的function執行
        editData((prev) => {
            return prev.filter(item => item.id !== id)
        })
    }

    const handleChecked = (e) => {
        submitState.current = true  //執行新增動作前，讓狀態為true才會讓useEffect內的function執行
        editData((prev) => {
            return prev.map(item => {
                if (item.id === id) {
                    return { ...item, checked: e.target.checked }
                }
                return item;
            })
        })
    }


    return (
        <li><input type="checkbox" onChange={handleChecked} /><span>{todotext}</span><button onClick={handleDelete}>X</button></li>
    )
}

export default Item