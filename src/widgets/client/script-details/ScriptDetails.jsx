import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Collapse,
  Divider,
  Button,
  Card,
} from "@mui/material";
// import FileUpload from "./FileUpload"; // already implemented
// import Faq from "./Faq"; // already implemented
import Modal from "../../../shared/Modal/Modal";
import FaqAccordion from "../../../shared/Faq/FaqContent";
import FileUpload from "../../../shared/FileUploader/FileUpload";
// import Modal from "./YourModal"; // modal for input forms
import AddIcon from "@mui/icons-material/Add";
import LinkIcon from "@mui/icons-material/Link";
// import ProductInfo from "./ProductInfo";
import ProductInfoModal from "./ProductInfoModal";
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
export default function ScriptDetailsSidebar() {
  const modalRef = useRef(null);
  const [modalType, setModalType] = useState(null);
  const isOpen = Boolean(modalType);

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);
  return (
    <Box sx={{ p: 3, borderRadius: 2 }}>
      {/* Header row with ID and confirm button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "5px",
          mb: 3,
          p: 2,
        }}
        className="bg-f6f7f9"
      >
        <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
          <span style={{ opacity: 0.5 }}>Скрипт</span> ID: 345355
        </Typography>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "25px",
              p: 1,
              height: "35px",
              width: "45px",
              minWidth: "45px",
            }}
            className="btn btn-outline-light"
            onClick={() => openModal("description")}
          >
            <AddIcon />
          </Button>
          <Button
            sx={{
              borderRadius: "25px",
              p: 1,
              height: "35px",
              width: "45px",
              minWidth: "45px",
            }}
            onClick={() => openModal("correction")}
            variant="outlined"
            className="btn btn-outline-light"
          >
            <LinkIcon />
          </Button>
          <Button variant="contained" className="btn btn-primary">
            Підтвердити
          </Button>
        </Box>
      </Box>

      {/* Product info */}
      <>
        <Card
          sx={{ display: "flex", gap: 3, alignItems: "start", mb: 3, p: 3 }}
        >
          <Card
            sx={{
              width: 300,
              height: 220,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1,
            }}
          >
            <FileUpload />
          </Card>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ flex: 1, maxWidth: "426px" }}>
              <Typography variant="h6" sx={{ fontWeight: 500, mt: 2 }}>
                Apple MacBook Pro 16.2” with Liquid Retina XDR Display, M2 Max
                Chip with 12-Core CPU
              </Typography>
              <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
                <Button
                  variant="outlined"
                  onClick={() => openModal("attribute")}
                >
                  Додати атрибут
                </Button>
                <Button variant="text" onClick={() => openModal("quantity")}>
                  + Кількість
                </Button>
              </Box>
            </Box>

            <Typography variant="h6" sx={{ fontSize: 20, fontWeight: 600 }}>
              $3,499
            </Typography>
          </Box>
        </Card>

        <ProductInfoModal
          open={isOpen}
          onClose={closeModal}
          modalType={modalType}
          modalRef={modalRef}
        />
      </>

      {/* Sections */}
      <FaqAccordion items={faqData} />
    </Box>
  );
}
