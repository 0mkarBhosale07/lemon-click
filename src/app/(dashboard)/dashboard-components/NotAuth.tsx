import React from "react";

const NotAuth = () => {
  return (
    <div className="max-w-screen min-h-screen flex justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold text-red-500">
          ERROR 401: <br />
          User Not Authenticated!
        </h1>
      </div>
    </div>
  );
};

export default NotAuth;
