"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaRocket } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  createWebhook,
  getAllWebhooks,
  sendWebhookMessage,
} from "@/actions/admin.actions";
import { toast } from "sonner";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CreateWebhook = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [url, setURL] = useState("");
  const [channel, setChannel] = useState("");
  const [embeds, setEmbeds] = useState([
    {
      author: {
        name: "",
        url: "",
        iconUrl: "",
      },
      body: {
        title: "",
        description: "",
        url: "",
        color: "#000000",
      },
      image: {
        imageUrl: "",
        thumbnailUrl: "",
      },
      footer: {
        text: "",
        iconUrl: "",
        timestamp: false,
      },
      fields: [
        {
          name: "",
          value: "",
          inline: false,
        },
      ],
    },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res: any = await getAllWebhooks();
        console.log("Webhooks data:", res);
        setData(res);
      } catch (error) {
        console.error("Failed to fetch webhooks:", error);
        toast("Failed to fetch webhooks, please try again.");
      }
    };

    getData();
  }, []);

  const handleAddEmbed = () => {
    setEmbeds([
      ...embeds,
      {
        author: {
          name: "",
          url: "",
          iconUrl: "",
        },
        body: {
          title: "",
          description: "",
          url: "",
          color: "#000000",
        },
        image: {
          imageUrl: "",
          thumbnailUrl: "",
        },
        footer: {
          text: "",
          iconUrl: "",
          timestamp: false,
        },
        fields: [
          {
            name: "",
            value: "",
            inline: false,
          },
        ],
      },
    ]);
  };

  const handleRemoveEmbed = (index: any) => {
    const newEmbeds = [...embeds];
    newEmbeds.splice(index, 1);
    setEmbeds(newEmbeds);
  };

  const handleEmbedChange = (
    index: any,
    field: any,
    subfield: any,
    value: any
  ) => {
    const newEmbeds: any = [...embeds];
    newEmbeds[index][field][subfield] = value;
    setEmbeds(newEmbeds);
  };

  const handleAddField = (embedIndex: any) => {
    const newEmbeds = [...embeds];
    newEmbeds[embedIndex].fields.push({ name: "", value: "", inline: false });
    setEmbeds(newEmbeds);
  };

  const handleRemoveField = (embedIndex: any, fieldIndex: any) => {
    const newEmbeds = [...embeds];
    newEmbeds[embedIndex].fields.splice(fieldIndex, 1);
    setEmbeds(newEmbeds);
  };

  const handleFieldChange = (
    embedIndex: any,
    fieldIndex: any,
    subfield: any,
    value: any
  ) => {
    const newEmbeds: any = [...embeds];
    newEmbeds[embedIndex].fields[fieldIndex][subfield] = value;
    setEmbeds(newEmbeds);
  };

  const handelUpload = async (e: any) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true);
    try {
      const res = await sendWebhookMessage({ name, embeds });
      window.location.reload(); // Refresh the page after webhook creation (you may want to handle this differently)
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
        <DialogTrigger className="bg-gradient-to-r from-green-600 px-3 py-2 rounded-lg to-red-400 flex items-center text-white gap-3 font-bold hover:from-red-400 hover:to-green-600 transition-all duration-300">
          🚀 Send Webhook
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1000px] sm:max-h-[800px] overflow-auto">
          <DialogHeader>
            <DialogTitle>Create Webhook</DialogTitle>
            <DialogDescription>
              Enter the webhook URL, channel name, webhook name, and configure
              embeds.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handelUpload}>
            <div className="select">
              <Select onValueChange={(value) => setName(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select webhook" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Webhooks</SelectLabel>
                    {data.map((item: any) => (
                      <SelectItem key={item._id} value={item.name}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {embeds.map((embed, index) => (
              <div key={index} className="mb-4 border p-4 rounded">
                <h3>Embed {index + 1}</h3>
                <Input
                  className="my-2"
                  name={`author-name-${index}`}
                  placeholder={`Author Name`}
                  value={embed.author.name}
                  onChange={(e) =>
                    handleEmbedChange(index, "author", "name", e.target.value)
                  }
                />
                <Input
                  className="my-2"
                  name={`author-url-${index}`}
                  placeholder={`Author URL`}
                  value={embed.author.url}
                  onChange={(e) =>
                    handleEmbedChange(index, "author", "url", e.target.value)
                  }
                />
                <Input
                  className="my-2"
                  name={`author-icon-url-${index}`}
                  placeholder={`Author Icon URL`}
                  value={embed.author.iconUrl}
                  onChange={(e) =>
                    handleEmbedChange(
                      index,
                      "author",
                      "iconUrl",
                      e.target.value
                    )
                  }
                />
                <Input
                  className="my-2"
                  name={`body-title-${index}`}
                  placeholder={`Body Title`}
                  value={embed.body.title}
                  onChange={(e) =>
                    handleEmbedChange(index, "body", "title", e.target.value)
                  }
                />
                <Textarea
                  className="my-2"
                  name={`body-description-${index}`}
                  placeholder={`Body Description`}
                  value={embed.body.description}
                  onChange={(e) =>
                    handleEmbedChange(
                      index,
                      "body",
                      "description",
                      e.target.value
                    )
                  }
                />
                <Input
                  className="my-2"
                  name={`body-url-${index}`}
                  placeholder={`Body URL`}
                  value={embed.body.url}
                  onChange={(e) =>
                    handleEmbedChange(index, "body", "url", e.target.value)
                  }
                />
                <Input
                  className="my-2"
                  type="color"
                  name={`body-color-${index}`}
                  placeholder={`Body Color`}
                  value={embed.body.color}
                  onChange={(e) =>
                    handleEmbedChange(index, "body", "color", e.target.value)
                  }
                />
                <Input
                  className="my-2"
                  name={`image-url-${index}`}
                  placeholder={`Image URL`}
                  value={embed.image.imageUrl}
                  onChange={(e) =>
                    handleEmbedChange(
                      index,
                      "image",
                      "imageUrl",
                      e.target.value
                    )
                  }
                />
                <Input
                  className="my-2"
                  name={`thumbnail-url-${index}`}
                  placeholder={`Thumbnail URL`}
                  value={embed.image.thumbnailUrl}
                  onChange={(e) =>
                    handleEmbedChange(
                      index,
                      "image",
                      "thumbnailUrl",
                      e.target.value
                    )
                  }
                />
                <Input
                  className="my-2"
                  name={`footer-text-${index}`}
                  placeholder={`Footer Text`}
                  value={embed.footer.text}
                  onChange={(e) =>
                    handleEmbedChange(index, "footer", "text", e.target.value)
                  }
                />
                <Input
                  className="my-2"
                  name={`footer-icon-url-${index}`}
                  placeholder={`Footer Icon URL`}
                  value={embed.footer.iconUrl}
                  onChange={(e) =>
                    handleEmbedChange(
                      index,
                      "footer",
                      "iconUrl",
                      e.target.value
                    )
                  }
                />
                <label className="my-2">
                  <input
                    type="checkbox"
                    name={`footer-timestamp-${index}`}
                    checked={embed.footer.timestamp}
                    onChange={(e) =>
                      handleEmbedChange(
                        index,
                        "footer",
                        "timestamp",
                        e.target.checked
                      )
                    }
                  />
                  Include Timestamp
                </label>
                {embed.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex}>
                    <Input
                      className="my-2"
                      name={`field-name-${index}-${fieldIndex}`}
                      placeholder={`Field ${fieldIndex + 1} Name`}
                      value={field.name}
                      onChange={(e) =>
                        handleFieldChange(
                          index,
                          fieldIndex,
                          "name",
                          e.target.value
                        )
                      }
                    />
                    <Input
                      className="my-2"
                      name={`field-value-${index}-${fieldIndex}`}
                      placeholder={`Field ${fieldIndex + 1} Value`}
                      value={field.value}
                      onChange={(e) =>
                        handleFieldChange(
                          index,
                          fieldIndex,
                          "value",
                          e.target.value
                        )
                      }
                    />
                    <label className="my-2">
                      <input
                        type="checkbox"
                        name={`field-inline-${index}-${fieldIndex}`}
                        checked={field.inline}
                        onChange={(e) =>
                          handleFieldChange(
                            index,
                            fieldIndex,
                            "inline",
                            e.target.checked
                          )
                        }
                      />
                      Inline
                    </label>
                    <Button
                      className="ml-2"
                      type="button"
                      variant="destructive"
                      onClick={() => handleRemoveField(index, fieldIndex)}
                    >
                      Remove Field
                    </Button>
                  </div>
                ))}
                <Button
                  className="my-2"
                  type="button"
                  variant="secondary"
                  onClick={() => handleAddField(index)}
                >
                  Add Field
                </Button>
                <Button
                  className="my-2"
                  type="button"
                  variant="destructive"
                  onClick={() => handleRemoveEmbed(index)}
                >
                  Remove Embed
                </Button>
              </div>
            ))}
            <Button
              className="my-2"
              type="button"
              variant="secondary"
              onClick={handleAddEmbed}
            >
              Add Another Embed
            </Button>
            <Button
              className="mt-5 w-full text-white"
              type="submit"
              variant="secondary"
              disabled={loading}
            >
              {loading ? "Creating Webhook..." : "Create Webhook"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateWebhook;
