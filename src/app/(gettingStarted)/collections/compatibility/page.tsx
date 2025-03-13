import React, { Suspense } from "react";
import Compatibility from "../../components/compatibility";
import Loader from "../../components/Loader";

const page = () => {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Compatibility />
      </Suspense>
    </>
  );
};

export default page;
