import commentsData from './commentsData.json';
import {Table} from 'reactstrap';

const Comments = () => {
    const myD = commentsData[0];
    const myKey = Object.keys(myD);
    return (
        <>
            <Table boredered striped variant="dark">
                <thead>
                    <tr>
                        {myKey.map((key)=>(
                            <th>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {commentsData.map((data,index)=>(
                        <tr key={index}>
                            {myKey.map((key)=>(
                                <td>{data[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Comments;