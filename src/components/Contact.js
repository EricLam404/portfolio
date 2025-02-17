import React, { useState } from "react";
import toast from "react-hot-toast";
import AnimatedText from "./AnimatedText";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const toastId = toast.loading("Sending message...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Message sent successfully!", { id: toastId });
                setName("");
                setEmail("");
                setMessage("");
            } else {
                toast.error(`Error: ${result.message}`, { id: toastId });
            }
        } catch (error) {
            toast.error("Failed to send message.", { id: toastId });
        }
    };
    return (
        <>
            <AnimatedText
                text="Contact me!"
                className="lg:!text-xl sm:!text-6xl xs:!text-md"
            />
            <div className="flex justify-center w-full min-h-screen pt-6">
                <form
                    onSubmit={handleSubmit}
                    className="py-4 mt-4 flex flex-col gap-5 w-1/2"
                >
                    <div className="flex flex-col">
                        <label htmlFor="name" className="p-2 dark:text-light">
                            Name
                        </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            id="fullname"
                            placeholder="John Doe"
                            className="w-full p-2 rounded-xl"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="p-2 dark:text-light">
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="text"
                            id="email"
                            placeholder="johndoe@gmail.com"
                            className="w-full p-2 rounded-xl"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="message"
                            className="p-2 dark:text-light"
                        >
                            Your Message
                        </label>
                        <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            className="h-32 w-full p-2 rounded-xl"
                            id="message"
                            placeholder="Type your message here..."
                        ></textarea>
                    </div>

                    <button
                        className="bg-green-600 hover:bg-green-700 p-3 text-white font-bold rounded-2xl"
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </div>
        </>
    );
};

export default Contact;
