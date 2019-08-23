export type WithdrawalTransaction = {
  id: String;
  amount_in: String;
  withdraw_anchor_account: String;
  withdraw_memo: String;
  withdraw_memo_type: "text" | "id" | "hash" | "none";

  more_info_url?: String;
  amount_out?: String;
  amount_fee?: String;
};

export const finalizeWithdrawal = (transaction: WithdrawalTransaction) => {
  const message = {
    ...transaction,
    status: "pending_user_transfer_start"
  };
  const target = window.opener || window.parent;
  target.postMessage(message, "*");
};
