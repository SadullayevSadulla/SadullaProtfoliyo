import "./contact.css"
import { useState } from "react"

const token = "8617382479:AAH699Fex-kZZWFKBNaeEu5-BwZY-dMCe0o"
const chat_id = "8509171828"

const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const sendMessage = async (e) => {
        e.preventDefault()

        setLoading(true)

        const text = `
📩 <b>New Contact Form</b>

👤 <b>Name:</b> ${name}
📧 <b>Email:</b> <a href="mailto:${email}">${email}</a>
💬 <b>Message:</b> ${message}
`

        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: chat_id,
                text: text,
                parse_mode: "HTML"
            })
        })

        setLoading(false)
        setSuccess(true)

        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div className="contact">

            <h3>Contact</h3>

            <div className="contact_map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.5006503313807!2d60.61701258502171!3d41.55840799722279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9842c81fc9d%3A0x9e434d2b8a616ce9!2sIT%20Park!5e0!3m2!1sen!2sbd!4v1772695591147!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>

            <section className="contactForm">

                <h2>Contact Form</h2>

                {success && (
                    <p className="success_message">
                        ✅ Message successfully sent!
                    </p>
                )}

                <form className="contact_form" onSubmit={sendMessage}>

                    <div className="form_row">

                        <input
                            type="text"
                            placeholder="Full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>

                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>

                    <div className="form_btn">

                        <button type="submit" disabled={loading}>

                            {loading ? "Sending..." : "✈ Send Message"}

                        </button>

                    </div>

                </form>

            </section>

        </div>
    )
}

export default Contact