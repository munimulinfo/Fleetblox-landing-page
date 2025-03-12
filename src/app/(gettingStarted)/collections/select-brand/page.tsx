"use client";
import React, { Suspense } from "react";
import BrandSelector from "../../components/select-brand";

const selectBrand = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrandSelector />
    </Suspense>
  );
};

export default selectBrand;
