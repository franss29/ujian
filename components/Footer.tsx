import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col py-6 gap-2 border-t justify-between items-center max-w-7xl mx-auto w-full sm:flex-row">
        <p className="text-xs text-muted-foreground">© 2023 TodoList. Hak Cipta Dilindungi.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Kebijakan Privasi
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Syarat dan Ketentuan
          </Link>
        </nav>
      </footer>
  )
}

export default Footer;