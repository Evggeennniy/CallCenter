import { Dialog, DialogContent } from "@mui/material";
import AttributeForm from "./AttributeForm";
import QuantityForm from "./QuantityForm";
import CorrectionForm from "./CorrectionForm";
import InfoDescriptionForm from "./InfoDescriptionForm";

function ProductInfoModal({ open, onClose, modalType, modalRef }) {
  const renderContent = () => {
    switch (modalType) {
      case "quantity":
        return <QuantityForm onClose={onClose} />;
      case "attribute":
        return <AttributeForm onClose={onClose} />;
      case "correction":
        return <CorrectionForm onClose={onClose} />;
      case "description":
        return <InfoDescriptionForm onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      ref={modalRef}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent>{renderContent()}</DialogContent>
    </Dialog>
  );
}

export default ProductInfoModal;
