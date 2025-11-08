import { FaMagnifyingGlass } from "react-icons/fa6";

const Searchbar = ({searchInput , setSearchinput}) => {

  return (
    <div className="flex justify-center mt-6 mx-auto px-3 py-2">
   <div className="flex items-center bg-white rounded-lg shadow px-4 py-3 border border-gray-300 w-100 h-12 text-lg lg:w-200 ">
    <FaMagnifyingGlass />
<input 
type="text"
placeholder='Enter paper name'
value={searchInput}
onChange={(e) => setSearchinput(e.target.value)}
className="outline-none text-lg px-4  "
/>

   </div>
   </div>
  )
}

export default Searchbar