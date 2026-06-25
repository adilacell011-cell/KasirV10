---
name: AlfathPOS stock & SN model
description: How products are recalled and how stock is counted — one masterSN + plain Pcs qty; per-unit Voucher SN intake removed.
---

# Stock & SN model

The intended/active model: every product is recalled by ONE `masterSN` (plus `barcode`), and stock is a plain **Pcs quantity** count (`ProductStock.qty`). There is NO per-unit serial-number tracking in the live flow.

- Lookup: scanner + search match `barcode` first, then `masterSN`. New products default `unit = "Pcs"`.
- Sale: cart items are `{product, qty}` only (no SN picker); server stamps `item.sn || product.masterSN || null` → effectively always masterSN. Stock deducts per Pcs.
- Stock-in/out: qty-based only — `handleStockAddition` (STOCK_IN), `handleStockAdjustment` (STOCK_OUT), `handleAuditStock` (opname), `handleStockTransfer`, all via `/api/stocks/adjust` + `/api/stocks/transfer`.

## Removed: per-unit Voucher SN intake (was dead code)
The old "scan many Voucher SNs to add stock" feature was fully dead (scannedSNs never populated, handlers never in JSX). Removed: frontend states/handlers, `api.bulkVouchers`, and backend `POST /api/voucher-sns/bulk`.

**Why kept the `VoucherSN` Prisma model:** dropping it is a risky schema migration (sandbox db-push quirks). No code creates new rows anymore. Two legacy-cleanup refs remain and are harmless: `voucherSN.deleteMany` (branch delete) and `voucherSN.updateMany` (archive unlink).

**How to apply:** if you ever drop the `VoucherSN` table, remove those two server refs in the SAME migration or the runtime will fail. Do NOT reintroduce per-unit SN intake — the product decision is masterSN + Pcs only.
