import React, { Suspense } from "react";
import BrandSelector from "../../components/select-brand";
import Loader from "../../components/Loader";

const selectBrand = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <BrandSelector />
    </Suspense>
  );
};

export default selectBrand;
