import React from "react";
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
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <h1 className="text-center text-3xl font-bold">WELCOME</h1>
        <p className="text-center text-lg mt-2 text-gray-600 px-5">
          Join beta to test some new features before rollout and stay updated
          with the upcoming features!
        </p>
        <div className="form flex justify-center mt-20">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Join Beta</CardTitle>
              <CardDescription>
                Enter your email below to join beta membership!
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full hover:cursor-not-allowed" disabled>
                Join Now
              </Button>
            </CardFooter>
            <p className="text-center mb-2 text-red-500">
              Temporarily Disabeled!
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
