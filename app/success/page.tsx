"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const method = searchParams.get("method");

  useEffect(() => {
    if (method) {
      console.log(`Payment successful via ${method}`);
    }
  }, [method]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <CheckCircle className="w-16 h-16 text-green-500" />
            </motion.div>
          </div>
          <CardTitle className="text-center text-2xl font-bold text-green-700">
            Payment Successful!
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="text-center text-gray-600">
              <p className="mb-2">
                Thank you for your payment. Your transaction has been completed
                successfully.
              </p>
              {method && (
                <p className="text-sm text-gray-500">
                  Payment method:{" "}
                  <span className="font-semibold">{method}</span>
                </p>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button variant="outline" asChild className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function PaymentSuccess() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
