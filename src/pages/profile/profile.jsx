import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import Avatar from "../ui/avatar";
import axios from "axios";
import { updateUser } from "../../store/user";

// Custom hook to manage profile form state and logic
const useProfileForm = (user) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    age: user?.age || "",
    gender: user?.gender || "",
    about: user?.about || "",
    skills: user?.skills || "",
    photoUrl: user?.photoUrl || "",
  });

  // Track original values to detect changes
  const [originalValues, setOriginalValues] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    age: user?.age || "",
    gender: user?.gender || "",
    about: user?.about || "",
    skills: user?.skills || "",
    photoUrl: user?.photoUrl || "",
  });

  // Update form values when user data changes
  useEffect(() => {
    const newFormData = {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      age: user?.age || "",
      gender: user?.gender || "",
      about: user?.about || "",
      skills: user?.skills || "",
      photoUrl: user?.photoUrl || "",
    };

    setFormData(newFormData);
    setOriginalValues(newFormData);
  }, [user]);

  // Get only the fields that have been changed
  const getChangedFields = () => {
    const changes = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== originalValues[key]) {
        changes[key] = formData[key];
      }
    });
    return changes;
  };

  // Update form field
  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle save operation
  const handleSave = async () => {
    try {
      const changedFields = getChangedFields();

      if (Object.keys(changedFields).length === 0) {
        toast.info("No changes detected");
        setIsEditing(false);
        return;
      }

      const loadingToast = toast.loading("Updating profile...");

      const response = await axios.patch(
        import.meta.env.VITE_API_BACKEND_URL + "/api/user/profile/edit",
        changedFields,
        { withCredentials: true }
      );

      toast.dismiss(loadingToast);
      dispatch(updateUser(response.data.user || response.data));
      setOriginalValues(formData);
      toast.success(response.data.message || "Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Profile update error:", error);
      const errorMessage =
        error.response?.data?.message || "Failed to update profile";
      toast.error(errorMessage);
    }
  };

  // Handle cancel operation
  const handleCancel = () => {
    setFormData(originalValues);
    setIsEditing(false);
    toast.info("Changes cancelled");
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return {
    formData,
    isEditing,
    updateField,
    handleSave,
    handleCancel,
    toggleEdit,
  };
};

// Profile form component
const ProfileForm = ({ formData, isEditing, updateField }) => {
  const refs = {
    firstName: useRef(null),
    lastName: useRef(null),
    age: useRef(null),
    gender: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    photoUrl: useRef(null),
  };

  // Focus first input when entering edit mode
  useEffect(() => {
    if (isEditing && refs.firstName.current) {
      setTimeout(() => refs.firstName.current.focus(), 300);
    }
  }, [isEditing]);

  const formFields = [
    {
      key: "firstName",
      label: "First Name",
      type: "text",
      ref: refs.firstName,
    },
    { key: "lastName", label: "Last Name", type: "text", ref: refs.lastName },
    { key: "age", label: "Age", type: "number", ref: refs.age },
    { key: "gender", label: "Gender", type: "text", ref: refs.gender },
    { key: "about", label: "About", type: "textarea", ref: refs.about },
    { key: "skills", label: "Skills", type: "text", ref: refs.skills },
    { key: "photoUrl", label: "Photo", type: "text", ref: refs.photoUrl },
  ];

  const renderField = (field) => {
    const commonProps = {
      ref: field.ref,
      id: field.key,
      value: formData[field.key],
      onChange: (e) => updateField(field.key, e.target.value),
      className:
        "border border-border rounded-md p-2 sm:p-3 mt-2 text-sm sm:text-base w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",
      disabled: !isEditing,
    };

    if (field.type === "textarea") {
      return (
        <textarea
          {...commonProps}
          rows="3"
          className={`${commonProps.className} resize-vertical`}
        />
      );
    }

    return <input type={field.type} {...commonProps} />;
  };

  return (
    <div className="flex flex-col mt-5 sm:mt-6 space-y-4 sm:space-y-5">
      {formFields.map((field) => (
        <div key={field.key} className="flex flex-col">
          <label
            htmlFor={field.key}
            className="text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2"
          >
            {field.label}
          </label>
          {renderField(field)}
        </div>
      ))}
    </div>
  );
};

// Main Profile component
const Profile = () => {
  const user = useSelector((state) => state.user);
  const {
    formData,
    isEditing,
    updateField,
    handleSave,
    handleCancel,
    toggleEdit,
  } = useProfileForm(user);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#dbeafe]">
      <div className="max-w-md sm:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 lg:mt-8 mb-4 sm:mb-6 gap-4">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left">
              Welcome, {user?.firstName} {user?.lastName}
            </h1>
            <Avatar
              src={user?.photoUrl}
              alt="avatar"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex-shrink-0"
            />
          </div>

          {/* Profile Card */}
          <div className="flex flex-col w-full bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Your Profile
              </h2>
              <button
                className="bg-black text-white cursor-pointer px-4 py-2 sm:px-5 sm:py-2 text-sm sm:text-base rounded-md hover:bg-gray-800 transition-colors w-full sm:w-auto"
                onClick={toggleEdit}
              >
                Edit Profile
              </button>
            </div>

            {/* Form */}
            <ProfileForm
              formData={formData}
              isEditing={isEditing}
              updateField={updateField}
            />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-6">
              <button
                className="bg-black text-white cursor-pointer px-4 py-3 sm:px-5 sm:py-2 text-sm sm:text-base rounded-md hover:bg-gray-800 transition-colors flex-1"
                onClick={handleSave}
              >
                Save
              </button>
              {isEditing && (
                <button
                  className="bg-gray-500 text-white cursor-pointer px-4 py-3 sm:px-5 sm:py-2 text-sm sm:text-base rounded-md hover:bg-gray-600 transition-colors flex-1"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
