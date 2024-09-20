
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Form from "./components/Form";
import Banner from "./components/Banner"
import  Table  from "./components/Table";


export default function Home() {
  return (
    <div className="h-min">
            <Banner />
            <Form />
            <Table />
    </div>
  );
}
