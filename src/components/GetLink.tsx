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
import { uploadData } from "@/actions/links.action";
import { toast } from "sonner";

const serverURL: string = "https://lemonclick.vercel.app";

const GetLink = () => {
  const [link, setLink] = useState("");
  const [url, setURL] = useState("");
  const [validLink, setValidLink] = useState<boolean | undefined>(false);
  const [isVisible, setIsVisible] = useState<boolean | undefined>(false);
  const [loading, setLoading] = useState(false);

  const handelUpload = async () => {
    setLoading(true);
    try {
      const res = await uploadData({ link });

      if (res.upload == null) {
        setValidLink(res.isValidURL);
      } else {
        setURL(`${serverURL}/redirect/${res.upload._id}`);
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
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        onChange={(e) => setLink(e.target.value)}
        value={link}
        type="url"
        placeholder="Enter your URL"
        className="w-full max-w-sm"
      />
      <Dialog>
        <DialogTrigger
          onClick={handelUpload}
          className="bg-gradient-to-r from-blue-600 px-3 py-2 rounded-lg to-indigo-400 flex items-center text-white gap-3 font-bold hover:from-indigo-400 hover:to-blue-600 transition-all duration-300"
        >
          <FaRocket /> Go
        </DialogTrigger>
        {link == "" ? (
          <DialogContent>
            <DialogTitle>
              <h1 className="text-red-400">Please enter a url!</h1>
            </DialogTitle>
          </DialogContent>
        ) : (
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
        )}
      </Dialog>
    </div>
  );
};

export default GetLink;
