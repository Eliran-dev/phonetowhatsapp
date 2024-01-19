"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WhatsappIcon from "../public/whatsapp-social-media-svgrepo-com.svg";
import { ClipboardPasteIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatNumber = (number: String) => {
    const whitespaceRemoved = number.replace(/\-/g, "");
    return whitespaceRemoved;
  };
  const isValidNumber = (number: String) => {
    const formattedNumber = formatNumber(number);
    if (formattedNumber.length == 10 || formattedNumber.length == 9) {
      console.log("good");
      return true;
    }

    return false;
  };

  const pastePhoneNumber = async () => {
    const number = await navigator.clipboard.readText()
    setPhoneNumber(number)
  }

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex">
      <Button className="bg-white hover:bg-white" onClick={() => pastePhoneNumber()}>
        <ClipboardPasteIcon color="black"/>
          </Button>
        <Input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="05X-XXXXXXX"
        ></Input>

        <Link
          href={
            isValidNumber(phoneNumber) ? `https://wa.me/972${formatNumber(phoneNumber)}` : {}
          }
          className="ml-3"
        >
          <Button className="bg-white">
            <Image src={WhatsappIcon} alt="sd" height={60} width={60} />
          </Button>
        </Link>
      </div>
    </main>
  );
}
