import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface BusinessHoursProps {
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

export default function BusinessHours({ hours }: BusinessHoursProps) {
  const days = [
    'monday', 'tuesday', 'wednesday', 'thursday', 
    'friday', 'saturday', 'sunday'
  ];

  const dayNames = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday'
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>Hours of Operation</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {days.map((day, index) => (
            <div key={day} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
              <span className="font-medium text-gray-900">
                {dayNames[index]}
              </span>
              <span className="text-gray-600">
                {hours[day as keyof typeof hours]}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
