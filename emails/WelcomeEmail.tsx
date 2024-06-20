import { Button, Html, Tailwind } from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Button
        href="https://example.com"
        className="bg-brand px-3 py-2 font-medium leading-4 text-white mt-10 rounded-lg"
      >
        Click me
      </Button>
    </Tailwind>
  );
}
