"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const paymentMethods = [
  { name: "eSewa", color: "bg-green-500" },
  { name: "Khalti", color: "bg-purple-500" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

export default function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const { push } = useRouter();

  const handlePayment = (method: string) => {
    switch (method) {
      case "eSewa":
        push("/esewa-payment");
        break;
      case "Khalti":
        push("/khalti-payment");
        break;
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-md mx-auto p-4"
    >
      <Card className="w-full">
        <CardHeader>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="text-2xl">Choose Payment Method</CardTitle>
            <CardDescription className="mt-2">
              Select your preferred payment option
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="grid gap-4">
          <AnimatePresence mode="wait">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal relative overflow-hidden transition-all duration-300",
                    selectedMethod === method.name &&
                      "border-2 bg-gray-200/60 border-primary"
                  )}
                  onClick={() => setSelectedMethod(method.name)}
                >
                  <motion.div
                    className={`mr-2 h-4 w-4 rounded-full ${method.color}`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  {method.name}
                  {selectedMethod === method.name && (
                    <motion.div
                      className="absolute inset-0 bg-primary/5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </CardContent>

        <CardFooter>
          <AnimatePresence mode="wait">
            {selectedMethod && (
              <motion.div
                className="w-full"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => handlePayment(selectedMethod)}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    Pay with {selectedMethod}
                  </motion.span>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
