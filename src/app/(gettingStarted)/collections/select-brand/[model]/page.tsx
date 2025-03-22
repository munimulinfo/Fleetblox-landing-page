/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ModelSelector from "./page-1";

export default function Page({ params }: { params: any }) {
  // params here is already resolved

  // console.log(params);
  return <ModelSelector params={params} />;
}
