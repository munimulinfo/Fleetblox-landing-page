import React from "react";
import ModelSelector from "./page-1";

export default function Page({ params }: { params: { model: string } }) {
  // params here is already resolved

  console.log(params);
  return <ModelSelector params={params} />;
}
