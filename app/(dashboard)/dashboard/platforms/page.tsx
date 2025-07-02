import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MoreHorizontal, Plus, QrCode, Search, Settings, Smartphone, Users } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function PlatformsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Patient Platforms</h1>
          <p className="text-muted-foreground">Manage medication tracking for your loved ones.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/platforms/new">
            <Plus className="mr-2 h-4 w-4" />
            New Platform
          </Link>
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search platforms..." className="pl-8" />
        </div>
      </div>

      {/* Platform Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-base">Mom's Platform</CardTitle>
              <p className="text-sm text-muted-foreground">CSRX-7429</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <QrCode className="mr-2 h-4 w-4" />
                  Share QR Code
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Archive Platform</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="secondary">Active</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Smartphone className="mr-1 h-3 w-3" />2 devices
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Patient:</span>
                <span className="font-medium">Mary Johnson</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Age:</span>
                <span className="font-medium">74</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Medications:</span>
                <span className="font-medium">4 active</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Last Activity:</span>
                <span className="font-medium">2 min ago</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" className="flex-1" asChild>
                <Link href="/dashboard/platforms/csrx-7429">Manage</Link>
              </Button>
              <Button size="sm" variant="outline">
                <QrCode className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-base">Dad's Platform</CardTitle>
              <p className="text-sm text-muted-foreground">CSRX-8531</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <QrCode className="mr-2 h-4 w-4" />
                  Share QR Code
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Archive Platform</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="secondary">Active</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Smartphone className="mr-1 h-3 w-3" />1 device
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Patient:</span>
                <span className="font-medium">Robert Johnson</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Age:</span>
                <span className="font-medium">76</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Medications:</span>
                <span className="font-medium">6 active</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Last Activity:</span>
                <span className="font-medium">1 hour ago</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" className="flex-1" asChild>
                <Link href="/dashboard/platforms/csrx-8531">Manage</Link>
              </Button>
              <Button size="sm" variant="outline">
                <QrCode className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center space-y-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <Plus className="h-6 w-6" />
            </div>
            <div className="text-center">
              <h3 className="font-medium">Create New Platform</h3>
              <p className="text-sm text-muted-foreground">Set up medication tracking for another family member</p>
            </div>
            <Button asChild>
              <Link href="/dashboard/platforms/new">Get Started</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Usage Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Pro Caregiver Plan</span>
            </div>
            <div className="text-sm text-muted-foreground">2 of 2 platforms used</div>
          </div>
          <div className="mt-2 h-2 bg-muted rounded-full">
            <div className="h-2 bg-primary rounded-full" style={{ width: "100%" }} />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            You've reached your platform limit.
            <Link href="/dashboard/billing" className="text-primary hover:underline ml-1">
              Upgrade to add more platforms
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
