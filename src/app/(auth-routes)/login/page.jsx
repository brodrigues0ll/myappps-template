import LoginForm from "@/components/login/login-form";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md p-6 space-y-6 bg-card rounded-lg shadow-lg">
        <div className="flex flex-col items-center space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground">
              Faça login para acessar as paginas privadas.
            </p>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
