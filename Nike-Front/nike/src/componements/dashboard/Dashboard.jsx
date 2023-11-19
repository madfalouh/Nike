import Navbardash from "./Navbardash"
import Sidebar from "./Sidebar"

export default function Dashboard(){
    return (
        <div className="dash">
            <Sidebar />
            <Navbardash />
        </div>
    )
}