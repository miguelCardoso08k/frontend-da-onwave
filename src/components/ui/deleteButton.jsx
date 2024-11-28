"use client";
import { deleteEmployee } from "@/services/api";
import { Button } from "./button";

export const DeleteButton = ({ id, employeeId, token }) => {
  const handleDelete = async () => {
    const res = await deleteEmployee(id, token, employeeId);

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
