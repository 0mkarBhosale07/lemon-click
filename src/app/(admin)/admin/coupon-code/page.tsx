import React from "react";
import CouponTable from "./CopuponTable";
import CreateCoupon from "./CreateCoupon";

const CouponCodePage = () => {
  return (
    <div>
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold">Coupon Codes</h1>
      </div>
      <div className="create-form flex justify-center mt-5">
        <CreateCoupon />
      </div>
      <div className="flex justify-center mt-10">
        <CouponTable />
      </div>
    </div>
  );
};

export default CouponCodePage;
