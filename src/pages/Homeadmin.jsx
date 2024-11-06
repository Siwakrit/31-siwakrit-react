import { useState } from "react";
import Layout from "../Layout";
import Button from "../components/Button";



const Homeadmin = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', lastname: '', position: '' });


  const addUser = () => {
    const id = Date.now();
    const newUserData = { ...newUser, id };
    setUsers([...users, newUserData]);
    setNewUser({ name: '', lastname: '', position: '' });

  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Layout>
      <div className="">
        <div className="flex p-20 text-4xl font-bold items-center justify-center">
          <h1>
            Generation Thailand <br /> Home - Admin Sector
          </h1>
        </div>

        <Button />

        <div className="flex gap-2 justify-center">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Lastname"
              value={newUser.lastname}
              onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Position"
              value={newUser.position}
              onChange={(e) => setNewUser({ ...newUser, position: e.target.value })}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <div>
            <button
              onClick={addUser}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>

        <table className="mt-4 w-full bg-white border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Last Name</th>
              <th className="py-2 px-4">Position</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.lastname}</td>
                <td className="py-2 px-4 border">{user.position}</td>
                <td className="py-2 px-4 border">
                  <button onClick={() => deleteUser(user.id)} className="text-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </Layout>
  );
};

export default Homeadmin;
