# anchor-transfer-utils

Utility functions for implementing the interactive SEP6 flow.  This helps implement the postMessage message handling involved in showing the interactive webapp.

## Installation

### Using NPM

```
npm install --save @stellar/anchor-transfer-utils
```

### Standalone

```
<script src="https://cdn.jsdelivr.net/npm/@stellar/anchor-transfer-utils@1.1.0/lib/index.js" />
```

## Usage for Anchors

### Withdrawal

For anchors using the interactive web flow, use the `finalizeTransaction` helper to communicate back to the wallet when a withdraw is ready for payment.

```
const AnchorTransferUtils = require("@stellar/anchor-transfer-utils")
AnchorTransferUtils.finalizeWithdrawal({
  amount_in: "80.12",
  withdraw_anchour_account: "<Stellar public account id>",
  withdraw_memo: "<Some unique identifier>",
  withdraw_memo_type: "text" | "hash" | "id"
})
```