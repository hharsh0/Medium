import React from "react";
import LoginDesign from "@/Icons/LoginDesign";
import LoginModal from "./LoginModal";


function Login() {
     const [isModalOpen, setIsModalOpen] = React.useState(false);

     const openModal = () => setIsModalOpen(true);
     const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-between items-center flex-grow py-12">
      <div className="max-w-lg">
        <h1 className="text-6xl lg:text-9xl font-black">Stay curious</h1>
        <p className="text-2xl my-8">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button
          onClick={openModal}
          className="bg-black text-white rounded-full px-12 py-2"
        >
          Start reading
        </button>
      </div>

      <div className="hidden lg:block">
        <LoginDesign />
      </div>
      {isModalOpen && <LoginModal onClose={closeModal} />}
    </div>
  );
}

export default Login;
