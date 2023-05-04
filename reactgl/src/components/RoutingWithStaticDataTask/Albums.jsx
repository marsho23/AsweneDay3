import albumsData from './albumsData.json';
import {Table} from 'reactstrap';

const Albums = () => {
    const myD = albumsData[0];
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
                    {albumsData.map((data,index)=>(
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

export default Albums;