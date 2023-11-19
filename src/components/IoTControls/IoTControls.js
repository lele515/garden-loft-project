import React from 'react'
import './iotcontrols.css'


const IoTControls = () => {

  return (
    <section id="iotControls">
    <div className="iotControls-main" className="about__content">
    <div className="about__cards">
      <article className='about__card'>
        {/* <FaAward className='about__icon'/> */}
        <h5>Lights</h5>
      </article>
      <article className='about__card'>
        {/* <FaAward className='about__icon'/> */}
        <h5>Temperature</h5>
      </article>
      <article className='about__card'>
        {/* <FiUser className='about__icon'/> */}
        <h5>Lock</h5>
      </article>
      <article className='about__card'>
        {/* <VscFolderLibrary className='about__icon'/> */}
        <h5>Other</h5>
      </article>
    </div>
    </div>
    </section>
  )
}

export default IoTControls
