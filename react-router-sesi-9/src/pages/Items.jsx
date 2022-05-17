import { Link, Outlet, useNavigate } from 'react-router-dom'
import items from '../data'

function ItemRow({ item }) {
    const navigate = useNavigate()
    return (
        <tr>
            <td>{item.name}</td>
            <td>
                <button onClick={() => navigate(`${item.id}`)}>Show Detail</button>
            </td>
        </tr>
    )
}

export default function Items() {
    return (
        <div>
            <h1>Items</h1>
            <p>Select an item to be shown</p>
            <table>
               <tr>
                   <th>Item</th>
                   <th>Action</th>
               </tr>
                {items.map(item => (
                    <ItemRow item={item}/>
                ))}
            </table>
            
            <Outlet/>
        </div>
    )
}