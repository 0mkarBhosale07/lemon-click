"use client";
import { getUserDetails, updateName } from "@/actions/users.action";
import React, { useEffect, useState } from "react";
import Setup from "./Setup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Account = () => {
  const [userDetails, setUserDetails] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpdateName = async (e: any) => {
    e.preventDefault();
    await updateName({ name });
    window.location.reload();
  };

  // async function handleFileInputChange(data: any) {
  //   console.log(data);

  //   const { type, message }: any = await updateProfileImage(data);
  //   if (type == "success") toast.success(message);
  //   if (type == "error") toast.error(message);
  // }

  // async function wrapper() {
  //   const data: any = selectedFile;
  //   console.log(data);
  //   const { type, message } = await uploadFile(data);
  //   console.log(message);

  //   if (type == "success") toast.success(message);
  //   if (type == "error") toast.error(message);
  // }

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData: any = await getUserDetails();
        console.log(userData);
        setUserDetails(userData);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-5 mt-20">
        <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
        <p className="">Getting your account details...</p>
      </div>
    );
  }

  return (
    <div className="px-5 md:px-16 mt-5">
      <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-[#007f5f] to-[#ffff3f] text-transparent bg-clip-text">
        Hello, <span className="text-white">{userDetails.name}</span>
      </h1>

      <div className="setup flex justify-center mt-10">
        {userDetails.username ? (
          <div>
            <div className="main">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Update Name</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <form onSubmit={handleUpdateName}>
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your name here. Click save when
                        you&quot;re done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          defaultValue={userDetails?.name}
                          className="col-span-3"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              {/* <div className="profileImage mt-10">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Update Image</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile image</DialogTitle>
                      <DialogDescription>
                        Upload a profile picture. Click save when you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 mt-3">
                      <div className="grid grid-cols-2 items-center gap-4">
                        <Label htmlFor="profile" className="text-right">
                          Select Profile Image
                        </Label>
                        <Input
                          className="col-span-3 block"
                          type="file"
                          name="file"
                          required
                          accept="image/*"
                          onChange={(e) => setSelectedFile(e.target.files[0])}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={wrapper}>Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div> */}
            </div>
          </div>
        ) : (
          <Setup />
        )}
      </div>
    </div>
  );
};

export default Account;
