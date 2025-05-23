import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const CategoryCreation = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleChange = (e) => {
    setCategoryName(e.target.value);
    console.log(e.target.value);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-semibold">Category Creation</h2>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 max-w-64">
            <Label>Category Name </Label>
            <Input
              value={categoryName}
              name="Category Name"
              placeholder="Enter Category Name"
              onChange={handleChange}
            />
            <span className="text-sm text-right text-muted-foreground">40</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="cursor-pointer">
          <Plus /> Create Category
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCreation;
