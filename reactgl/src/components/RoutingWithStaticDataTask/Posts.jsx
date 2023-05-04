import PostsData from "./PostsData.json";
import { Table } from "reactstrap";

const Posts = () => {
    const myD = PostsData[0];
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
                    {PostsData.map((data, index) => (
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

export default Posts;