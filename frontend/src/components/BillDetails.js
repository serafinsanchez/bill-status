import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const BillDetails = ({ bill, onClose }) => {
  if (!bill) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{bill.bill_number}</span>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-4">{bill.title}</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Summary</h4>
              <p className="text-gray-600">{bill.summary}</p>
            </div>
            <div>
              <h4 className="font-semibold">Sponsors</h4>
              <ul className="list-disc list-inside">
                {bill.sponsors.map((sponsor, index) => (
                  <li key={index}>{sponsor}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Committees</h4>
              <ul className="list-disc list-inside">
                {bill.committees.map((committee, index) => (
                  <li key={index}>{committee}</li>
                ))}
              </ul>
            </div>
            {bill.fiscal_notes?.length > 0 && (
              <div>
                <h4 className="font-semibold">Fiscal Notes</h4>
                <ul className="list-disc list-inside">
                  {bill.fiscal_notes.map((note, index) => (
                    <li key={index}>
                      <a 
                        href={note.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {note.title} ({new Date(note.date).toLocaleDateString()})
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillDetails;