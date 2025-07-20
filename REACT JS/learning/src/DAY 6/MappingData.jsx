import React from 'react'

function MappingData() {
    const UserData = [
        {
            name: "Raghav",
            email: "Test@test.com"
        },
        {
            name: "Ravi",
            email: "Ravi@test.com"
        },
        {
            name: "Ajay",
            email: "Ajay@test.com"
        }
    ]
    return (
        <div>
            <table border="1px">
                <thead>
                    {
                        <tr>
                            {Object.keys(UserData[0]).map((key) => (
                                <td>{key}</td>
                            ))}
                        </tr>

                    }
                </thead>
                <tbody>
                    {
                        UserData.map((user) => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MappingData
