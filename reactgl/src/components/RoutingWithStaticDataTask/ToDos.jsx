import toDosData from "./toDosData.json";
import { Table } from "reactstrap";

const ToDos = () => {
    const myD = toDosData[0];
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
                    {toDosData.map((data, index) => (
                        <tr key={index}>
                            {myKey.map((key) => (
                                <td>{data[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default ToDos;