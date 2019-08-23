export interface IWithdrawalTransaction {
  id: string;
  amount_in: string;
  withdraw_anchor_account: string;
  withdraw_memo: string;
  withdraw_memo_type: "text" | "id" | "hash" | "none";

  more_info_url?: string;
  amount_out?: string;
  amount_fee?: string;
}

export const finalizeWithdrawal = (transaction: IWithdrawalTransaction) => {
  const transactionDetails = {
    ...transaction,
    status: "pending_user_transfer_start"
  };
  const target = window.opener || window.parent;
  target.postMessage({ transaction: transactionDetails }, "*");
};
