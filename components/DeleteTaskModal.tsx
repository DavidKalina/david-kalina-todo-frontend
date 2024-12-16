import React from "react";
import { X } from "lucide-react";

interface DeleteTaskModal {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteTaskModal = ({ isOpen, onClose, onConfirm }: DeleteTaskModal) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md rounded-lg bg-[#0D0D0D] p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-300"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold text-gray-100">Delete Task</h2>
          <p className="text-sm text-gray-400">
            Are you sure you want to delete this task? This action cannot be undone.
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-gray-100 
                     bg-gray-800 rounded-md hover:bg-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white 
                     bg-red-600 rounded-md hover:bg-red-700
                     focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
