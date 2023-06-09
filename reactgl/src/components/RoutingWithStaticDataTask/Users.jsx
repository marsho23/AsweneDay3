import usersData from "./usersData.json";
import { Table } from "reactstrap";

const Users = () => {
    const myD = usersData[0];
    const myKey = Object.keys(myD);
    return (
        <>
            <Table bordered striped variant="dark">
                <thead>
                    <tr>
                        {myKey.map((key) => (
                            <th>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((data, index) => (
                        <tr key={index}>
                            {myKey.map((key) => (
                                <td>{typeof data[key]==="object"? JSON.stringify(data[key]):data[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Users;