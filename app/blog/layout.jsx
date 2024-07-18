import { BlogLayoutDynamic } from "@/components/dynamic_cmps/layouts_exports";



export default function BlogLayout({ children }) {
  return (
      <BlogLayoutDynamic children={children} />
    );
}
