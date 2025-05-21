import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ThemeProvider from "./components/theme-provider";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";
import ErrorBoundary from "./pages/ErrorBoundary";
import SignUpPage from "./pages/SignUpPage";
import { Toaster } from "@/components/ui/sonner";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import HomrPage from "./pages/HomrPage";
import SittingPage from "./pages/SittingPAge";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("isLogin") === "true") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <ErrorBoundary>
        <Router>
          {!isLogin ? (
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/error" element={<ErrorPage />} />
              <Route path="/" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
          ) : (
            <Layout>
              <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="/" element={<HomrPage />} />
                <Route path="/sitting" element={<SittingPage />} />
              </Routes>
            </Layout>
          )}
        </Router>
      </ErrorBoundary>
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  );
}

export default App;
