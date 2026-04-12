import { redirect } from "next/navigation";

/** 与根目录 proxy 双重保障：代理未命中时仍把 `/` 送到规范英文路由。 */
export default function RootPage() {
  redirect("/en");
}
