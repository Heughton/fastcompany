import React, {useState} from "react";
import api from "../api"

const Users=()=>{
    const [users, setUsers] = useState(api.users.fetchAll())


    const handleDelete = (userId)=>{
        setUsers(users.filter(user=> user._id != userId))
    }

    const getBadgeClasses=()=>{
        let classes = "badge m-2 "
        classes+=users.length===0?"bg-danger":"bg-primary"
        return classes
    }

    const renderPhrase = (number)=>{
        number = users.length

        if (number > 0 ) {
            return number === 1 || number > 4 ? <h1>{number} человек тусанет с тобой сегодня</h1> :
                <h1>{number} человека тусанут с тобой сегодня</h1>
        } else {
            return <h1>никто не тусанет с тобой сегодня</h1>
        }

    }

    return ( users.length !== 0 ?
        <>
            <span className={getBadgeClasses()} >{renderPhrase()}</span>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) =>
                <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.qualities.map(elem => <span className={"badge m-2 bg-" + elem.color}>{elem.name}</span>)}</td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate} / 5</td>
                    <td>
                        <button type="button" className="badge bg-danger btn-sm" onClick={()=> handleDelete(user._id)}>
                            delete
                        </button>
                    </td>
                </tr>

            )}
            </tbody>
        </table>
        </> : <span className={getBadgeClasses()} >{renderPhrase()}</span>
    )
}

export default Users