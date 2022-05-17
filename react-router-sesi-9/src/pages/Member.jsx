import { useParams } from "react-router-dom";

export default function Member() {
    const params = useParams()
    
    return (
        <div>
            <h3>{params.userName}</h3>
            <p>hi this is {params.userName}</p>
        </div>
    )
}