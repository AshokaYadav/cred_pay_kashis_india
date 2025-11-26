// hooks/useTransactions.ts
import {useState, useEffect} from 'react';
import { API_TOKEN, USER_ID } from '../../config';
import api from '../../lib/axios';
import { Alert } from 'react-native';
// import api from '../lib/axios';
// import {API_TOKEN, USER_ID} from '../config';

interface UseTransactionsProps {
  defaultType?: 'Recharges' | 'Deposits';
}

export const useTransactions = ({defaultType = 'Recharges'}: UseTransactionsProps) => {
  const [selectedItem, setSelectedItem] = useState<string>(defaultType);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  // 🔹 Fetch Wallet History
  const fetchWalletHistory = async () => {
    setLoading(true);
    try {
      const params: any = {
        page: 1,
        limit: 25,
        id: USER_ID,
        type: 'CASH',
        ladger:false,
        dateRange: {
          from: startDate || undefined,
          to: endDate || undefined,
        },
      };

      const response = await api.put('/wallet/user/history', params);
      setData(response.data?.data?.data || []);
    } catch (err: any) {
      console.error('Wallet History Error:', err.response?.data || err.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Fetch Recharges / Deposits
  const fetchData = async () => {
    setLoading(true);
    try {
      const payload: any = {limit: 20, page: 1};
      if (startDate) payload.startDate = startDate;
      if (endDate) payload.endDate = endDate;

      const res = await api.put(
        'https://api.recharge.kashishindiapvtltd.com/recharge/history',
        payload,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      );

      setData(res.data?.data?.data || []);
    } catch (err) {
      console.error('Fetch Data Error:', err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

   const fetchDataComplaints = async () => {
    setLoading(true);
    try {
      const payload: any = {
        page: 1,
        limit: 25,
        dateRange: {
          from: startDate || undefined,
          to: endDate || undefined,
        },
      };

      console.log(payload);


      const res = await api.put(
        'https://api.recharge.kashishindiapvtltd.com/ticket/recharges',
        payload,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(res);

      setData(res.data?.data?.data || []);
    } catch (err) {
      console.error('Fetch Data Error:', err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };


   // 🔹 Fetch Wallet History
  const fetchLedgerHistory = async () => {
    setLoading(true);
    try {
      const params: any = {
        page: 1,
        limit: 25,
        id: USER_ID,
        ladger:true,
        dateRange: {
          from: startDate || undefined,
          to: endDate || undefined,
        },
      };

      const response = await api.put('/wallet/user/history', params);
      setData(response.data?.data?.data || []);
    } catch (err: any) {
      console.error('Wallet History Error:', err.response?.data || err.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };





  // 🔹 Auto fetch when type changes
  useEffect(() => {
      if (selectedItem === 'Recharges') {
        console.log(selectedItem);
      fetchData();
    } else if(selectedItem === 'Deposits') {
        console.log(selectedItem);
      fetchWalletHistory();
    }else if(selectedItem === 'LedgerBook'){
       console.log(selectedItem);
      fetchLedgerHistory();
    }
    else{
        fetchDataComplaints();
    }
  }, [selectedItem]);

  return {
    selectedItem,
    setSelectedItem,
    data,
    loading,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    fetchData,
    fetchWalletHistory,
  };
};
