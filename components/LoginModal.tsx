import React, { useEffect, useRef } from "react";
import { X } from "lucide-react"; // Importing an icon for the close button from lucide-react.

const LoginModal = ({ onClose }: { onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle click events outside the modal
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose(); // Close the modal if click occurs outside of it
      }
    };

    // Add event listener for click events on the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div
        ref={modalRef}
        className="relative bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Join Medium.</h2>
        <button className="w-full bg-red-500 text-white rounded-full py-2 mb-4">
          Sign up with Google
        </button>
        <button className="w-full bg-blue-600 text-white rounded-full py-2 mb-4">
          Sign up with Facebook
        </button>
        <button className="w-full bg-gray-800 text-white rounded-full py-2 mb-4">
          Sign up with email
        </button>
        <p className="text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Click “Sign up” to agree to Medium’s{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{" "}
          and acknowledge that Medium’s{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>{" "}
          applies to you.
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
