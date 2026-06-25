---
name: AlfathPOS bonus/commission accounting model
description: How earned/withdrawn/refunded bonus is tracked and why the Commission ledger is the only source of truth.
---

# AlfathPOS bonus (komisi) accounting

## Single source of truth = the Commission ledger, per BRANCH
Claimable bonus = sum of `Commission` rows with `status = "earned"`, scoped per branch.
There is intentionally NO running counter. The `User.bonusBalance` column still exists
in the Prisma schema but is **vestigial — never read or written** by app code. Do not
re-introduce a counter; it caused two ledgers to drift.

**Why:** owner confirmed bonus is computed per branch; admin "Cairkan" must zero the
claimable balance for BOTH owner and cashier in sync. A stored `bonusBalance` counter
was only incremented on sale and decremented on refund — never on withdraw — so after a
payout the cashier kept seeing the old bonus forever, and refunds could push it negative.

## Status lifecycle and the rules each step must honor
- **Sale**: create one `Commission` row per line item, `status="earned"`, `amount =
  commissionAmount × qty` (frontend sends this as the item's `commission`; the per-item
  sum equals `Sale.totalCommission`).
- **Withdraw ("Cairkan")**: per branch, flip `earned -> withdrawn`. Claimable drops to 0.
- **Refund**: flip ONLY `earned -> refunded` (`where: { saleId, status: "earned" }`).
  Already-`withdrawn` rows (money paid out) must stay untouched. Because claimable is a
  derived sum, it can never go negative.

**How to apply:** any future change to bonus must keep claimable derivable from the
ledger. Real-time sync uses a `commissionsUpdated` socket event emitted on withdraw and
refund; the frontend `socket.on("commissionsUpdated", loadData)` re-fetches the summary.
Cashier "Saldo Bonus Saya" reads `commissionsSummary.totalEarned` (branch earned total),
NOT `profile.bonusBalance`.
