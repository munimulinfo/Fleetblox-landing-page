"use client";
import Container from "@/components/ui/Container";
import { faqData } from "@/static_data/data";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const FAQSection = () => {
  return (
    <Container>
      <div className="">
        <h2 className="text-[36px] text-[#04082C] font-montserrat font-bold text-center mb-10">
          Your Questions, Answered
        </h2>
        <Accordion.Root type="single" collapsible>
          {faqData?.faq.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="border-b"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between items-center w-full p-5 text-left text-[18px] font-bold font-openSans text-[#333]hover:bg-gray-100 transition">
                  {faq.question}
                  <ChevronDownIcon className="w-5 h-5 transition-transform duration-200 AccordionChevron" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="p-4 text-gray-600">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <div className="mt-4 ml-[18px]">
          <a
            href="#"
            className="text-[#2D65F2] font-openSans text-[16px] font-bold"
          >
            Have More Questions?
          </a>
        </div>
      </div>
    </Container>
  );
};

export default FAQSection;
