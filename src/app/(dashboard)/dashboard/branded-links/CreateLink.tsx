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
import { toast } from "sonner";

const serverURL: string = "https://lemonclick.vercel.app";

const CreateLink = () => {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const [validLink, setValidLink] = useState<boolean | undefined>(false);
  const [isVisible, setIsVisible] = useState<boolean | undefined>(false);
  const [loading, setLoading] = useState(false);

  const handelUpload = async () => {
    setLoading(true);
    try {
      const res = await uploadBrandedLink({ link, name });

      if (res.upload == null) {
        setValidLink(res.isValidURL);
      } else {
        setURL(`${serverURL}/b/${res.upload.name}`);
        setValidLink(res.isValidURL);
        setIsVisible(true);
      }
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
            <DialogTitle>Create Branded Link</DialogTitle>
            <DialogDescription>
              Enter the URL and brand name to create a custom link.
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
                  {isVisible && <Confetti width={500} />}
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
                    <Input disabled value={url} placeholder="Email" />
                    <Button
                      className="mt-2 bg-green-400 hover:bg-green-700 hover:text-white transition-all duration-200 text-black font-bold flex gap-2 items-center"
                      onClick={() => {
                        navigator.clipboard.writeText(url);
                        setIsVisible(false);
                        toast("Copied text to clipboard!");
                        window.location.reload();
                      }}
                    >
                      <FaClipboardList />
                      Copy Link
                    </Button>
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
                  setLink(e.target.value);
                }}
              />
              <Input
                className="my-2"
                name="name"
                id="name"
                placeholder="Enter Brande Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Button
                className="mt-5 w-full text-white"
                type="submit"
                variant="secondary"
              >
                Create Link
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateLink;
