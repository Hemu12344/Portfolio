import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Search,
  Inbox,
} from "lucide-react";

export default function AdminContactDashboard() {
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(
          `https://portfolio-backend-02h4.onrender.com/api/admin/contacts`||"http://localhost:5000/api/admin/contacts"
        );
        setContacts(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  useEffect(() => {
    const value = search.toLowerCase();
    setFiltered(
      contacts.filter(
        (c) =>
          c.name.toLowerCase().includes(value) ||
          c.email.toLowerCase().includes(value) ||
          c.phone.includes(Number(value))||
          c.subject?.toLowerCase().includes(value)
      )
    );
  }, [search, contacts]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg">
        Loading contacts...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-[#0f0f0f] dark:to-[#1a1a1a] p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold text-orange-500">
          Admin Contact Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Manage all incoming contact requests
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Messages", value: contacts.length },
          { label: "Today", value: "—" },
          { label: "This Week", value: "—" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl p-5 backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-white/20 shadow-lg"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {stat.label}
            </p>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {stat.value}
            </h2>
          </motion.div>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto mb-10">
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 dark:text-white"
        />
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
          <Inbox size={50} className="mb-3" />
          No contacts found
        </div>
      )}

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl p-5 bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <User className="text-orange-500" />
              <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
                {item.name}
              </h2>
            </div>

            <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <Mail size={14} /> {item.email}
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <Phone size={14} /> {item.phone}
            </p>

            <p className="mt-3 font-medium text-gray-700 dark:text-gray-200">
              {item.subject}
            </p>

            <div className="flex gap-2 mt-2">
              <MessageSquare size={16} className="text-orange-500" />
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                {item.message}
              </p>
            </div>

            <p className="text-xs text-gray-400 mt-3">
              {new Date(item.createdAt).toLocaleString()}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
