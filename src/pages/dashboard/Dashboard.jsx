
// bootstrap components
import { Button, Card, Table, Modal } from "react-bootstrap";
// react router link
import {
    Link
} from "react-router-dom";
//hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// import action creators
import { deleteUser, getUsers} from "../../store/actions/user";


const Dashboard = () => {

    const dispatch = useDispatch();
    // from the redux store
    const userList = useSelector((state) => state.userReducer.users);


    //modal show/hide
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // user id to be deleted
    const [userId, setUserId] = useState(null);



    useEffect(() => {
        //get  all users
        dispatch(getUsers());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


        // this function will opn modal and set the current user id to be deleted
        const handleDelete = (userId) => {
            //show modal
            setShow(true);
            //the current user id to be deleted
            setUserId(userId);
        }
    


        //this function will display list of users
    const displayUsers = () =>
        userList.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.city}</td>
                    <td><div className="d-flex justify-content-center">
                        <Link className="btn btn-warning me-2" to={`/edit/${user.id}`}>edit</Link>
                        <Button variant="danger" onClick={() => handleDelete(user.id)}>delete</Button>
                    </div></td>
                </tr>
            )
        });


        // delete the user
    const onDeleteUser = () => {
        dispatch(deleteUser(userId));
        // hide modal after
        setShow(false);
    }


    return (

        <Card>
            {/*modal start  here*/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete </Modal.Title>
                </Modal.Header>
                <Modal.Body>are you sure you want do delete this user ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onDeleteUser}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <Card.Title className="d-flex p-3 justify-content-between align-items-center">
                Users List
                <Link className="btn btn-primary" to="/add">Add Users</Link>
            </Card.Title>
            <Card.Body>
                {/*table start  here*/}
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#Id</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>City</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.length !== 0 ? displayUsers()
                            : (<tr>
                                <td colSpan={6}>please add a user </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default Dashboard




