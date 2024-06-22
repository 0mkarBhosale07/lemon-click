"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaRocket, FaClipboardList } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Confetti from "react-confetti";
import { uploadBrandedLink } from "@/actions/brand.action";
import { createWebhook } from "@/actions/admin.actions";
import { toast } from "sonner";

const serverURL: string = "https://lemonclick.vercel.app";

const CreateWebhook = () => {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [channel, setChannel] = useState("");
  const [validLink, setValidLink] = useState<boolean | undefined>(false);
  const [isVisible, setIsVisible] = useState<boolean | undefined>(false);
  const [loading, setLoading] = useState(false);

  const handelUpload = async () => {
    setLoading(true);
    try {
      const res = await createWebhook({ url, name, channel });
      window.location.reload();
      toast.success(res.message);
    } catch (error) {
      console.error("Upload failed:", error);
      toast("Upload failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Dialog>
        <DialogTrigger className="bg-gradient-to-r from-blue-600 px-3 py-2 rounded-lg to-indigo-400 flex items-center text-white gap-3 font-bold hover:from-indigo-400 hover:to-blue-600 transition-all duration-300">
          <FaRocket /> Create
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Webhook</DialogTitle>
            <DialogDescription>
              Enter the webhook url, channel name and name for the webhook.
            </DialogDescription>
          </DialogHeader>

          {isVisible ? (
            <div>
              {loading ? (
                <DialogContent>
                  <div className="flex justify-center items-center h-24">
                    <div className="w-8 h-8 border-4 border-t-4 border-t-blue-500 border-blue-200 rounded-full animate-spin"></div>
                  </div>
                </DialogContent>
              ) : validLink ? (
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Copy and share the following link to your audience!
                    </DialogTitle>
                    <DialogDescription>
                      You can only copy this link dialog once, instead create an
                      account to get your redirected links
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-2">
                    <h1>Webhook Added Successfully</h1>
                  </div>
                </DialogContent>
              ) : (
                <DialogContent>
                  <DialogTitle>
                    <h1 className="text-red-400">Please enter a valid url!</h1>
                  </DialogTitle>
                </DialogContent>
              )}
            </div>
          ) : (
            <form action={handelUpload}>
              <Input
                className=" my-2"
                name="url"
                id="url"
                placeholder="Enter URL"
                onChange={(e) => {
                  setURL(e.target.value);
                }}
              />
              <Input
                className="my-2"
                name="name"
                id="name"
                placeholder="Enter Webhook Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                className="my-2"
                name="channel-name"
                id="name"
                placeholder="Enter Channel Name"
                onChange={(e) => {
                  setChannel(e.target.value);
                }}
              />
              <Button
                className="mt-5 w-full text-white"
                type="submit"
                variant="secondary"
              >
                Add Webhook
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateWebhook;
