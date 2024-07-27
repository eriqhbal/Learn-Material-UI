import * as React from "react";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

interface TreeNode {
  itemId: string;
  label: string;
  children?: TreeNode[];
}

const DragDropViewTreeList = () => {
  // Initial tree data
  const [treeData, setTreeData] = React.useState<TreeNode[]>([
    {
      itemId: "grid",
      label: "Data Grid",
      children: [
        { itemId: "grid-community", label: "@mui/x-data-grid" },
        { itemId: "grid-pro", label: "@mui/x-data-grid-pro" },
        { itemId: "grid-premium", label: "@mui/x-data-grid-premium" },
      ],
    },
    {
      itemId: "pickers",
      label: "Date and Time Pickers",
      children: [
        { itemId: "pickers-community", label: "@mui/x-date-pickers" },
        {
          itemId: "pickers-pro",
          label: "@mui/x-date-pickers-pro",
          children: [
            { itemId: "pickers-cihuyy", label: "@mui/x-date-pickers" },
          ],
        },
      ],
    },
    {
      itemId: "charts",
      label: "Charts",
      children: [{ itemId: "charts-community", label: "@mui/x-charts" }],
    },
    {
      itemId: "tree-view",
      label: "Tree View",
      children: [{ itemId: "tree-view-community", label: "@mui/x-tree-view" }],
    },
  ]);

  // Track the currently dragged item
  const [draggedItem, setDraggedItem] = React.useState<TreeNode | null>(null);

  // Function to handle drag start
  const handleDragStart = (
    event: React.DragEvent<HTMLLIElement>,
    item: TreeNode
  ) => {
    event.stopPropagation();
    setDraggedItem(item);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("application/json", JSON.stringify(item));
  };

  // Function to handle drag over
  const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  // Function to handle drop
  const handleDrop = (
    event: React.DragEvent<HTMLLIElement>,
    targetItem: TreeNode
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (!draggedItem || draggedItem.itemId === targetItem.itemId) {
      return;
    }

    // Prevent dropping on a descendant
    if (isDescendant(draggedItem, targetItem.itemId)) {
      return;
    }

    const updatedTreeData = moveSubtree(
      treeData,
      draggedItem.itemId,
      targetItem.itemId
    );
    setTreeData(updatedTreeData);
    setDraggedItem(null);
  };

  // Check if the target item is a descendant of the dragged item
  const isDescendant = (parent: TreeNode, targetItemId: string): boolean => {
    if (parent.itemId === targetItemId) {
      return true;
    }

    if (parent.children) {
      return parent.children.some((child) => isDescendant(child, targetItemId));
    }

    return false;
  };

  // Utility function to move entire subtree
  const moveSubtree = (
    items: TreeNode[],
    draggedItemId: string,
    targetItemId: string
  ): TreeNode[] => {
    // Clone the tree data
    const clonedItems = JSON.parse(JSON.stringify(items)) as TreeNode[];

    // Find the parent and index of the dragged item
    const [draggedParent, draggedIndex] = findParentAndIndex(
      clonedItems,
      draggedItemId
    );

    // Find the parent and index of the target item
    const [targetParent, targetIndex] = findParentAndIndex(
      clonedItems,
      targetItemId
    );

    if (draggedIndex !== -1 && targetIndex !== -1) {
      // Remove the dragged item subtree from its original location
      const [removedItem] = draggedParent.splice(draggedIndex, 1);

      // Append the dragged item subtree to the target item's children
      if (!targetParent[targetIndex].children) {
        targetParent[targetIndex].children = [];
      }

      targetParent[targetIndex].children!.push(removedItem);
    }

    return clonedItems;
  };

  // Utility function to find parent and index
  const findParentAndIndex = (
    items: TreeNode[],
    itemId: string
  ): [TreeNode[], number] => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].itemId === itemId) {
        return [items, i];
      }
      if (items[i].children) {
        const [parent, index] = findParentAndIndex(items[i].children!, itemId);
        if (index !== -1) {
          return [parent, index];
        }
      }
    }
    return [[], -1];
  };

  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        {treeData.map((item) => renderTreeItem(item))}
      </SimpleTreeView>
    </Box>
  );

  // Render TreeItem with recursive function
  function renderTreeItem(item: TreeNode) {
    return (
      <TreeItem
        key={item.itemId}
        itemId={item.itemId}
        label={item.label}
        onDragStart={(e) => handleDragStart(e, item)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, item)}
        draggable
      >
        {item.children && item.children.map(renderTreeItem)}
      </TreeItem>
    );
  }
};

export default DragDropViewTreeList;
