"use client";
import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Link from "next/link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Link as MuiLink } from "@mui/joy";
interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function Login() {
  const router = useRouter();

  const [error, setError] = React.useState<string | null>(null);
  const onSubmit = (event: React.MouseEvent<SignInFormElement>) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const data = {
      email: formElements.email.value,
      password: formElements.password.value,
    };

    signIn("credentials", { ...data, redirect: false })
      .then((res: any) => {
        if (res?.ok) router.push("/");
        else setError(JSON.parse(res?.error));
      })
      .catch((e) => setError(e?.message));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: 2,
        width: "100%",
        px: 2,
      }}
    >
      <Box
        component="main"
        sx={{
          my: "auto",
          py: 2,
          pb: 5,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: "400px",

          mx: "auto",
          borderRadius: "sm",
          "& form": {
            display: "flex",
            flexDirection: "column",
            gap: 2,
          },
          [`& .MuiFormLabel-asterisk`]: {
            visibility: "hidden",
          },
        }}
      >
        <Stack gap={4} sx={{ mb: 1 }}>
          <Stack gap={1}>
            <Typography component="h1" level="h3">
              تسجيل الدخول
            </Typography>
            <Typography level="body-sm">
              ليس لديك حساب؟{" "}
              <MuiLink component={Link} href="/auth/register" level="title-sm">
                انشاء حساب!
              </MuiLink>
            </Typography>
          </Stack>
        </Stack>
        {error && (
          <Typography color="danger" variant="soft" sx={{ p: 1 }}>
            كلمة المرور او البريد الالكتروني غير صحيحة
          </Typography>
        )}
        <Stack gap={4} sx={{ mt: 1 }}>
          <form onSubmit={onSubmit}>
            <FormControl required error={!!error}>
              <FormLabel>البريد الالكتروني</FormLabel>
              <Input
                error={!!error}
                type="email"
                name="email"
                variant="outlined"
                placeholder="البريد الالكتروني"
              />
            </FormControl>
            <FormControl required color="neutral" error={!!error}>
              <FormLabel>كلمة المرور</FormLabel>
              <Input
                required
                error={!!error}
                variant="outlined"
                type="password"
                name="password"
                placeholder="كلمة المرور"
              />
            </FormControl>
            <Stack gap={2}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <MuiLink
                  component={Link}
                  level="title-sm"
                  href="#replace-with-a-link"
                >
                  هل نسيت كلمة المرور؟
                </MuiLink>
              </Box>
              <Button type="submit" fullWidth>
                تسجيل الدخول
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Box>
  );
}

export default Login;
