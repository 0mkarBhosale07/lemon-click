"use client";
import React, { useState } from "react";
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
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { reportLink } from "@/actions/users.action";
import { toast } from "sonner";

const ReportForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [submited, setSubmited] = useState(false);

  const handelSubmit = async () => {
    const data = await reportLink({ name, email, description, link });
    if (data.status == 200) {
      setSubmited(true);
      toast.success(data.message);
    }
    if (data.status == 500) {
      toast.error(data.message);
      setSubmited(false);
    }
  };

  return (
    <div>
      {!submited ? (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              <div className="flex gap-5 items-center">
                <Image
                  src="/icons/report.png"
                  alt="report icon"
                  width={42}
                  height={42}
                />
                Report Link
              </div>
            </CardTitle>
            <CardDescription>Please mention all the details.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handelSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Your Email</Label>
                  <Input
                    id="name"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Link</Label>
                  <Input
                    id="name"
                    placeholder="Paste the link"
                    required
                    value={link}
                    onChange={(e) => {
                      setLink(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Description (Optional)</Label>
                  <Textarea
                    id="name"
                    value={description}
                    placeholder="Provide us description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
              </div>
              <Button className="w-full mt-5" type="submit">
                Report
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="my-28">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>
                <div className="flex gap-5 items-center">
                  <Image
                    src="/icons/submited.png"
                    alt="submited icon"
                    width={42}
                    height={42}
                  />
                  Link Reported
                </div>
              </CardTitle>
              <CardDescription>
                <p className="mt-5">
                  Action will be taken on the reported link if it violates our
                  policies. Action will be taken within 3 days.
                </p>
                <Link href="/">
                  <Button className="mt-10 w-full">Back Home</Button>
                </Link>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ReportForm;
