import { Logo } from "@/assets/images/icons";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
<div className="container">
<div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
<div>
<Logo />
</div>
<div>
<nav className="flex gap-6">
{footerLinks.map((link) => (
<a key={link.href} href={link.href} className="text-white/50 text-sm">{link.label}</a>
))}
</nav>
</div>
</div>
</div>
</section>
    )
}
