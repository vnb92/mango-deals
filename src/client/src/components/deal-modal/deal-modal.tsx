import React, { FC } from "react";
import { observer } from "mobx-react";
import { SuccessScreen } from "./components/success-screen";
import { DealForm } from "./components/deal-form";
import styles from "./deal-modal.css";
import { dealFormStore } from "@/stores";
import { Modal } from "@/ui-kit/modal";
import { i18n } from "@/i18n";

export const DealModal: FC = observer(() => {
  const handleClose = () => {
    dealFormStore.closeModal();
  };

  return (
    <Modal
      show={dealFormStore.showModal}
      title={dealFormStore.showSuccessScreen ? "" : i18n.makeDeal}
      onClose={handleClose}
    >
      <div className={styles.content}>
        {!dealFormStore.showSuccessScreen && <DealForm />}
        <SuccessScreen onClick={handleClose} show={dealFormStore.showSuccessScreen} />
      </div>
    </Modal>
  );
});
