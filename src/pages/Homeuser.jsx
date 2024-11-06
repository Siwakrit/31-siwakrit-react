    import Layout from "../Layout";
    import Button from "../components/Button";

    const Homeuser = () => {

        const mockData = [
            {
                id: 1,
                name: " ",
                lastName: " ",
                position: " ",
                isAdmin: true
            },
            {
                id: 2,
                name: " ",
                lastName: " ",
                position: " ",
                isAdmin: true
            },
            {
                id: 3,
                name: " ",
                lastName: " ",
                position: " ",
                isAdmin: true
            },
        ]
    
    return (
        <Layout>
        <div className="flex p-20 text-4xl font-bold items-center justify-center">
            <h1>Generation Thailand <br /> Home - User Sector</h1>
        </div>

        <Button />

        <table className="mt-4 w-full bg-purple-300 border border-gray-300 shadow-md">
            <thead>
            <tr className="bg-pink-500">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Last Name</th>
                <th className="py-2 px-4">Position</th>
            </tr>
            </thead>

            <tbody>
            {mockData.map((user) => (
                <tr key={user.id}>
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.lastname}</td>
                <td className="py-2 px-4 border">{user.position}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </Layout>
    );
    };

    export default Homeuser;
