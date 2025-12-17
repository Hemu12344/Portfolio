import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Search,
  BarChart3,
  ExternalLink,
  ShieldBan,
  ShieldCheck,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdminContactDashboard() {
  const [contacts, setContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visitorsLoading, setVisitorsLoading] = useState(true);
  const [blocking, setBlocking] = useState({});
  const [search, setSearch] = useState("");

  /* ================= CONTACTS ================= */
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(`${API_URL}/contacts`);
        setContacts(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.error("Contacts fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  useEffect(() => {
    const v = search.toLowerCase();
    setFiltered(
      contacts.filter(
        (c) =>
          c.name.toLowerCase().includes(v) ||
          c.email.toLowerCase().includes(v) ||
          c.subject?.toLowerCase().includes(v)
      )
    );
  }, [search, contacts]);

  /* ================= VISITORS ================= */
  const fetchVisitors = async () => {
    setVisitorsLoading(true);
    try {
      const res = await axios.get(`${API_URL}/admin/visitors`);
      setVisitors(res.data);
    } catch (err) {
      console.error("Visitors fetch error:", err);
    } finally {
      setVisitorsLoading(false);
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  const blockUser = async (id) => {
    setBlocking((prev) => ({ ...prev, [id]: true }));
    try {
      await axios.patch(`${API_URL}/admin/block/${id}`);
      fetchVisitors();
    } catch (err) {
      console.error("Block error:", err.response?.data || err.message);
    } finally {
      setBlocking((prev) => ({ ...prev, [id]: false }));
    }
  };

  const unblockUser = async (id) => {
    setBlocking((prev) => ({ ...prev, [id]: true }));
    try {
      await axios.patch(`${API_URL}/admin/unblock/${id}`);
      fetchVisitors();
    } catch (err) {
      console.error("Unblock error:", err.response?.data || err.message);
    } finally {
      setBlocking((prev) => ({ ...prev, [id]: false }));
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      {/* ================= HEADER ================= */}
      <motion.div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-orange-500">Admin Dashboard</h1>
        <p className="text-gray-400">Contacts • Analytics • Visitor Control</p>
      </motion.div>

      {/* ================= ANALYTICS ================= */}
      <motion.div className="mb-12 max-w-xl mx-auto rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl text-center">
        <BarChart3 className="mx-auto text-orange-500 mb-3" size={40} />
        <h2 className="text-xl font-semibold mb-2">Website Analytics</h2>

        <a
          href="https://analytics.google.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition"
        >
          Open Google Analytics
          <ExternalLink size={18} />
        </a>

        <p className="text-xs text-gray-400 mt-2">Measurement ID: G-EHGTVM3HLR</p>
      </motion.div>

      {/* ================= VISITOR CONTROL ================= */}
      <motion.div className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">🔐 Visitor Blocking System</h2>

        <div className="overflow-x-auto rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
          {visitorsLoading ? (
            <div className="text-center p-6 text-gray-400">Loading visitors...</div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="p-3 text-left">IP</th>
                  <th className="p-3">Page</th>
                  <th className="p-3">Visited</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map((v) => {
                  const isAdmin =
                    v.userAgent.includes("106.223.179.212")

                  return (
                    <tr key={v._id} className="border-t border-white/10">
                      <td className="p-3">{v.ip}</td>
                      <td className="p-3">{v.page}</td>
                      <td className="p-3">
                        {new Intl.DateTimeFormat("en-GB", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        }).format(new Date(v.createdAt))}
                      </td>
                      <td className="p-3 font-medium">
                        {isAdmin ? (
                          "Admin"
                        ) : v.blocked ? (
                          <span className="text-red-500">Blocked</span>
                        ) : (
                          <span className="text-green-500">Active</span>
                        )}
                      </td>
                      <td className="p-3">
                        {!isAdmin && (
                          <button
                            disabled={blocking[v._id]}
                            onClick={() =>
                              v.blocked ? unblockUser(v._id) : blockUser(v._id)
                            }
                            className={`flex items-center gap-1 ${
                              v.blocked
                                ? "text-green-500 hover:underline"
                                : "text-red-500 hover:underline"
                            }`}
                          >
                            {v.blocked ? <ShieldCheck size={16} /> : <ShieldBan size={16} />}
                            {v.blocked ? "Unblock" : "Block"}
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </motion.div>

      {/* ================= CONTACT SEARCH ================= */}
      <div className="relative max-w-md mx-auto mb-10">
        <Search className="absolute left-3 top-3 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-orange-500 outline-none text-white"
        />
      </div>

      {/* ================= CONTACTS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <motion.div
            key={item._id}
            className="rounded-2xl p-5 bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <User className="text-orange-500" />
              <h2 className="font-semibold">{item.name}</h2>
            </div>

            <p className="text-sm flex gap-2 text-gray-300">
              <Mail size={14} /> {item.email}
            </p>

            <p className="text-sm flex gap-2 text-gray-300">
              <Phone size={14} /> {item.phone}
            </p>

            <p className="mt-2 font-medium text-gray-200">{item.subject}</p>

            <div className="flex gap-2 mt-2">
              <MessageSquare size={16} className="text-orange-500" />
              <p className="text-sm text-gray-300 line-clamp-3">{item.message}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
