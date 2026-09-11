import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f7f5fb] text-gray-900">
      
      {/* Sidebar */}
      <aside className="fixed left-5 top-5 bottom-5 w-64 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-xl backdrop-blur-xl">

        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-violet-500 text-xl font-bold text-white shadow-lg shadow-purple-300/30">
            A
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              AGovern
            </h1>

            <p className="text-[10px] text-gray-400">
              Government Portal
            </p>
          </div>
        </div>


        {/* Main Menu */}
        <p className="mb-3 px-2 text-[10px] font-bold tracking-widest text-gray-400">
          MAIN MENU
        </p>

        <nav className="space-y-1">

          <a
            href="#"
            className="flex items-center gap-3 rounded-xl bg-purple-100/70 px-3 py-3 text-sm font-medium text-purple-700"
          >
            <span>⌂</span>
            Dashboard
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-purple-50 hover:text-purple-600"
          >
            <span>▦</span>
            Projects
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-purple-50 hover:text-purple-600"
          >
            <span>◉</span>
            Complaints
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-purple-50 hover:text-purple-600"
          >
            <span>✓</span>
            Inspections
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-purple-50 hover:text-purple-600"
          >
            <span>♙</span>
            Contractors
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-purple-50 hover:text-purple-600"
          >
            <span>₹</span>
            Payments
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-purple-50 hover:text-purple-600"
          >
            <span>✦</span>
            AI Risk
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-purple-50 hover:text-purple-600"
          >
            <span>⌖</span>
            Project Map
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-purple-50 hover:text-purple-600"
          >
            <span>▥</span>
            Analytics
          </a>

        </nav>


        {/* System */}
        <p className="mb-3 mt-8 px-2 text-[10px] font-bold tracking-widest text-gray-400">
          SYSTEM
        </p>

        <nav className="space-y-1">

          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-purple-50 hover:text-purple-600"
          >
            <span>⚙</span>
            Settings
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-purple-50 hover:text-purple-600"
          >
            <span>?</span>
            Help & Support
          </a>

        </nav>


        {/* Admin */}
        <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/70 p-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
            AD
          </div>

          <div>
            <p className="text-xs font-semibold">
              Government Admin
            </p>

            <p className="text-[10px] text-gray-400">
              Administrator
            </p>
          </div>

        </div>

      </aside>


      {/* Main Content */}
      <main className="ml-[300px] min-h-screen p-10">

        {/* Header */}
        <header className="mb-8 flex items-start justify-between">

          <div>
            <p className="mb-2 text-xs text-gray-400">
              AGovern / Dashboard
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              Government Dashboard
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Monitor projects, complaints and public infrastructure.
            </p>
          </div>


          <div className="flex items-center gap-5">

            <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-100 bg-white/70 shadow-sm">
              🔔

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="text-right">
              <p className="text-xs text-gray-400">
                Today
              </p>

              <p className="text-sm font-semibold">
                26 August 2026
              </p>
            </div>

          </div>

        </header>


        {/* Statistics */}
        <section className="mb-6 grid grid-cols-4 gap-5">

          <StatCard
            icon="▦"
            title="Total Projects"
            value="1,248"
            change="+8.4%"
            color="purple"
            description="Government projects"
          />

          <StatCard
            icon="◉"
            title="Active Projects"
            value="387"
            change="+5.2%"
            color="blue"
            description="Currently in progress"
          />

          <StatCard
            icon="!"
            title="High Risk Projects"
            value="24"
            change="+3"
            color="red"
            description="Require attention"
          />

          <StatCard
            icon="✓"
            title="Resolved Complaints"
            value="892"
            change="+12%"
            color="green"
            description="Successfully resolved"
          />

        </section>


        {/* Dashboard Grid */}
        <section className="grid grid-cols-3 gap-5">

          {/* Projects */}
          <div className="col-span-2 rounded-3xl border border-white bg-white/70 p-6 shadow-lg shadow-purple-100/30 backdrop-blur-xl">

            <div className="mb-5 flex items-start justify-between">

              <div>
                <h3 className="font-semibold">
                  Project Performance
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  Overview of government projects
                </p>
              </div>

              <button className="text-xs font-semibold text-purple-600">
                View All
              </button>

            </div>


            <Project
              letter="R"
              title="Road Development"
              department="Public Works Department"
              progress="78"
              status="On Track"
              statusStyle="green"
            />

            <Project
              letter="S"
              title="School Renovation"
              department="Education Department"
              progress="52"
              status="Delayed"
              statusStyle="yellow"
            />

            <Project
              letter="W"
              title="Water Pipeline"
              department="Water Department"
              progress="34"
              status="High Risk"
              statusStyle="red"
            />

          </div>


          {/* AI Risk */}
          <div className="rounded-3xl border border-white bg-white/70 p-6 shadow-lg shadow-purple-100/30 backdrop-blur-xl">

            <div className="mb-6 flex items-start justify-between">

              <div>
                <h3 className="font-semibold">
                  AI Risk Detection
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  Automated anomaly monitoring
                </p>
              </div>

              <span className="rounded-lg bg-purple-100 px-2 py-1 text-[10px] font-bold text-purple-600">
                AI
              </span>

            </div>


            <div className="mb-5 flex items-center gap-4">

              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full border-8 border-purple-100">
                <strong className="text-xl text-purple-600">
                  24
                </strong>

                <span className="text-[9px] text-gray-400">
                  Alerts
                </span>
              </div>

              <div>
                <h4 className="text-xs font-semibold">
                  Attention Required
                </h4>

                <p className="mt-1 text-[10px] leading-5 text-gray-400">
                  AI detected unusual activity across several projects.
                </p>
              </div>

            </div>


            <div className="rounded-2xl border border-red-100 bg-red-50/60 p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 font-bold text-red-500">
                  !
                </div>

                <div className="flex-1">

                  <p className="text-[11px] font-semibold">
                    Water Pipeline Project
                  </p>

                  <p className="mt-1 text-[9px] text-gray-400">
                    Payment 75% vs progress 34%
                  </p>

                </div>

                <span className="text-[9px] font-bold text-red-500">
                  HIGH
                </span>

              </div>

            </div>


            <button className="mt-4 w-full rounded-xl bg-purple-600 py-3 text-xs font-semibold text-white shadow-lg shadow-purple-300/30 transition hover:bg-purple-700">
              View Risk Analysis →
            </button>

          </div>

        </section>


        {/* Bottom Section */}
        <section className="mt-5 grid grid-cols-3 gap-5">

          {/* Complaints */}
          <div className="col-span-2 rounded-3xl border border-white bg-white/70 p-6 shadow-lg shadow-purple-100/30 backdrop-blur-xl">

            <div className="mb-5 flex items-start justify-between">

              <div>
                <h3 className="font-semibold">
                  Recent Complaints
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  Citizen reports and feedback
                </p>
              </div>

              <button className="text-xs font-semibold text-purple-600">
                View All
              </button>

            </div>


            <Complaint
              id="#CMP-1024"
              title="Poor road construction quality"
              info="Road Development • 2 hours ago"
              status="Reviewing"
              style="yellow"
            />

            <Complaint
              id="#CMP-1023"
              title="Construction work stopped"
              info="School Renovation • 5 hours ago"
              status="High Priority"
              style="red"
            />

            <Complaint
              id="#CMP-1022"
              title="Missing street lights"
              info="Municipality • Yesterday"
              status="Resolved"
              style="green"
            />

          </div>


          {/* Quick Actions */}
          <div className="rounded-3xl border border-white bg-white/70 p-6 shadow-lg shadow-purple-100/30 backdrop-blur-xl">

            <h3 className="font-semibold">
              Quick Actions
            </h3>

            <p className="mb-5 mt-1 text-xs text-gray-400">
              Common administration tasks
            </p>


            <QuickAction
              icon="+"
              title="Add Project"
              description="Create a new government project"
            />

            <QuickAction
              icon="✓"
              title="Review Complaints"
              description="View pending citizen reports"
            />

            <QuickAction
              icon="!"
              title="Risk Alerts"
              description="Review AI detected anomalies"
            />

          </div>

        </section>


        {/* Footer */}
        <footer className="mt-8 flex justify-between text-[10px] text-gray-400">

          <span>
            © 2026 AGovern Government Portal
          </span>

          <span>
            Transparent • Accountable • Secure
          </span>

        </footer>

      </main>

    </div>
  );
}


/* =========================
   STAT CARD
========================= */

function StatCard({
  icon,
  title,
  value,
  change,
  color,
  description,
}) {
  const colors = {
    purple: "bg-purple-100 text-purple-600",
    blue: "bg-blue-100 text-blue-600",
    red: "bg-red-100 text-red-600",
    green: "bg-green-100 text-green-600",
  };

  return (
    <div className="rounded-3xl border border-white bg-white/70 p-5 shadow-lg shadow-purple-100/20 backdrop-blur-xl">

      <div className="mb-5 flex items-center justify-between">

        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors[color]}`}>
          {icon}
        </div>

        <span className="rounded-lg bg-green-50 px-2 py-1 text-[9px] font-semibold text-green-600">
          {change}
        </span>

      </div>

      <p className="text-xs text-gray-400">
        {title}
      </p>

      <h2 className="mt-1 text-2xl font-bold">
        {value}
      </h2>

      <p className="mt-1 text-[10px] text-gray-400">
        {description}
      </p>

    </div>
  );
}


/* =========================
   PROJECT
========================= */

function Project({
  letter,
  title,
  department,
  progress,
  status,
  statusStyle,
}) {

  const statusColors = {
    green: "bg-green-50 text-green-600",
    yellow: "bg-yellow-50 text-yellow-600",
    red: "bg-red-50 text-red-600",
  };

  return (
    <div className="grid grid-cols-[1.5fr_1fr_80px] items-center gap-5 border-t border-gray-100 py-4">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-xs font-bold text-purple-600">
          {letter}
        </div>

        <div>
          <p className="text-xs font-semibold">
            {title}
          </p>

          <p className="mt-1 text-[9px] text-gray-400">
            {department}
          </p>
        </div>

      </div>


      <div>

        <div className="mb-2 flex justify-between text-[9px] text-gray-400">

          <span>Progress</span>

          <strong className="text-gray-700">
            {progress}%
          </strong>

        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">

          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-600 to-violet-400"
            style={{ width: `${progress}%` }}
          />

        </div>

      </div>


      <span className={`rounded-lg px-2 py-1 text-center text-[8px] font-bold ${statusColors[statusStyle]}`}>
        {status}
      </span>

    </div>
  );
}


/* =========================
   COMPLAINT
========================= */

function Complaint({
  id,
  title,
  info,
  status,
  style,
}) {

  const colors = {
    green: "bg-green-50 text-green-600",
    yellow: "bg-yellow-50 text-yellow-600",
    red: "bg-red-50 text-red-600",
  };

  return (
    <div className="flex items-center gap-4 border-t border-gray-100 py-4">

      <span className="w-20 text-[9px] font-semibold text-purple-600">
        {id}
      </span>

      <div className="flex-1">

        <p className="text-[11px] font-semibold">
          {title}
        </p>

        <p className="mt-1 text-[9px] text-gray-400">
          {info}
        </p>

      </div>

      <span className={`rounded-lg px-2 py-1 text-[8px] font-bold ${colors[style]}`}>
        {status}
      </span>

    </div>
  );
}


/* =========================
   QUICK ACTION
========================= */

function QuickAction({
  icon,
  title,
  description,
}) {
  return (
    <button className="mb-2 flex w-full items-center gap-3 rounded-2xl border border-gray-100 bg-white/50 p-3 text-left transition hover:border-purple-200 hover:bg-purple-50">

      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 font-bold text-purple-600">
        {icon}
      </span>

      <div className="flex-1">

        <p className="text-[10px] font-semibold">
          {title}
        </p>

        <p className="mt-1 text-[8px] text-gray-400">
          {description}
        </p>

      </div>

      <span className="text-xs text-gray-400">
        →
      </span>

    </button>
  );
}

export default Dashboard;