import React, { useState } from 'react'
import CvForm from '../cvform/CvForm'
import './home.css'

function Home() {
  const [openDialog, setOpenDialog] = useState(false)
  const handleOpenDialog = () => {
    setOpenDialog(true)
  }
  return (
    <>
      <div className='home--container'>
        <div className='home--actions'>
          <div className='actions--info'>
            <h1 className='info--header'>
              Resumes
            </h1>
            <p className='info--paragraph'>
              There are 0 total Resumes
            </p>
          </div>
          <div className='actions'>
            <button className='new-resume-btn' onClick={handleOpenDialog}>
              <div className='plus--btn'>
                +
              </div>
              New Resume
            </button>
          </div>
        </div>
        <div className='home--items'>
          <img src='./assets/empty-page.svg' className='emptypage--img' alt='empty page' />
          <h2 className='info--header'>
            There is nothing here
          </h2>
          <p className='info--paragraph'>
            Create an invoice by clicking the <span className='bold-span'>New Invoice</span> button and get started
          </p>
        </div>
      </div>
      <div
        className={openDialog ? 'fade--container' : null}
        onClick={() => setOpenDialog(false)}
      >

      </div>
      <CvForm open={openDialog} />
    </>
  )
}

export default Home