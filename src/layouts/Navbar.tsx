import { Link } from "react-router-dom";
import { createUser } from "../redux/User/userSlice";
import { useAppDispatch } from "../redux/Hooks";

export default function Navbar() {
    const dispatch = useAppDispatch()

    const handleBecomeAuthor = async () => {
        try {
            await dispatch(createUser())
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    const menu = [
        { name: 'Books', link: '/books' },
        { name: 'Add An Book', link: '/addBook' }
    ]
    return (
        <div className="navbar ">
            <div className="flex-1">
                <Link to="/" className="text-xl text-[#12A9B2]">BooksBikri.com</Link>
            </div>
            <div className="flex-none ">
                <ul className="menu menu-horizontal px-1">
                    {
                        menu.map((menu, index: number) => <li key={index} className="text-[#12A9B2] hover:rounded hover:text-[#FFF] hover:bg-[#12A9B2] focus:text-[#FFF] active:text-[#FFF]" ><Link to={menu.link}>{menu.name}</Link></li>)
                    }
                    <button onClick={handleBecomeAuthor} className="text-[#12A9B2] hover:rounded hover:text-[#FFF] hover:bg-[#12A9B2] focus:text-[#FFF] active:text-[#FFF] px-2" >Become An Author</button>
                </ul>
            </div>
        </div>
    )
}
