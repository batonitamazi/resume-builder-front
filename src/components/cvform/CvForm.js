import React, { useState } from 'react';
import './cvform.css'
import { useAuthContext } from '../../hooks/useAuthContext'

function CvForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [skills, setSkills] = useState('');

    const { open } = props
    const { user } = useAuthContext()

    const handleSubmit = async event => {
        event.preventDefault();
        const resume = { name, email, phone, linkedin, skills }
        const response = await fetch('http://localhost:4000/api/resumes', {
            method: 'POST',
            body: JSON.stringify(resume),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/pdf',
                'Authorization': `Bearer ${user.token}`,
            }

        }).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `${name}.pdf`;
                alink.click();
            })
        })
    }


    return (
        <div className={open ? 'dialog--container' : null}>
            <h2 className='info--header'>
                New Resume
            </h2>
            <form className='resume-form' onSubmit={handleSubmit}>
                <label className='main--label'>Overall</label>
                <div className='label--container'>
                    <label className='input--label'>
                        FullName
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className='form--input' />
                    </label>
                    <br />
                    <label className='input--label'>
                        Email
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className='form--input' />
                    </label>
                    <br />
                    <label className='input--label'>
                        Phone
                        <input type="number" value={phone} onChange={e => setPhone(e.target.value)} className='form--input' />
                    </label>
                    <br />
                    <label className='input--label' value={linkedin} onChange={e => setLinkedin(e.target.value)} >
                        Linkedin
                        <input type="url" className='form--input' />
                    </label>
                    <br />
                </div>
                <div className='label--container'>
                    <label className='input--label' value={skills} onChange={e => setSkills(e.target.value)}>
                        skills
                        <input type="text" className='form--input' placeholder="separate skills with ',' " />
                    </label>
                    <br />
                </div>
                <label className='main--label'>Experiences</label>
                <div className='label--container'>
                    <label className='input--label'>
                        Your Position
                        <input className='form--input' type="text" />
                    </label>
                    <br />
                    <label className='input--label'>
                        Company Name
                        <input className='form--input' type="text" />
                    </label>
                    <br />
                    <label className='input--label'>
                        Start Date
                        <input className='form--input' type="date" />
                    </label>
                    <br />
                    <label className='input--label'>
                        End  Date
                        <input className='form--input' type="date" />
                    </label>
                    <br />
                </div>




                <div className='label--container'>
                    <input type="submit" value="Save" className='new-resume-btn' />
                </div>
            </form>

        </div>
    )
}
export default CvForm

{/*  */ }