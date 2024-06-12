import React from "react";
import { CustomerInformationForm } from "@components/Forms";
import { Container } from "@components";
import {
  warrantyDuration,
  notificationOfIssuance,
  damageData,
  limitationsOfLiability,
  maintenanceData,
} from "@assets/data";
const WarrantyInformation = () => {
  return (
    <Container className="my-6 mx-10 p-6 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <h1 className="text-black text-xl font-semibold mb-4">
        CUSTOMER INFORMATION
      </h1>
      <CustomerInformationForm />
      <h2 className="text-black text-lg font-semibold mb-2">
        Warranty Duration:
      </h2>
      <ul className="list-disc pl-6">
        {warrantyDuration?.map((items) => (
          <li key={items?.id} className="mb-2">
            {items?.text}
          </li>
        ))}
      </ul>
      <h2 className="text-black text-lg font-semibold mb-2">
        Notification of Issues:
      </h2>
      <ul className="list-disc pl-6">
        {notificationOfIssuance?.map((items) => (
          <li key={items?.id} className="mb-2">
            {items?.text}
          </li>
        ))}
      </ul>
      <h2 className="text-black text-lg font-semibold mb-2">
        Exclusions to Coverage:
      </h2>
      <ul className="list-disc pl-6">
        {damageData?.map((items) => (
          <li key={items?.id} className="mb-2">
            {items?.text}
          </li>
        ))}
      </ul>
      <h2 className="text-black text-lg font-semibold mb-2">
        Limitations of Liability:
      </h2>
      <ul className="list-disc pl-6">
        {limitationsOfLiability?.map((items) => (
          <li key={items?.id} className="mb-2">
            {items?.text}
          </li>
        ))}
      </ul>
      <h2 className="text-black text-lg font-semibold mb-2">
        Owner’s Responsibilities:
      </h2>
      <ul className="list-disc pl-6">
        {maintenanceData?.map((items) => (
          <li key={items?.id} className="mb-2">
            {items?.text}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default WarrantyInformation;
