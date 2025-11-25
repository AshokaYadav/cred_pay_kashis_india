
interface DateRange {
  from: string;
  to: string;
}

interface WalletHistoryParams {
  page: number;
  limit: number;
  id: string;
  type: string;
  dateRange: DateRange;
}