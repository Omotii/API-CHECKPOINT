import { useState, useEffect } from 'react'
import axios from 'axios';
import './styles.css'

const UserList = () => {

    const [listOfUser, setListOfUser] = useState('');


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => setListOfUser(response.data))
        .catch((error) => console.log(error))
    }, []);

 // the below code map through the user's detail and brings out specific info to display on the UI

    return (
        <>
            <header>
                <h1>This a comprehensive list of our Users</h1>
            </header>
            <main>
                { listOfUser.length > 0 && listOfUser.map( data => (
                    <div className='user-info-container'>
                        <h3 key={data.id}><span>USER -</span> {data.username}</h3>
                        <div className='personal-info-container'>
                        <div className='personal-info'>
                            <p>S/N</p>
                            <p>{data.id}</p>
                        </div>
                        <div className='personal-info'>
                            <p>Full Name</p>
                            <p>{data.name}</p>
                        </div>
                        <div className='personal-info'>
                            <p>Address(city)</p>
                            <p>{data.address.city}</p>
                        </div>
                        <div className='personal-info'>
                            <p>Email</p>
                            <p>{data.email}</p>
                        </div>
                        <div className='personal-info'>
                            <p>Telephone</p>
                            <p>{data.phone}</p>
                        </div>
                        <div className='personal-info'>
                            <p>website</p>
                            <p>{data.website}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </main>
        </>
    )
}

export default UserList;