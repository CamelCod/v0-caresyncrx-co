import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, AlertTriangle, CheckCircle, Clock, Plus, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's what's happening with your patient platforms today.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/platforms/new">
            <Plus className="mr-2 h-4 w-4" />
            New Platform
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Platforms</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">of 2 available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Doses</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">8 taken</span>, 4 pending
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Adherence Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">+2% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Inventory</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">medications need refill</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Platform Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Mom took Lisinopril 10mg</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="h-4 w-4 text-yellow-600" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Dad's evening medication reminder sent</p>
                <p className="text-xs text-muted-foreground">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Low inventory: Mom's Metformin (3 tablets left)</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Dad took morning medications</p>
                <p className="text-xs text-muted-foreground">3 hours ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Patient Platforms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Mom's Platform</p>
                  <p className="text-xs text-muted-foreground">CSRX-7429</p>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="text-xs text-muted-foreground">4 medications • Last active: 2 min ago</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Dad's Platform</p>
                  <p className="text-xs text-muted-foreground">CSRX-8531</p>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="text-xs text-muted-foreground">6 medications • Last active: 1 hour ago</div>
            </div>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/dashboard/platforms">View All Platforms</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Important Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-red-800">Medication Refill Needed</p>
                <p className="text-xs text-red-600">Mom's Metformin supply is running low (3 tablets remaining)</p>
              </div>
              <Button size="sm" variant="outline">
                Update Inventory
              </Button>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <Clock className="h-5 w-5 text-yellow-600" />
              <div className="flex-1">
                <p className="text-sm font-medium text-yellow-800">Missed Dose</p>
                <p className="text-xs text-yellow-600">Dad missed his morning Atorvastatin dose</p>
              </div>
              <Button size="sm" variant="outline">
                Send Reminder
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
