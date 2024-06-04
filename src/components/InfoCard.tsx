import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FaRocket,
  FaGaugeHigh,
  FaPencil,
  FaCreativeCommonsNc,
} from "react-icons/fa6";

export function InfoCard() {
  return (
    <div className="card-infos grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      <div className="mx-auto">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              <FaRocket className="inline-block mr-2" /> Fast Redirection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h1>
              Experience instant redirection to your app with our platform. We
              ensure a seamless transition, keeping your users engaged and
              satisfied with quick access to your content. No delays, just fast
              and efficient navigation.
            </h1>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              <FaCreativeCommonsNc className="inline-block mr-2" /> No Ads
              Popups
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h1>
              Enjoy an ad-free experience with our service. We eliminate all
              popups and advertisements, providing a clean and uninterrupted
              user journey. Focus on what matters most—your content—without any
              distractions.
            </h1>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              <FaGaugeHigh className="inline-block mr-2" /> Complete Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h1>
              Gain valuable insights with our detailed analytics dashboard.
              Track link performance, user behavior, and more to make informed
              decisions. Our comprehensive analytics help you optimize
              strategies effectively.
            </h1>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              <FaPencil className="inline-block mr-2" /> Customization Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h1>
              Personalize your links to match your brand with our extensive
              customization options. Customize URLs, add unique identifiers, and
              tailor link appearances. Stand out and create memorable links that
              reflect your brand’s identity.
            </h1>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
