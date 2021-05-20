import React from 'react'

function ContactVidSection() {
    return (
        <div className='banner-container'>
            <video src='/videos/waves-sample-vid.mp4' autoPlay loop muted/>
            <h1>Get in Touch!</h1>
            <div className='contact-blurb'>
                <h1>About Rachel</h1> 
                <h1>pronouns: they/them</h1>
            </div>
            <div className='upper-container'>
                <div className='platform-container'>
                    
                    <div className='platform-clmn'>
                        <i className='fab fa-facebook'/> <p className='handle'>facebook.com/rachel.vanderloop/</p>
                        <i className='fab fa-instagram'/> <p className='handle'>@raynotrachel332</p>
                    </div>
                    <div className='platform-clmn'>
                        <i className='fab fa-github'/> <p className='handle'>rachel-vanderloop</p>
                        <i className='fab fa-linkedin'/> <p className='handle'>rachelvanderloop</p>
                    </div>
                    <div className='platform-clmn'>
                        <i className='fas fa-envelope'/> <p className='handle'>rachelvanderloop@gmail.com</p>
                        <i className='fas fa-envelope'/> <p className='handle'>rvanderl@uwo.ca</p>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default ContactVidSection