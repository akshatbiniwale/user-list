import { Fragment } from 'react';
import UserBox from './UserBox';

const UserDisplay = (props)=> {
    const deleteHandler = (id)=>{
        props.onDelUser(id);
    }

    return (
        <Fragment>
            {props.displayData.map((data)=> {
                return(
                    <UserBox
                        key={data.key}
                        id={data.key}
                        username={data.username}
                        age={data.age}
                        onDelete={deleteHandler}
                    />
                );
            })}
        </Fragment>
    );
}

export default UserDisplay;