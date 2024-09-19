
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Form from "./components/Form";
import Banner from "./components/Banner"


export default function Home() {
  return (
    <div className="h-min">
            <Banner />
            <Form />
    </div>
  );
}
