import {
  HiOutlineHome,
  HiOutlineBuildingOffice,
  HiOutlineUsers,
  HiOutlineClipboardDocumentList,
  HiOutlineCreditCard,
  HiOutlineBanknotes,
  HiOutlineChartBar,
  HiOutlineStar,
  HiOutlineTicket,
  HiOutlineChartPie,
  HiOutlineBell,
  HiOutlineUserGroup,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { LuPackage } from "react-icons/lu";

const nav = [
  {
    title: "overview",
    icon: HiOutlineHome,
    items: [
      { name: "dashboard", icon: HiOutlineHome, path: "dashboard" },
      { name: "reports_and_analytics", icon: HiOutlineChartPie, path: "reports-analytics" },
    ],
  },
  {
    title: "management",
    icon: HiOutlineBuildingOffice,
    items: [
      { name: "companies", icon: HiOutlineBuildingOffice, path: "companies" },
      { name: "customers", icon: HiOutlineUsers, path: "customers" },
      { name: "users_and_roles", icon: HiOutlineUserGroup, path: "users-roles" },
    ],
  },
  {
    title: "operations",
    icon: LuPackage,
    items: [
      { name: "shipments", icon: LuPackage, path: "shipments" },
      { name: "booking_requests", icon: HiOutlineClipboardDocumentList, path: "booking-requests" },
      { name: "reviews_and_ratings", icon: HiOutlineStar, path: "reviews-ratings" },
      { name: "support_and_disputes", icon: HiOutlineTicket, path: "support-disputes" },
    ],
  },
  {
    title: "finance",
    icon: HiOutlineCreditCard,
    items: [
      { name: "transactions", icon: HiOutlineCreditCard, path: "transactions" },
      { name: "commissions", icon: HiOutlineBanknotes, path: "commissions" },
      { name: "subscriptions", icon: HiOutlineChartBar, path: "subscriptions" },
    ],
  },
  {
    title: "system",
    icon: HiOutlineCog6Tooth,
    items: [
      { name: "notifications", icon: HiOutlineBell, path: "notifications" },
      { name: "settings", icon: HiOutlineCog6Tooth, path: "settings" },
    ],
  },
];

export default nav;