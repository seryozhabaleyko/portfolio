import React from 'react';

import './Contact.scss';

function Contact() {

    return (
        <div className="container">
            <div style={{ height: '150px' }}/>
            <div className="contact-heading">
                <h1 className="contact-title">Get in touch</h1>
                <p className="contact-description">If you wanna get in touch, talk to me about a project collaboration or just say hi,<br/> send an
                    email to <span className="fancy"><a
                        href="mailto:seryozha.baleyko@gmail.com">seryozha.baleyko@gmail.com</a></span> and ~let's talk.
                </p>
            </div>
            <div style={{ height: '150px' }}/>
        </div>
    );
}

export default Contact;