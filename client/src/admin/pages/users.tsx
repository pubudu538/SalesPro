import React, { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

interface User {
    user: string;
    gender: string;
    role: string;
    status: string;
}

const Users = () => {
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {
        fetch('http://localhost:3000/users', {
            method: 'GET',
        }).then(async function (response) {
            if (response.ok) {
                const responseData = await response.json();
                const usersData = responseData.response;
                setUsers(usersData);
            } else {
                console.log('Error:', response.status);
            }
        });
    }, []);

    const rows = [
        { user: 'John Doe', gender: 'Male', role: 'Admin', status: 'Active' },
        { user: 'Jane Smith', gender: 'Female', role: 'User', status: 'Inactive' },
        { user: 'Alex Johnson', gender: 'Male', role: 'User', status: 'Active' },
        { user: 'Sarah Davis', gender: 'Female', role: 'Admin', status: 'Active' },
    ];

    return (
        <>
            <NavBar />
            <div style={{ overflowY: "scroll", width: "75%", height: "100vh", overflowX: "hidden", position: "absolute", right: "0px", marginTop: "10vh" }}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" sx={{ bgcolor: "#f5f5f5" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bold" }}>User</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Gender</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Role</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users?.map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{user.user}</TableCell>
                                    <TableCell>{user.gender}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>{user.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </>
    );
};

export default Users;
