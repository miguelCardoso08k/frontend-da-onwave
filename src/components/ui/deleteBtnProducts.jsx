"use client";
import { deleteProduct } from "@/services/api";
import { Button } from "./button";

export const DeleteButtonProducts = ({
  id,
  token,
  barbershopId,
  productId,
}) => {
  const handleDelete = async () => {
    const res = await deleteProduct(id, token, barbershopId, productId);
    if (res) {
      window.location.reload();
    }
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Confirmar
    </Button>
  );
};
