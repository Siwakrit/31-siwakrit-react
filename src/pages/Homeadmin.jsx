import { useState } from "react";
import Layout from "../Layout";
import Button from "../components/Button";



const Homeadmin = () => {
  // กำหนด state 'users' สำหรับเก็บข้อมูลผู้ใช้ในระบบ และ 'newUser' สำหรับเก็บข้อมูลของผู้ใช้ใหม่ที่กรอกเข้ามา
  const [users, setUsers] = useState([]);  // users คืออาเรย์ที่จะเก็บข้อมูลผู้ใช้ทั้งหมด
  const [newUser, setNewUser] = useState({ name: '', lastname: '', position: '' });  // newUser เก็บข้อมูลผู้ใช้ใหม่ที่ต้องการเพิ่ม

  // ฟังก์ชัน addUser สำหรับเพิ่มผู้ใช้ใหม่
  const addUser = () => {
    // สร้าง id ที่เป็นเวลาปัจจุบัน (จาก Date.now()) เพื่อให้ผู้ใช้แต่ละคนมี id ที่ไม่ซ้ำกัน
    const id = Date.now();

    // สร้างข้อมูลผู้ใช้ใหม่ โดยใช้การคัดลอกข้อมูลจาก 'newUser' และเพิ่ม 'id' ลงไป
    const newUserData = { ...newUser, id };  // spread operator ใช้คัดลอกค่าจาก newUser และเพิ่ม id

    // อัปเดต state 'users' ด้วยการเพิ่มข้อมูลผู้ใช้ใหม่ลงในอาเรย์
    setUsers([...users, newUserData]);  // ใช้ spread operator เพื่อเพิ่ม newUserData เข้าไปใน users เดิม

    // รีเซ็ตค่าใน 'newUser' หลังจากเพิ่มข้อมูลผู้ใช้ใหม่เสร็จ เพื่อให้ฟอร์มว่าง
    setNewUser({ name: '', lastname: '', position: '' });  // รีเซ็ตฟอร์มให้กลับมาว่างหลังจากการบันทึก
  };

  // ฟังก์ชัน deleteUser สำหรับลบผู้ใช้
  const deleteUser = (id) => {
    // ลบผู้ใช้จากอาเรย์ 'users' โดยกรองข้อมูลที่ไม่ตรงกับ id ที่ต้องการลบ
    setUsers(users.filter((user) => user.id !== id));  // ใช้ฟังก์ชัน filter เพื่อกรองผู้ใช้ที่ไม่ตรงกับ id ที่ต้องการลบ
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
              value={newUser.name} // กำหนดค่า value ของ input ให้ตรงกับค่าใน state 'newUser.name', เมื่อผู้ใช้กรอกข้อมูล ค่าใน state จะถูกอัปเดตตาม
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}// เมื่อผู้ใช้กรอกข้อมูล ฟังก์ชัน onChange จะถูกเรียก
              // ใช้ spread operator เพื่อคัดลอกค่าจาก 'newUser' ที่เหลือ และอัปเดตเฉพาะ 'name' โดยใช้ค่าใหม่จาก 'e.target.value'
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
            {users.map((user) => ( // ใช้ .map() เพื่อวนลูปผ่านข้อมูลใน 'users' ซึ่งเป็น array ของผู้ใช้
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
