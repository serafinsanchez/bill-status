import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StatsChart = ({ data }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Monthly Bill Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="introduced_count" 
                name="Introduced" 
                stroke="#3B82F6" 
              />
              <Line 
                type="monotone" 
                dataKey="signed_count" 
                name="Signed" 
                stroke="#10B981" 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsChart;