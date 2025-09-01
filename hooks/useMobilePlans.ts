// hooks/useMobilePlans.ts
import {useState, useEffect, useCallback} from 'react';
import {API_TOKEN} from '../config';
import {
  PlansResponse,
  plansRes,
  OperatorCircleResponse,
  Operator,
  Circle,
} from '../types';
import { Alert } from 'react-native';
import { NavigationService } from '../services/NavigationService';

export function useMobilePlans(processedMobileNumber: string) {
  const [plansData, setPlansData] = useState<PlansResponse | null>(null);
  const [operatorData, setOperatorData] = useState<Operator | null>(null);
  const [circleData, setCircleData] = useState<Circle | null>(null);
  const [activeTab, setActiveTab] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showFullUI, setShowFullUI] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (processedMobileNumber.length !== 10) {
        setPlansData(null);
        setShowFullUI(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        setShowFullUI(false);

        // 1. Fetch operator & circle
        const circleResponse = await fetch(
          'https://api.recharge.kashishindiapvtltd.com/op-circle-link/fetch-op-circle',
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${API_TOKEN}`,
            },
            body: JSON.stringify({mobile: processedMobileNumber}),
          },
        );

        const circleDataRes: OperatorCircleResponse =
          await circleResponse.json();

        console.log(circleDataRes);
        if (circleDataRes.err === 'Authentication required' || 
            (circleDataRes.message === 'Failed' && circleDataRes.data === null)) {
          // Use typed navigation
          
          NavigationService.navigate('PhoneNumberForm');
          return;
        }

        if (circleDataRes.data?.operator) {
          setOperatorData(circleDataRes.data.operator);
        }
        if (circleDataRes.data?.circle) {
          setCircleData(circleDataRes.data.circle);
        }

        // 2. Fetch plans
        const plansResponse = await fetch(
          'https://api.recharge.kashishindiapvtltd.com/recharge/fetch-plans',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${API_TOKEN}`,
            },
            body: JSON.stringify({
              circleCode: circleDataRes.data.circle_code,
              opCode: circleDataRes.data.operator_code,
            }),
          },
        );

        const plansDataRes: plansRes = await plansResponse.json();
        console.log(setPlansData);

        if (!plansDataRes.data?.RDATA) throw new Error('No plans found');

        setPlansData(plansDataRes.data);

        // default tab
        const firstTab = Object.keys(plansDataRes.data.RDATA)[0];
        setActiveTab(firstTab || '');
        setShowFullUI(true);
      } catch (err:any) {
        if (err.message === 'Authentication required') {
          NavigationService.navigate('PhoneNumberForm');
        }
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    if (processedMobileNumber) fetchData();
  }, [processedMobileNumber]);

  return {
    plansData,
    operatorData,
    circleData,
    activeTab,
    setActiveTab,
    loading,
    error,
    showFullUI,
    setError,
  };
}
