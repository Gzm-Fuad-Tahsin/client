"use client";

import React, { useCallback, useContext, useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
} from "@nextui-org/react";
import AllProductContext from "@/context/AllProductContext";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { PiVanLight } from "react-icons/pi";
import { delAnyItem } from "@/utils/api/product";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const INITIAL_VISIBLE_COLUMNS = [
  "name",
  "layout",
  "price",
  "status",
  "actions",
];

export default function ProductUITable() {
  const { products, refetch, handelAction } = useContext(AllProductContext);

  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = useState("all");

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "name",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);
  const router = useRouter();

  const hasSearchFilter = Boolean(filterValue);

  const columns = [
    { uid: "name", name: "Name", sortable: true },
    { uid: "layout", name: "Layout", sortable: true },
    { uid: "price", name: "Price", sortable: true },
    { uid: "status", name: "Status", sortable: true },
    { uid: "actions", name: "Actions", sortable: false },
  ];

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);
  //  action fuction

  /*  */
  /* const handelAction = async (value, id, api, title, viewUrl, editUrl) => {
    if (value === "delete") {
      if (id) {
        const deleteItems = await delAnyItem(id, api);
        if (deleteItems?.status === 200) {
          toast.success(`${title} is deleted`);
          refetch;
          router.refresh();
        } else {
          toast.error(`Have some problem to deleted ${title}`);
        }
      }
    }
    if (value === "view") {
      router.replace(`${viewUrl}${id}`);
    }
    if (value === "edit") {
      router.replace(`${editUrl}?id=${id}`);
    }
  }; */

  const filteredItems = useMemo(() => {
    let filteredProducts = [...products];
    if (hasSearchFilter) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          product.layout.toLowerCase().includes(filterValue.toLowerCase()) ||
          product.tags.some((tag) =>
            tag.toLowerCase().includes(filterValue.toLowerCase())
          ) ||
          product.categories.some((category) =>
            category.toLowerCase().includes(filterValue.toLowerCase())
          )
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== 0) {
      filteredProducts = filteredProducts.filter((product) =>
        Array.from(statusFilter).includes(product.status)
      );
    }

    return filteredProducts;
  }, [products, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((product, columnKey) => {
    const cellValue = product[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: product.image && product.image[0],
            }}
            description={product.name}
            name={cellValue}
          >
            {product.description}
          </User>
        );
      case "layout":
        return cellValue;
      case "price":
        return `$${cellValue}`;
      case "status":
        return (
          <Chip className="capitalize" size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center justify-end gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <HiDotsVertical className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  onClick={() =>
                    handelAction(
                      "view",
                      product._id,
                      "/admin/product/product-delate/",
                      "product",
                      "/products/",
                      "/dashboard/admin/products/upload"
                    )
                  }
                >
                  View
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    handelAction(
                      "edit",
                      product._id,
                      "/admin/product/product-delate/",
                      "product",
                      "/products/",
                      "/dashboard/admin/products/upload"
                    )
                  }
                >
                  Edit
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    handelAction(
                      "delete",
                      product._id,
                      "/admin/product/product-delate/",
                      "product",
                      "/products/",
                      "/dashboard/admin/products/upload/"
                    )
                  }
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search..."
            startContent={<FaSearch />}
            value={filterValue}
            onClear={() => onClear()}
            // onChange={(e) => setCategory(e.target.value)}
            onValueChange={onSearchChange}
          />
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<FaChevronDown className="text-small" />}
                variant="flat"
              >
                Columns
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={visibleColumns}
              selectionMode="multiple"
              onSelectionChange={setVisibleColumns}
            >
              {columns.map((column) => (
                <DropdownItem key={column.uid} className="capitalize">
                  {capitalize(column.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-default-400 text-small">
            Total {products.length} products
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    products.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="flex items-center justify-between px-2 py-2">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      className="scrollbar"
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No products found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
