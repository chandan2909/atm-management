export default function Navbar() {

    const backtohome = (e) => {
        e.preventDefault();
        window.location.href = "/";
    };
  return (
    <div>
      <nav
        className="bg-black p-3 items-center"
        style={{
          width: "80vw",
          height: "10vh", // Increase height to ensure button is not cropped
          borderRadius: "10px 10px 0 0",
          color: "#6a5acd", // Shady blue color
        }}
      >
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center justify-center">
            <a className="text-2xl font-bold" href="/">
              ATM MANAGEMENT SYSTEM
            </a>
          </div>
          <div className="flex items-center">
            <button
              className="text-lg font-bold"
              style={{
                color: "#6a5acd", // Shady blue color
                border: "2px solid #6a5acd",
                borderRadius: "25px",
                backgroundColor: "transparent", // Ensure background is transparent
                padding: "10px 20px", // Add padding for consistency
                margin: "0", // Remove any margin
              }}
              onClick={backtohome}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
