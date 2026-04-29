export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <section className="min-h-screen">{children}</section>
}