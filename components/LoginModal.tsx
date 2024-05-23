import React, { useEffect, useRef, useState } from "react";
import { Mail, X } from "lucide-react"; 
import { Facebook, Google } from "@/Icons";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/store/AuthSlice";
import { AppDispatch } from "@/store/store";


const LoginModal = ({ onClose }: { onClose: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for the animation to finish before closing
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className={`relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform transition-transform ${
          isVisible ? "translate-y-0" : "translate-y-full p-4"
        }`}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={closeModal}
        >
          <X size={24} />
        </button>
        <div className="flex flex-col justify-center items-center py-24 px-10">
          <h2 className="text-2xl font-bold mb-4">Join Medium.</h2>
          <button onClick={handleLogin} className="w-full border text-gray-900 rounded-full py-2 mb-4 flex justify-center items-center gap-4">
            <Google />
            <div>Sign up with Google</div>
          </button>
          <button className="w-full border text-gray-900 rounded-full py-2 mb-4 flex justify-center items-center gap-4">
            <Facebook />
            <div>Sign up with Facebook</div>
          </button>
          <button className="w-full border text-gray-900 rounded-full py-2 mb-4 flex justify-center items-center gap-4">
            <Mail />
            <div>Sign up with email</div>
          </button>
          <p className="text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-[#1a8917] hover:underline font-semibold">
              Sign in
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Click “Sign up” to agree to Medium’s{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and acknowledge that Medium’s{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            applies to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
