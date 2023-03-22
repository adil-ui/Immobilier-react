import { useContext, useEffect, useState } from 'react';
import { API_URL } from '../../../config/constants';
import AuthContext from '../../../context/auth-context';
import axios from 'axios';

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPicture, setUserPicture] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (user) {
      setUserId(user.id);
      setUserName(user.name);
      setUserAddress(user.address);
      setUserPhone(user.phone);
      setUserPicture(user.picture);
      setUserEmail(user.email);
      setUserPassword(user.password);
    }
  }, [user])
  const updateUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userName);
    formData.append("address", userAddress);
    formData.append("picture", userPicture);
    formData.append("phone", userPhone);
    formData.append("email", userEmail);
    formData.append("password", userPassword);
    setToken(user.token)

    try {
      const response = await axios.post(API_URL + 'api/edit-user/' + userId, formData, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      console.log(user.token);
      response.data.token = user.token;
      setMessage(response.data.success);
      setUser({...response.data.user,token:user.token});
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      setMessage(error.message);
    }

  }
  return (
    <div className=" col-md-8 col-10 mx-md-0 mx-auto bg-white  py-4 rounded-2 shadow-sm height_100" >
      <form className="row g-3 col-11 mx-auto " onSubmit={updateUser} encType="multipart/form-data">
        <h5 className="fw-semibold mb-4">Mes informations</h5>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Name</label>
          <input type="text" className="form-control" name='name' value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Phone</label>
          <input type="tel" className="form-control" name='phone' value={userPhone} onChange={(e) => setUserPhone(e.target.value)} required />
        </div>
        <div className="col-md-12">
          <label className="form-label fw-semibold">Address</label>
          <input type="text" className="form-control" name='address' value={userAddress} onChange={(e) => setUserAddress(e.target.value)} required />
        </div>
        <div className="">
          <label for="formFile" className="form-label fw-semibold">Picture</label>
          <input className="form-control" type="file" id="formFile" name="picture" onChange={(e) => setUserPicture(e.target.files[0])} />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input type="email" className="form-control" name='email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input type="password" className="form-control" name='password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} required />
        </div>
        <div className="text-warning fw-semibold text-center fs-5 ">{message ? <p>{message}</p> : null}</div>
        <div className="col-12 d-flex justify-content-end">
          <button type="submit" className="btn btn-warning px-4 fw-semibold">Enregistrer modification</button>
        </div>
      </form>
    </div>

  )
}
export default Profile