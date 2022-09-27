import SearchInput from "./SearchInput";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchLists from "./SearchLists";
const Search = () => {
    const [searchLists, setSearchLists ] = useState([]);
    const lists = useSelector(state=>state.bloglists.lists);
    const onTextChange = (text) => {
        if(text === ""){
            setSearchLists([]);
        }else {
            setSearchLists(lists.filter(list=> list.desc.includes(text)));
        } 
    }
    return (
        <div className="searchPage">
            <SearchInput onTextChange={onTextChange} />
            <SearchLists searchLists={searchLists}  />
        </div>
    )
}
export default Search;