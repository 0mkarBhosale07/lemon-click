import React from "react";
import { createWebhook, getWebhook } from "@/actions/admin.actions";
import WebhookTable from "./WebhookTable";
import CreateWebhook from "./CreateWebhook";
import SendWebhook from "./SendWebhook";

const WebhookPage = () => {
  return (
    <div>
      {" "}
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Webhooks</h1>
      </div>
      <main>
        <div className="createLink mt-10">
          <div className="createLink flex justify-center">
            <CreateWebhook />
          </div>
        </div>
        <div className="createLink mt-10">
          <div className="createLink flex justify-center">
            <SendWebhook />
          </div>
        </div>
        <div className="linktable mt-10">
          <WebhookTable />
        </div>
      </main>
    </div>
  );
};

export default WebhookPage;
