import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CreditCard, Smartphone } from "lucide-react";

const PaymentInfo = () => {
  const paymentMethods = [
    {
      id: "paytm",
      label: "Paytm",
      value: "7890654321",
      icon: <Phone className="h-5 w-5 text-[#002E6E]" />,
    },
    {
      id: "googlepay",
      label: "Google Pay",
      value: "9078654321",
      icon: <Smartphone className="h-5 w-5 text-[#4285F4]" />,
    },
    {
      id: "phonepay",
      label: "PhonePe",
      value: "9807654321",
      icon: <Phone className="h-5 w-5 text-[#5F259F]" />,
    },
    {
      id: "upi",
      label: "UPI ID",
      value: "abcexample@upi",
      icon: <CreditCard className="h-5 w-5 text-[#6A1B9A]" />,
    },
  ];

  return (
    <div id="payment" className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Payment Information
          </h2>
          <p className="text-zinc-600">
            Multiple convenient payment options available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paymentMethods.map((method) => (
            <Card
              key={method.id}
              className="overflow-hidden border-zinc-100 transition-all hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-pastel-cream p-3 rounded-full">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900">
                      {method.label}
                    </h3>
                    <p className="text-zinc-600 text-sm mt-1">{method.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
