import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { get } from "../../../service/data.service"

export default function CommentComponent (props){

    const token = useSelector((state) => state.auth.token)

    const [driver,setDriver]=useState({})

    const fetchDriver = async ()=>{
        if(token !== ""){
            const responseDriver = await get("user/"+props.comment.idDriver,token)
            setDriver({...responseDriver.data})
        }   
    }

    useEffect(()=>{
        fetchDriver()
    },[])

    return(
        <>
            <div className="commentBorder">
                <div>{driver.firstname} {driver.lastname} </div>
                <div>note : {props.comment.note} /10</div>
                <div>comment : {props.comment.comment}</div>
                <div>Date : {props.comment.date}</div>
            </div>
        </>
    )
}