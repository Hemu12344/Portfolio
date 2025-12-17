import { useEffect, useState } from "react";
import axios from "../api/axios"



const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [classes, setClasses] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // ✅ Dynamic borders
  useEffect(() => {
    const newClasses = {};
    Object.keys(formData).forEach((field) => {
      if (errors[field]) newClasses[field] = "border-red-500";
      else if (formData[field].trim()) newClasses[field] = "border-green-500";
      else newClasses[field] = "border-gray-300";
    });
    setClasses(newClasses);
  }, [formData, errors]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = `${key[0].toUpperCase() + key.slice(1)} is required`;
      }
    });

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${API_URL}/Check`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      setSuccess(res.data.message);

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSuccess(""), 2000);

    } catch (err) {
      console.error(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="container mx-auto px-4 mt-10 flex justify-center">
      <form onSubmit={handleSubmit} className="max-w-xl w-full flex flex-col gap-3">
        <h2 className="text-3xl font-bold">Connect With Me 🚀</h2>

        {["name", "phone", "email", "subject"].map((field) => (
          <div key={field}>
            <input
              id={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field}`}
              className={`border p-2 rounded-xl w-full ${classes[field]}`}
            />
            {errors[field] && (
              <span className="text-red-500 text-sm">{errors[field]}</span>
            )}
          </div>
        ))}

        <textarea
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          className={`border p-2 rounded-xl w-full ${classes.message}`}
        />

        <button
          disabled={loading}
          className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-green-600">{success}</p>}
      </form>
    </div>
  );
};

export default Contact;
