import * as React from "react";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

interface TreeNode {
  itemId: string;
  label: string;
  children?: TreeNode[];
}

const DragDropViewTreeList = () => {
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
            {
              itemId: "pickers-cihuyy",
              label: "@mui/x-date-pickers",
              children: [
                { itemId: "starmen", label: "starmen" },
                { itemId: "starboy", label: "starboy" },
              ],
            },
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

  const [draggedItem, setDraggedItem] = React.useState<TreeNode | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dropInfo, setDropInfo] = React.useState<{
    draggedItem: TreeNode | null;
    targetItem: TreeNode | null;
  }>({
    draggedItem: null,
    targetItem: null,
  });

  React.useEffect(() => {
    // This effect runs only once after the component mounts
    console.log("Tree data loaded:", treeData);
    // Perform any other actions you need here, such as initializing data or fetching related information
  }, [treeData]); // Empty dependency array means this effect runs only once

  const handleDragStart = (
    event: React.DragEvent<HTMLLIElement>,
    item: TreeNode
  ) => {
    event.stopPropagation();
    setDraggedItem(item);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("application/json", JSON.stringify(item));
  };

  const handleDragOver = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (
    event: React.DragEvent<HTMLElement>,
    targetItem: TreeNode | null
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (!draggedItem) {
      return;
    }

    if (targetItem && draggedItem.itemId === targetItem.itemId) {
      return;
    }

    if (targetItem && isDescendant(draggedItem, targetItem.itemId)) {
      return;
    }

    const updatedTreeData = moveSubtree(
      treeData,
      draggedItem.itemId,
      targetItem ? targetItem.itemId : null
    );
    setTreeData(updatedTreeData);
    setDraggedItem(null);

    setDropInfo({ draggedItem, targetItem });
    setDialogOpen(true);
  };

  const isDescendant = (parent: TreeNode, targetItemId: string): boolean => {
    if (parent.itemId === targetItemId) {
      return true;
    }

    if (parent.children) {
      return parent.children.some((child) => isDescendant(child, targetItemId));
    }

    return false;
  };

  const moveSubtree = (
    items: TreeNode[],
    draggedItemId: string,
    targetItemId: string | null
  ): TreeNode[] => {
    const clonedItems = JSON.parse(JSON.stringify(items)) as TreeNode[];

    const [draggedParent, draggedIndex] = findParentAndIndex(
      clonedItems,
      draggedItemId
    );

    if (draggedIndex !== -1) {
      const [removedItem] = draggedParent.splice(draggedIndex, 1);

      if (targetItemId === null) {
        clonedItems.push(removedItem);
      } else {
        const [targetParent, targetIndex] = findParentAndIndex(
          clonedItems,
          targetItemId
        );

        if (!targetParent[targetIndex].children) {
          targetParent[targetIndex].children = [];
        }

        targetParent[targetIndex].children!.push(removedItem);
      }
    }

    return clonedItems;
  };

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

  const handleClick = (item: TreeNode) => {
    console.log(item, "eriqh item");
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  function renderTreeItem(item: TreeNode) {
    return (
      <TreeItem
        key={item.itemId}
        itemId={item.itemId}
        label={item.label}
        onDragStart={(e) => handleDragStart(e, item)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, item)}
        onClick={() => handleClick(item)}
        draggable
      >
        {item.children && item.children.map(renderTreeItem)}
      </TreeItem>
    );
  }

  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView
        defaultExpandedItems={["pickers", "pickers-pro", "pickers-cihuyy"]}
        defaultSelectedItems={"starmen"}
      >
        {treeData.map((item) => renderTreeItem(item))}
      </SimpleTreeView>

      {/* Root level drop area */}
      <Box
        component="div" // Specify that Box should be rendered as a div
        sx={{ minHeight: 50, border: "1px dashed gray", marginTop: 2 }}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, null)}
      >
        Drop here to move to root level
      </Box>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Item Dropped</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have moved the item{" "}
            <strong>{dropInfo.draggedItem?.label}</strong> to{" "}
            <strong>{dropInfo.targetItem?.label ?? "root level"}</strong>.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DragDropViewTreeList;
