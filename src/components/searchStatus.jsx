import React from "react";


const SearchStatus = ({length})=> {
    const getBadgeClasses=()=>{
        let classes = "badge m-2 "
        classes+= !length?"bg-danger":"bg-primary"
        return classes
    }
    if (!length) {
        return <h1 className={getBadgeClasses()}>Никто не тусанет с тобой сегодня</h1>
    } else
        if ((length===1 || length%10 === 1 && length > 20) || (length > 4 && length < 15)) {
            return <h1 className={getBadgeClasses()}>{length} человек тусанет с тобой сегодня</h1>
        } else {
        return <h1 className={getBadgeClasses()}>{length} человека тусанет с тобой сегодня</h1>
        }
}

export default SearchStatus