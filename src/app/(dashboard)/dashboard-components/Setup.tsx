"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setUsername } from "@/actions/users.action";
import { toast } from "sonner";

const Setup = () => {
  const [username, setUsernameValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data: any = await setUsername({ username });
      if (data === "Username already taken! Try new one") {
        toast.error(data);
      } else {
        toast.success("Username successfully set!");
        window.location.reload();
      }
    } catch (errorGot: any) {
      toast.error(
        "An error occurred while setting the username. Please try again."
      );
      setError(errorGot.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Setup Your Account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Setup Account!</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                placeholder="@lemonclick"
                className="col-span-3"
                name="username"
                required
                onChange={(e) => setUsernameValue(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          {error && <p className="text-red-500 my-2">{error}</p>}
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Setup;
