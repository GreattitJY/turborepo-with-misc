"use client";

import { useState } from "react";
import Child from "./child";

interface PageProps {}

export default function Page({}: PageProps) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((pre) => pre + 1)}>click count: {count}</button>
      <Child />
    </div>
  );
}
