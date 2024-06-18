"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Button } from "@/components/ui/button";
import { setProfileLink, updateBio } from "@/actions/profile.action";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

const InputFiled = () => {
  const [link, setLink] = useState("");
  const [social, setSocial] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState(null);
  const [name, setName] = useState(null);
  const [displayImage, setDisplayImage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!social || !link) {
      toast("Please select a platform and enter a link.");
      return;
    }

    try {
      await setProfileLink({ tag: social, link: link, title: title });
      toast("Link added successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error adding link:", error);
      toast("Failed to add link. Please try again.");
    }
  };

  const handleUpdateBio = async (e: any) => {
    e.preventDefault();

    const updateObject: any = {};
    if (bio !== null) {
      updateObject.bio = bio;
    }
    if (name !== null) {
      updateObject.name = name;
    }
    if (displayImage !== "") {
      updateObject.displayImage = displayImage;
    }

    try {
      await updateBio(updateObject);
      toast("Information updated successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error updating information:", error);
      toast("Failed to update information. Please try again.");
    }
  };

  return (
    <div className="my-10">
      <div className="bio-btn flex justify-center my-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Update Info</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Update your infromation</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Name"
                className="col-span-3"
                onChange={(e: any) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Bio
                </Label>
                <Textarea
                  id="name"
                  placeholder="Start writing your bio here"
                  className="col-span-3"
                  onChange={(e: any) => setBio(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Display Image
                </Label>
                <Select onValueChange={setDisplayImage}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Want profile image</SelectLabel>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleUpdateBio}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-5"
      >
        <div className="select">
          <Select onValueChange={setSocial}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Platforms</SelectLabel>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="x">X</SelectItem>{" "}
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="spotify">Spotify</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="web">Web</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="inputs flex gap-5">
          <Input
            placeholder="Enter your link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Input
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="btn">
          <Button type="submit">Add</Button>
        </div>
      </form>
    </div>
  );
};

export default InputFiled;
