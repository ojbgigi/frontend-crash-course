import Item from "./Item"
const List = ({ listData, editData, submitState }) => {

    // 統計未完成的數量
    const pendingCount = listData.reduce((acc, item) => {
        if (item.checked === false) {
            return acc + 1;
        }
        return acc
    }, 0)

    return (
        <>
            <ul className="todo-list">
                {listData.map((item) => {
                    const { id, todotext } = item;
                    return (<Item key={id} id={id} todotext={todotext} editData={editData} submitState={submitState} />)
                })}
            </ul>
            <p className="todo-tip">You have <span className="todo-num">{pendingCount}</span> pending tasks</p></>
    )
}

export default List