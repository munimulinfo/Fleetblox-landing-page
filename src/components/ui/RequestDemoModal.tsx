import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";

export function RequestDemoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <h1 className="cursor-pointer text-[16px] transition-all duration-300 ease-in-out hover:text-[#7D7D7D0] py-[10px] px-5 text-[#04082C]  font-openSans">
          Request Demo
        </h1>
      </DialogTrigger>
      <DialogContent
        className="max-w-[700px] w-full  rounded-[24px]"
        style={{
          boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.14)",
        }}
      >
        <DialogClose asChild>
          <div className="flex justify-end ">
            <X className="h-4 w-4 " />
          </div>
        </DialogClose>
        <DialogHeader className="-mb-[7px]">
          <DialogTitle className="text-[#04082C] text-[28px] font-bold font-montserrat flex justify-center">
            Demo Coming Soon
          </DialogTitle>
        </DialogHeader>
        <p className="text-[#333] text-center text-[14px] font-openSans leading-5">
          {`Hey there! We're committed to delivering an exceptional demo
          experience. Our team is fine-tuning every detail to ensure a seamless
          and inspiring journey through our app!`}
        </p>
        <div className="flex justify-center items-center mt-[30px] pb-[30px]">
          <Image
            src="/images/requestDemo.png"
            alt="request demo"
            width={450}
            height={400}
            className="object-contain "
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
