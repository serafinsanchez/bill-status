import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const BillCard = ({ bill, onClick }) => {
  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick(bill)}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-blue-600">{bill.bill_number}</h3>
            <h4 className="text-lg mt-1">{bill.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{bill.summary}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            bill.status === 'Signed by Governor' ? 'bg-green-100 text-green-800' :
            bill.status === 'Dead' ? 'bg-red-100 text-red-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {bill.status}
          </span>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p><strong>Last Action:</strong> {bill.last_action_text}</p>
          <p><strong>Date:</strong> {new Date(bill.last_action_date).toLocaleDateString()}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BillCard;