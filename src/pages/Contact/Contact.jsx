import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const form = useRef();
    const message = useRef();
    const subject = useRef();
    const email = useRef();
    const name = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm(
                "service_0cbde3h",
                "template_fnauhp9",
                form.current,
                "BK44KEKY-acwTlRTN"
            )
            .then(
                () => {
                    console.log("sent")
                    message.current.value = "";
                    email.current.value = "";
                    name.current.value = "";
                    subject.current.value = "";
                    setLoading(false);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="contact container">
            <form className="py-5" ref={form} onSubmit={sendEmail}>
                <h4 className='content-title'>Get in touch</h4>
                <div className="row form-part">
                    <div className="col-12 col-md-6"><input ref={name} className='form-item' type="text" placeholder="name" name='user_name' required /></div>
                    <div className="col-12 col-md-6"><input ref={email} className='form-item' type="email" placeholder="email" name='user_email' required /></div>
                    <div className="col-12"><input ref={subject} className='form-item' type="text" placeholder="subject" name='subject' required /></div>
                    <div className="col-12"><textarea ref={message} className='form-item' style={{ height: "165px" }} name="message" cols="30" rows="10" placeholder="message" required></textarea></div>
                    <div className="col-12">
                        <button className="contact-button">send
                            {loading && <div className="spinner-border ms-1" role="status">
                                <span className="sr-only"></span>
                            </div>}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;