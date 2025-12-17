export default function Blocked() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl text-red-500 font-bold mb-4">
        🚫 Access Denied
      </h1>
      <p className="text-gray-400">
        You are blocked by admin
      </p>
    </div>
  );
}
