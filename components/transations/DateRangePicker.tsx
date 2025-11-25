import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [showStart, setShowStart] = useState<boolean>(false);
  const [showEnd, setShowEnd] = useState<boolean>(false);

  const showDatepicker = (isStart: boolean): void => {
    if (isStart) {
      setShowStart(true);
    } else {
      setShowEnd(true);
    }
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined, isStart: boolean): void => {
    const currentDate = selectedDate || (isStart ? startDate : endDate);
    if (isStart) {
      setShowStart(false);
      setStartDate(currentDate);
    } else {
      setShowEnd(false);
      setEndDate(currentDate);
    }
  };

  const formatDate = (date: Date): string => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day}/${year}`;
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
        {formatDate(startDate)} - {formatDate(endDate)}
      </Text>

      <TouchableOpacity onPress={() => showDatepicker(true)}>
        <Text>Pick Start Date</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => showDatepicker(false)}>
        <Text>Pick End Date</Text>
      </TouchableOpacity>

      {showStart && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => handleDateChange(event, selectedDate, true)}
        />
      )}

      {showEnd && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => handleDateChange(event, selectedDate, false)}
        />
      )}
    </View>
  );
};

export default DateRangePicker;
