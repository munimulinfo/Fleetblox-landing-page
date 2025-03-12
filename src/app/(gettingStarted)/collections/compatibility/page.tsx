"use client";
import React, { Suspense } from "react";
import Compatibility from "../../components/compatibility";

const page = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Compatibility />
      </Suspense>
    </>
  );
};

export default page;
