import { redirect } from "next/navigation";

const TRACK_MY_EXPENSE = process.env.TRACK_MY_EXPENSE;

export default function AccountingPage() {
  redirect(TRACK_MY_EXPENSE || "https://track-my-expense.subani.cc");
}