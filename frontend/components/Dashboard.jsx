import React, { useState } from 'react';
import axios from 'axios'
import { useForm} from "react-hook-form"
import '../styles/Dashboard.css'
const Dashboard = () => {
  const [activeForm, setActiveForm] = useState('birth-certificate');
  const handleSidebarClick = (formId) => {
    setActiveForm(formId);
  };

  const OnSubmit =async(data)=>{
    try {
      const response = await axios.post('http://localhost:3000/submit', data);
  } catch (error) {
      console.error('There was an error submitting the form!', error);
  }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();




  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <a href="#birth-certificate" onClick={() => handleSidebarClick('birth-certificate')}>Birth Certificate</a>
        <a href="#death-certificate" onClick={() => handleSidebarClick('death-certificate')}>Death Certificate</a>
        <a href="#aadhar-card" onClick={() => handleSidebarClick('aadhar-card')}>Aadhar Card</a>
        <a href="#pan-card" onClick={() => handleSidebarClick('pan-card')}>PAN Card</a>
        <a href="#voter-id" onClick={() => handleSidebarClick('voter-id')}>Voter ID</a>
      </div>
      <div className="content">
        <div id="birth-certificate" className="form-container" style={{ display: activeForm === 'birth-certificate' ? 'block' : 'none' }}>
          <h1>Birth Certificate Application Form</h1>
          <form action="/submit_birth_certificate_application" method="post">
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" name="full_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" required />
            </div>
            <div className="form-group">
              <label htmlFor="place-of-birth">Place of Birth</label>
              <input type="text" id="place-of-birth" name="place_of_birth" required />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="father-name">Father's Name</label>
              <input type="text" id="father-name" name="father_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="mother-name">Mother's Name</label>
              <input type="text" id="mother-name" name="mother_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" rows="4" required></textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Apply Now" />
            </div>
          </form>
        </div>

        <div id="death-certificate" className="form-container" style={{ display: activeForm === 'death-certificate' ? 'block' : 'none' }}>
          <h1>Death Certificate Application Form</h1>
          <form action="/submit_death_certificate_application" method="post">
            <div className="form-group">
              <label htmlFor="full-name">Full Name of Deceased</label>
              <input type="text" id="full-name" name="full_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="date-of-death">Date of Death</label>
              <input type="date" id="date-of-death" name="date_of_death" required />
            </div>
            <div className="form-group">
              <label htmlFor="place-of-death">Place of Death</label>
              <input type="text" id="place-of-death" name="place_of_death" required />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="father-name">Father's Name of Deceased</label>
              <input type="text" id="father-name" name="father_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="mother-name">Mother's Name of Deceased</label>
              <input type="text" id="mother-name" name="mother_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="spouse-name">Spouse's Name (if applicable)</label>
              <input type="text" id="spouse-name" name="spouse_name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Applicant's Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Applicant's Phone Number</label>
              <input type="text" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Applicant's Address</label>
              <textarea id="address" name="address" rows="4" required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="relationship">Relationship to Deceased</label>
              <input type="text" id="relationship" name="relationship" required />
            </div>
            <div className="form-group">
              <input type="submit" value="Apply Now" />
            </div>
          </form>
        </div>

        <div id="aadhar-card" className="form-container" style={{ display: activeForm === 'aadhar-card' ? 'block' : 'none' }}>
          <h1>Aadhar Card Application Form</h1>
          <form action="/submit_aadhar_card_application" method="post">
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" name="full_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="father-name">Father's Name</label>
              <input type="text" id="father-name" name="father_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" required />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" rows="4" required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input type="number" id="pincode" name="pincode" required />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" required />
            </div>
            <div className="form-group">
              <label htmlFor="district">District</label>
              <input type="text" id="district" name="district" required />
            </div>
            <div className="form-group">
              <label htmlFor="id-proof">ID Proof</label>
              <select id="id-proof" name="id_proof"  required>
                <option value="">Select ID Proof</option>
                <option value="passport">Passport</option>
                <option value="voter-id">Voter ID</option>
                <option value="pan-card">PAN Card</option>
                <option value="driving-license">Driving License</option>
              </select>
              <div className="file-upload">
                <input type="file" />
              </div>
            </div>
            <div className="form-group">
              <input type="submit" value="Apply Now" />
            </div>
          </form>
        </div>

        <div id="pan-card" className="form-container" style={{ display: activeForm === 'pan-card' ? 'block' : 'none' }} >
          <h1>PAN Card Application Form</h1>
          <form action="/submit" method="post" onSubmit={handleSubmit(OnSubmit)}>
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" name="full_name" {...register("full_name")}required />
            </div>
            <div className="form-group">
              <label htmlFor="father-name">Father's Name</label>
              <input type="text" id="father-name" name="father_name" {...register('father_name')} required />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" {...register("dob")} required />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" {...register("gender")}required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="aadhar-number" >Aadhar Number</label>
              <input type="text" id="aadhar-number" name="aadhar_number" {...register("aadhar_number")} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email"  {...register("email")}required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" name="phone"{...register("phone")} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" rows="4" {...register("address")} required></textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Apply Now" />
            </div>
          </form>
        </div>

        <div id="voter-id" className="form-container" style={{ display: activeForm === 'voter-id' ? 'block' : 'none' }}>
          <h1>Voter ID Application Form</h1>
          <form action="/submit_voter_id_application" method="post">
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" name="full_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="father-name">Father's Name</label>
              <input type="text" id="father-name" name="father_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" required />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea id="address" name="address" rows="4" required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" required />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input type="number" id="pincode" name="pincode" required />
            </div>
            <div className="form-group">
              <input type="submit" value="Apply Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
