
const Searchbar = ({searchInput , setSearchinput}) => {

  return (
   <div>
<input 
type="text"
placeholder='Enter paper name'
value={searchInput}
onChange={(e) => setSearchinput(e.target.value)}
/>

   </div>
   
  )
}

export default Searchbar