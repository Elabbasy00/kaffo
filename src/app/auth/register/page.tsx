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
import { FormHelperText, Grid, Link as MuiLink } from "@mui/joy";
import { IoMdEye } from "react-icons/io";
import { fetcher } from "@/src/utils/fetcher";
import { ErrorSchema } from "@/src/types/data-type";
import toast from "react-hot-toast";

interface FormElements extends HTMLFormControlsCollection {
  first_name: HTMLInputElement;
  last_name: HTMLInputElement;
  email: HTMLInputElement;
  username: HTMLInputElement;
  password: HTMLInputElement;
  repassword: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  const [error, setError] = React.useState<ErrorSchema>();

  const onSubmit = async (event: React.FormEvent<SignInFormElement>) => {
    event.preventDefault();

    const formData = event.currentTarget.elements;
    const data = {
      first_name: formData.first_name.value,
      last_name: formData.last_name.value,
      email: formData.email.value,
      username: formData.username.value,
      password: formData.password.value,
    };

    if (formData.password.value !== formData.repassword.value) {
      setError({
        ...error,
        extra: { fields: { repassword: ["Password Not Match"] } },
      });
      return;
    }

    const response = await fetcher("api/auth/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (response.ok) {
      toast.success("تم انشاء الحساب برجاء تسجيل الدخول");
      router.push("/auth/signin");
      //@ts-ignore
      event.target?.reset();
    } else {
      setError(res);
      console.log(res);
    }
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
          maxWidth: "500px",

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
              أنـشـاء حـسـاب
            </Typography>
            <Typography level="body-sm">
              هـل لـديـك حـسـاب بلفعل ؟
              <MuiLink component={Link} href="/auth/signin" level="title-sm">
                سجل دخول!
              </MuiLink>
            </Typography>
          </Stack>
        </Stack>

        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6}>
              <FormControl error={error?.extra?.fields?.first_name}>
                <FormLabel>ألاسـم الاول</FormLabel>
                <Input
                  error={!!error?.extra?.fields?.first_name}
                  type="text"
                  name="first_name"
                  variant="outlined"
                  placeholder="ألاسـم الاول"
                />
                <FormHelperText>
                  {error?.extra?.fields?.first_name}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6}>
              <FormControl
                color="neutral"
                error={error?.extra?.fields?.last_name}
              >
                <FormLabel>ألاسـم الاخير</FormLabel>
                <Input
                  variant="outlined"
                  type="text"
                  name="last_name"
                  placeholder="ألاسـم الاخير"
                />
                <FormHelperText>
                  {error?.extra?.fields?.last_name}
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid xs={12}>
              <FormControl color="neutral" error={error?.extra?.fields?.email}>
                <FormLabel>الـبريد الالكتروني</FormLabel>
                <Input
                  variant="outlined"
                  type="email"
                  name="email"
                  placeholder="الـبريد الالكتروني"
                />
                <FormHelperText>{error?.extra?.fields?.email}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl
                color="neutral"
                error={error?.extra?.fields?.username}
              >
                <FormLabel>أسـم المستخـدم</FormLabel>
                <Input
                  variant="outlined"
                  type="text"
                  name="username"
                  placeholder="أسـم المستخـدم"
                />
                <FormHelperText>{error?.extra?.fields?.email}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6}>
              <FormControl
                error={
                  error?.extra?.fields?.password ||
                  error?.extra?.fields?.non_field_errors
                }
              >
                <FormLabel>كلمة المرور</FormLabel>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  variant="outlined"
                  placeholder="كلمة المرور"
                />
                <FormHelperText>
                  {error?.extra?.fields?.password}
                  {error?.extra?.fields?.non_field_errors}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid xs={12} sm={6}>
              <FormControl
                color="neutral"
                error={error?.extra?.fields?.repassword}
              >
                <FormLabel>اعادة كلمة المرور</FormLabel>
                <Input
                  endDecorator={
                    <IoMdEye
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    />
                  }
                  error={!!error}
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  name="repassword"
                  placeholder="اعادة كلمة المرور"
                />
                <FormHelperText>
                  {error?.extra?.fields?.repassword?.[0]}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>

          <Button type="submit" fullWidth>
            تسجيل الدخول
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Register;
