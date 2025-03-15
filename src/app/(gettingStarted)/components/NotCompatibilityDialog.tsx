"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
const NotCompatibilityDialog = ({ title }: { title: string }) => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="py-3 w-full text-[14px] font-semibold text-[#7D7D7D]">
          {title}
        </button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[600px] p-2 sm:p-4">
        <div className="flex flex-col items-center py-[60px] px-10">
          <div
            className="p-[10px] rounded-full w-fit"
            style={{ background: "rgba(255, 0, 0, 0.06)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M19.9963 27.717C20.3635 27.717 20.6692 27.5964 20.9133 27.3552C21.1574 27.114 21.2795 26.8098 21.2795 26.4425C21.2795 26.0753 21.1589 25.7696 20.9177 25.5255C20.6765 25.2814 20.3723 25.1593 20.005 25.1593C19.6378 25.1593 19.3321 25.2799 19.088 25.5211C18.8439 25.7623 18.7218 26.0665 18.7218 26.4338C18.7218 26.801 18.8424 27.1067 19.0836 27.3508C19.3248 27.5949 19.629 27.717 19.9963 27.717ZM20.018 21.7955C20.3387 21.7955 20.6131 21.6814 20.8412 21.453C21.0693 21.2246 21.1833 20.9489 21.1833 20.6257V13.092C21.1833 12.775 21.0689 12.5021 20.84 12.2733C20.6111 12.0445 20.3381 11.9302 20.0209 11.9302C19.6976 11.9302 19.4219 12.0445 19.1938 12.2733C18.9657 12.5021 18.8517 12.775 18.8517 13.092V20.6257C18.8517 20.9489 18.9659 21.2246 19.1944 21.453C19.4228 21.6814 19.6974 21.7955 20.018 21.7955ZM20.0045 35.4974C17.8614 35.4974 15.8466 35.0901 13.9601 34.2755C12.0736 33.461 10.4326 32.3555 9.03707 30.9591C7.64157 29.5627 6.53717 27.923 5.72386 26.0401C4.91056 24.1572 4.50391 22.1453 4.50391 20.0045C4.50391 17.8614 4.9112 15.8466 5.72578 13.9601C6.54034 12.0736 7.64582 10.4326 9.04224 9.03707C10.4386 7.64157 12.0783 6.53717 13.9612 5.72386C15.8441 4.91056 17.856 4.50391 19.9968 4.50391C22.1399 4.50391 24.1547 4.9112 26.0412 5.72578C27.9277 6.54034 29.5687 7.64582 30.9642 9.04224C32.3597 10.4386 33.4641 12.0783 34.2774 13.9612C35.0908 15.8441 35.4974 17.856 35.4974 19.9968C35.4974 22.1399 35.0901 24.1547 34.2755 26.0412C33.461 27.9277 32.3555 29.5687 30.9591 30.9642C29.5627 32.3597 27.923 33.4641 26.0401 34.2774C24.1572 35.0908 22.1453 35.4974 20.0045 35.4974Z"
                fill="#FF0000"
              />
            </svg>
          </div>
          <DialogTitle className="text-[22px] font-bold text-[#04082C] mt-[10px] font-openSans">
            Your Fleet is Incompatible!
          </DialogTitle>
          <p className="text-center font-openSans text-[#7D7D7D] leading-5">
            Unfortunately, your fleet isn’t compatible with our platform yet.
            We’re working to expand compatibility. Stay with us for all kind of
            future updates.
          </p>
        </div>
        <div className="px-10 pb-[60px]">
          <h3 className="text-[14px] font-openSans mb-[10px] font-bold leading-5 text-[#7D7D7D]">
            Join Our Newsletter
          </h3>
          <div>
            <div className="flex items-center gap-[10px]">
              <input
                type="email"
                id="email"
                required
                name="email"
                maxLength={50}
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 rounded bg-[#F7F7F7] px-4 font-openSans text-[14px] text-[#04082C] outline-none placeholder:text-[#7D7D7D]"
              />
              <button className="rounded-md bg-[#2D65F2] text-[14px] font-semibold text-[#FFF] py-3 px-5">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* <div className="p-2">
            <div className="mt-5 grid w-full grid-cols-2 gap-[10px]">
              <DialogClose asChild>
                <Button className="h-[38px] rounded-md bg-[#F5F9FC] text-[14px] font-semibold text-[#2D65F2] hover:bg-black hover:text-[#FFF]">
                  Cancel
                </Button>
              </DialogClose>
              <Button className="h-[38px] rounded-md bg-[#2D65F2] text-[14px] font-semibold text-[#FFF]">
                Proceed
              </Button>
            </div>
          </div> */}
      </DialogContent>
    </Dialog>
  );
};

export default NotCompatibilityDialog;
