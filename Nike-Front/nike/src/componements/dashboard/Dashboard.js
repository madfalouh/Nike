import Navbardash from "./navbardash";
import Sidebar from "./sidebar";

function Dashboard(){
    return (
        <div className="dash">
            <Sidebar />
            <Navbardash />
        </div>
    )
}