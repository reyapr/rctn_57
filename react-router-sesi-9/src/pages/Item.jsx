import { useParams } from "react-router-dom";
import items from '../data'

export default function Item() {
    const params = useParams()
    const selectedItem = items.find(item => item.id == params.id)
    
    return (
        <div>
            {
                selectedItem &&
                    <>
                        <h3>{selectedItem.name}</h3>
                        <p>Power: {selectedItem.power}</p>
                    </>
                   
            }
        </div>
    )
}