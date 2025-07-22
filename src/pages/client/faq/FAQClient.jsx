import React from "react";
import Layout from "../Layout";
import FaqContent from "../../../shared/Faq/FaqContent";
import FeedbackCard from "../../../widgets/client/faq/FeedbackCard";
import { Box } from "@mui/material";
const faqData = [
  {
    question: "What is this platform about?",
    answer:
      "This platform is designed to help users manage tasks, track progress, and collaborate effectively.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Click on the 'Sign Up' button at the top right corner and fill out the required information.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes, our mobile app is available for both iOS and Android devices via their respective app stores.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time from the account settings.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach out to our support team through the contact form or by emailing support@example.com.",
  },
];
function FAQClient(props) {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
        }}
      >
        <FeedbackCard />
        <FaqContent items={faqData} />
      </Box>
    </Layout>
  );
}

export default FAQClient;
