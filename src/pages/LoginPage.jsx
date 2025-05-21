import { Globe } from "@/components/magicui/globe";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const LoginPage = () => {
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const API = `${import.meta.env.VITE_BASE_URL}/login`;
      const response = await axios.post(API, formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log(response.data);

      if (response.data.status === "success") {
        sessionStorage.clear();
        sessionStorage.setItem("isLogin", "true");

        toast.success("Login Successful", {
          className: "bg-green-500 text-white",
        });

        window.location.href = "/";
        return;
      }

      if (response.data.status === "error") {
        toast.error(response.data.message || "Login failed", {
          className: "bg-red-500 text-white",
        });
        return;
      }
    } catch (error) {
      console.error("Login error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong, try again later",
        {
          className: "bg-red-500 text-white",
        }
      );
    }
  };

  return (
    <div className="flex items-center w-full h-full bg-gray-200">
      {/* left side */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <Card className="w-[350px] ">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent className="">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label>Email</Label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email id"
                  />
                </div>
                <div className="flex flex-col space-y-1.5 ">
                  <Label>Password</Label>
                  <div className="flex border-2 rounded p-1 dark:bg-input/30 bg-transparent gap-0.5">
                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
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
                  <div className="w-full text-left my-2">
                    <Button
                      variant="link"
                      onClick={() => navigation("/forgotpassword")}
                      className="text-blue-600"
                    >
                      <Label>Forrget Password?</Label>
                    </Button>
                  </div>
                  <div className="flex items-end justify-end flex-col gap-2">
                    <Button onClick={handleLogin}>Login</Button>
                    <div className="border-t-2 w-full flex items-center justify-center py-2">
                      <Button
                        onClick={() => navigation("/signup")}
                        variant="ghost"
                      >
                        Create New Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      {/* right side */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <Globe className="static p-2.5" />
      </div>
    </div>
  );
};

export default LoginPage;
