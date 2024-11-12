import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const Searchh = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Search your documents</h1>
      
      <div className="relative w-full max-w-xs">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <Input 
          placeholder="Search your documents" 
          type="text" 
          className="pl-10 rounded-2xl" 
        />
      </div>
    </div>
  );
};

export default Searchh;
