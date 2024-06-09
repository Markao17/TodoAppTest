import { useState } from "react";

export default function CompletedItems({ todoList }) {
  const completedItems = todoList.filter((item) => item.completed).length;

  return <div>Completed items: {completedItems}</div>;
}
