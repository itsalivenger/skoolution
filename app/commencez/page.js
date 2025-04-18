"use client";


import '@fontsource/inter';
import LoginLeft from '../components/ui2/LoginForm';
import LoginForm from '../components/ui2/LoginLeft';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      <LoginLeft />
      <LoginForm />
    </div>
  );
}