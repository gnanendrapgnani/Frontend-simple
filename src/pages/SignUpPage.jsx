import { Meteors } from "@/components/magicui/meteors";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/components/theme-provider";
import { MagicCard } from "@/components/magicui/magic-card";
import { Eye, EyeClosed } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!formData.name.trim()) {
      toast.error("Enter Name", {
        className: "bg-red-500 text-white",
      });
      return false;
    } else if (!formData.email.trim()) {
      toast.error("Enter Email id", {
        className: "bg-red-500 text-white",
      });
      return false;
    } else if (!emailRegex.test(formData.email)) {
      toast.error("Enter Correct email id", {
        className: "bg-red-500 text-white",
      });
      return false;
    } else if (!formData.password.trim()) {
      toast.error("Enter password", {
        className: "bg-red-500 text-white",
      });
      return false;
    } else if (!passwordRegex.test(formData.password)) {
      toast.error(
        "Password must contain 1 uppercase, 1 lowercase, 1 special character and be at least 8 characters long",
        { className: "bg-red-500 text-white" }
      );
      return false;
    }

    return true;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const APILINK = `${import.meta.env.VITE_BASE_URL}/student-register`;

      const response = await axios.post(APILINK, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Registration successful:", response.data);
      if (response.data.status === "success") {
        toast.success("Signup successful!", {
          className: "bg-green-500 text-white",
        });
      }
    } catch (error) {
      console.log("Registration error:", error.response.data);
      toast.error(error.response.data.message, {
        className: "bg-red-500 text-white",
      });
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <Meteors number={70} />
      <Card className="p-0 max-w-sm w-full shadow-none border-none">
        <MagicCard
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          className="p-0"
        >
          <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
            <CardTitle>Create New Account</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Name</Label>
                  <Input
                    name="name"
                    type="test"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="name.."
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="flex border-2 rounded p-1 dark:bg-input/30 bg-transparent gap-0.5">
                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full border-none outline-none"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className=" text-gray-600 "
                    >
                      {showPassword ? <EyeClosed /> : <Eye />}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="p-4 border-t border-border [.border-t]:pt-4 flex flex-col gap-1.5">
            <Button className="w-full" onClick={handleSave}>
              Sign In
            </Button>
            <Button variant="link" onClick={() => navigate("/")}>
              Already have Account
            </Button>
          </CardFooter>
        </MagicCard>
      </Card>
    </div>
  );
};

export default SignUpPage;
