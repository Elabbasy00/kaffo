import { Typography } from "@mui/joy";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, name }: { href: string; name: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <Typography
        level="title-md"
        borderRadius="sm"
        sx={{
          position: "relative",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "lg",
          ":hover": {
            ":after": {
              width: "100%",
              right: 0,
              left: "unset",
            },
          },
          ":after": {
            content: "''",
            width: isActive ? "100%" : "0",
            height: "2px",
            display: "block",
            backgroundColor: "#0E6B81",

            transition: "all 0.3s linear",
            position: "absolute",
            bottom: "-3px",
            left: 0,
            right: "unset",
          },
        }}
      >
        {name}
      </Typography>
    </Link>
  );
};

export default ActiveLink;
