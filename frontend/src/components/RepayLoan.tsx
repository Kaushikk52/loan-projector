import { useState } from "react";
import CustomDialog from "./CustomDialog";
import { toast } from "react-hot-toast";

type RepayLoanProps = {
  openRepay: boolean;
  setOpenRepay: (value: boolean) => void;
};

export default function RepayLoan({ openRepay, setOpenRepay }: RepayLoanProps) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name.trim())
      return toast.error("Please enter your full name.");
    if (!/^\d{10}$/.test(formData.number))
      return toast.error("Enter a valid 10-digit number.");

    setIsSubmitting(true);
    try {
      const scriptData = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        number: formData.number,
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbxFZOVYw_szidYQ41U8xCtp07Sol_zG8BdLaRhhefPOzHS-qvF4xquFo_dm0KsSsrbz/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(scriptData).toString(),
        }
      );

      toast.success("Form submitted successfully!");
      setOpenRepay(false);
      setFormData({ name: "", number: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CustomDialog
      open={openRepay}
      setOpen={setOpenRepay}
      title="Repay Loan"
      buttonText={isSubmitting ? "Submitting..." : "Submit Form"}
      onSubmit={handleSubmit}
    >
      <form className="flex flex-col gap-4 px-2 pb-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />
        <input
          type="tel"
          name="number"
          placeholder="Number"
          value={formData.number}
          onChange={handleChange}
          required
          className="p-2 border rounded-md"
        />
      </form>
    </CustomDialog>
  );
}
