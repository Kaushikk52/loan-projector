import { useState } from "react";
import CustomDialog from "./CustomDialog";
import { toast } from "react-hot-toast";

type ApplyNowProps = {
  openApplyNow: boolean;
  setOpenApplyNow: (value: boolean) => void;
};

export default function ApplyNow({
  openApplyNow,
  setOpenApplyNow,
}: ApplyNowProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    occupation: "",
    loanAmount: "",
    address: "",
    panNumber: "",
    salary: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // Basic form validations
    if (!formData.name.trim())
      return toast.error("Please enter your full name.",{position: "bottom-right"});
    if (!/^\d{10}$/.test(formData.mobile))
      return toast.error("Enter a valid 10-digit mobile number.",{position: "bottom-right"});
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return toast.error("Enter a valid email address.",{position: "bottom-right"});
    if (!formData.occupation)
      return toast.error("Please select an occupation.",{position: "bottom-right"});
    if (!/^\d+$/.test(formData.loanAmount))
      return toast.error("Enter a valid loan amount.",{position: "bottom-right"});
    if (!formData.address.trim())
      return toast.error("Please enter your address.",{position: "bottom-right"});
    if (!/[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(formData.panNumber))
      return toast.error("Enter a valid PAN number.",{position: "bottom-right"});
    if (!/^\d+$/.test(formData.salary))
      return toast.error("Enter a valid monthly salary.",{position: "bottom-right"});

    setIsSubmitting(true);
    try {
      const scriptData = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        phone: formData.mobile,
        mail: formData.email,
        occupation: formData.occupation,
        loan: formData.loanAmount,
        address: formData.address,
        pan: formData.panNumber,
        salary: formData.salary,
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbwehMimGa5-RfP9VoU6DLoas1-0RxTXRu9MzYqbfOqwdvGc9uqUtitu0pV0joA4gyy4VQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(scriptData).toString(),
        }
      );

      toast.success("Form submitted successfully!",{position: "bottom-right"});

      setOpenApplyNow(false);

      setFormData({
        name: "",
        mobile: "",
        email: "",
        occupation: "",
        loanAmount: "",
        address: "",
        panNumber: "",
        salary: "",
      });
    } catch (error) {
      // console.error("Error submitting form:", error);
      toast.error(
        "There was an error submitting your application. Please try again later."
      );
      throw error; // Let CustomDialog keep the dialog open on error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomDialog
      open={openApplyNow}
      setOpen={setOpenApplyNow}
      title="Apply Now"
      buttonText={isSubmitting ? "Submitting..." : "Submit Form"}
      onSubmit={handleSubmit}
    >
      <form className="flex flex-col gap-4 px-2 pb-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name (as per PAN)"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />
        <select
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        >
          <option value="">Select Occupation</option>
          <option value="salaried">Salaried</option>
          <option value="self-employed">Self-employed</option>
          <option value="student">Student</option>
          <option value="unemployed">Unemployed</option>
        </select>
        <input
          type="text"
          name="loanAmount"
          placeholder="Loan Amount (₹)"
          value={formData.loanAmount}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          name="address"
          placeholder="Residential Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          name="panNumber"
          placeholder="PAN Number"
          value={formData.panNumber}
          onChange={handleChange}
          required
          className="p-2 border rounded-md uppercase"
        />
        <input
          type="text"
          name="salary"
          placeholder="Monthly Salary (₹)"
          value={formData.salary}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />
      </form>
    </CustomDialog>
  );
}
