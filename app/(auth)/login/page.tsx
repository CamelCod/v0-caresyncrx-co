import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HeartHandshake } from "lucide-react"

export default function LoginPage() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <HeartHandshake className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
        <CardDescription className="text-center">Enter your email below to log in to your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline" prefetch={false}>
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline" prefetch={false}>
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
