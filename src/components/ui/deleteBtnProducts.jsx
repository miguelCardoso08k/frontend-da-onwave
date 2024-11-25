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
    const result = await deleteProduct(id, token, barbershopId, productId);
    console.log(result);
  };

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Confirmar
    </Button>
  );
};
