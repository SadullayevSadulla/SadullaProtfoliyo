import "./contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <h3 >Contact</h3>

            <div className="contact_map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.5006503313807!2d60.61701258502171!3d41.55840799722279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9842c81fc9d%3A0x9e434d2b8a616ce9!2sIT%20Park!5e0!3m2!1sen!2sbd!4v1772695591147!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <section className="contactForm">
                <h2>Contact Form</h2>

                <form className="contact_form">

                    <div className="form_row">
                        <input type="text" placeholder="Full name" />
                        <input type="email" placeholder="Email address" />
                    </div>

                    <textarea placeholder="Your Message"></textarea>

                    <div className="form_btn">
                        <button type="submit">
                            ✈ Send Message
                        </button>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default Contact;