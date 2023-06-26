import { useState, useEffect, useRef } from "react"
import Edit from "./components/Edit"
import List from "./components/List"
import "./index.css"
import { API_GET_DATA } from "../../global/constants"

//打API取資料
const fetchData = async (setData) => {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json();
    setData(data)
}

//打API將資料上去
const fetchSetData = async (data) => {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ data })
    })

}

const Home = () => {

    const [data, setData] = useState([])
    const submitState = useRef(false) //用usrRef預設false讓useEffect初次渲染不要更新資料

    useEffect(() => {
        if (!submitState.current) {
            return
            //初次渲染先直接跳走不會執行下面的更新
        }
        fetchSetData(data)
            .then(data => submitState.current = false)//資料更新後，再讓狀態回到初始值
    }, [data]) //綁定data，data有更新才會執行裡面的function

    useEffect(() => {
        fetchData(setData) //初始化渲染，先把api資料取出
    }, [])
    return <>
        <div className="wrap">
            <div className="row todo">
                <div className="todo-wrap">
                    <Edit addData={setData} submitState={submitState} />
                    <List listData={data} editData={setData} submitState={submitState} />
                </div>
            </div>
        </div>

    </>
}

export default Home