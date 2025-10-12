import { useEffect, useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [data, setData] = useState([]);


    // Classes for dynamic borders
    const [classes, setClasses] = useState({
        name: "border-gray-300",
        phone: "border-gray-300",
        email: "border-gray-300",
        subject: "border-gray-300",
        message: "border-gray-300",
    });

    // Update classes dynamically using useEffect
    useEffect(() => {
        const newClasses = {};
        Object.keys(formData).forEach((field) => {
            if (errors[field]) {
                newClasses[field] = "border-red-500 animate-shake";
            } else if (formData[field].trim()) {
                newClasses[field] = "border-green-500";
            } else {
                newClasses[field] = "border-gray-300";
            }
        });
        setClasses(newClasses);
    }, [formData, errors]);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setErrors({ ...errors, [e.target.id]: "" }); // Clear error on typing
    };

    // Handle form submission
    const handleSubmit = () => {
        const newErrors = {};

        // Check for empty fields
        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim()) {
                newErrors[key] =
                    key.charAt(0).toUpperCase() + key.slice(1) + " is required";
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Add data to array
        setData([...data, formData]);
        alert("Form submitted successfully!");

        // Reset form
        setFormData({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
        });
    };


    // console.log(formData);
    
    return (
        <div id="contact" className="container mx-auto px-4 mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Form */}
            <div className="flex-1 flex flex-col items-center lg:items-start">
                <div className="max-w-2xl w-full">
                    <h2 className="text-orange-600 uppercase tracking-widest text-lg font-semibold">
                        Get In Touch
                    </h2>
                    <p className="mt-2 text-5xl font-medium leading-tight tracking-tight">
                        I'm Here To Help You Succeed.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 mt-6 w-full">
                    {/* Left inputs */}
                    <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="name">Full name *</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`border p-2 rounded-xl w-full transition-all ${classes.name}`}
                            placeholder="Enter Your Name"
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm animate-fade-in">
                                {errors.name}
                            </span>
                        )}

                        <label htmlFor="phone">Phone number *</label>
                        <input
                            type="number"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`border p-2 rounded-xl w-full transition-all ${classes.phone}`}
                            placeholder="Enter Phone Number"
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-sm animate-fade-in">
                                {errors.phone}
                            </span>
                        )}
                    </div>

                    {/* Right inputs */}
                    <div className="flex flex-col gap-2 flex-1">
                        <label htmlFor="email">Email address *</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`border p-2 rounded-xl w-full transition-all ${classes.email}`}
                            placeholder="Enter Email"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm animate-fade-in">
                                {errors.email}
                            </span>
                        )}

                        <label htmlFor="subject">Subject *</label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`border p-2 rounded-xl w-full transition-all ${classes.subject}`}
                            placeholder="Enter Subject"
                        />
                        {errors.subject && (
                            <span className="text-red-500 text-sm animate-fade-in">
                                {errors.subject}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-4 w-full">
                    <label htmlFor="message">Your message *</label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        cols="10"
                        rows="3"
                        className={`border p-2 rounded-xl w-full transition-all ${classes.message}`}
                        placeholder="Message here"
                    ></textarea>
                    {errors.message && (
                        <span className="text-red-500 text-sm animate-fade-in">
                            {errors.message}
                        </span>
                    )}
                </div>

                <div className="mt-4 w-full flex justify-center lg:justify-start">
                    <button
                        onClick={handleSubmit}
                        className="border w-full md:w-full p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
                    >
                        Send Message
                    </button>
                </div>
                <h1 className="mt-2">By submitting this form, I agree to the <span className="text-orange-500"> privacy policy.</span></h1>
            </div>

            {/* Image */}
            <div className="flex-1 hidden lg:block">
                <img
                    src="https://tigmatemplate.me/uxoria/assets/img/bg/home2.jpg"
                    alt="Contact"
                    className="w-full h-auto rounded-xl"
                />
            </div>
        </div>
    );
};

export default Contact;
