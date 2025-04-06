"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { 
  ChevronsUpDown,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  MessageSquare,
  Youtube
} from 'lucide-react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { staggerUpAnimation, zoomInAnimation } from '@/utils/animations/motion'
import { Logo } from './logo'

const links = [
    {
        group: 'Product',
        items: [
            { title: 'Features', href: '#' },
            { title: 'Solution', href: '#' },
            { title: 'Customers', href: '#' },
            { title: 'Pricing', href: '#' },
            { title: 'Help', href: '#' },
            { title: 'About', href: '#' },
        ],
    },
    {
        group: 'Solution',
        items: [
            { title: 'Startup', href: '#' },
            { title: 'Freelancers', href: '#' },
            { title: 'Organizations', href: '#' },
            { title: 'Students', href: '#' },
            { title: 'Collaboration', href: '#' },
            { title: 'Design', href: '#' },
            { title: 'Management', href: '#' },
        ],
    },
    {
        group: 'Company',
        items: [
            { title: 'About', href: '#' },
            { title: 'Careers', href: '#' },
            { title: 'Blog', href: '#' },
            { title: 'Press', href: '#' },
            { title: 'Contact', href: '#' },
            { title: 'Help', href: '#' },
        ],
    },
    {
        group: 'Legal',
        items: [
            { title: 'Licence', href: '#' },
            { title: 'Privacy', href: '#' },
            { title: 'Cookies', href: '#' },
            { title: 'Security', href: '#' },
        ],
    },
]

const socialLinks = [
    { name: 'Twitter', icon: Twitter },
    { name: 'LinkedIn', icon: Linkedin },
    { name: 'Facebook', icon: Facebook },
    { name: 'Threads', icon: MessageSquare },
    { name: 'Instagram', icon: Instagram },
    { name: 'YouTube', icon: Youtube },
]

export default function FooterSection() {
    return (
        <motion.footer
            initial="hidden"
            animate="show"
            variants={zoomInAnimation}
            className="border-b bg-white pt-20 dark:bg-transparent"
        >
            {/* Top section with logo and social links */}
            <motion.div 
                variants={zoomInAnimation}
                className="mb-8 border-b md:mb-12"
            >
                <div className="mx-auto flex max-w-5xl flex-wrap items-end justify-between gap-6 px-6 pb-6">
                    <motion.div variants={staggerUpAnimation}>
                        <Link href="/" aria-label="go home" className="block size-fit">
                            <Logo />
                        </Link>
                    </motion.div>
                    
                    <motion.div 
                        variants={zoomInAnimation}
                        className="flex flex-wrap justify-center gap-6 text-sm"
                    >
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <motion.div 
                                    key={social.name}
                                    variants={staggerUpAnimation}
                                    custom={index}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link 
                                        href="#" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label={social.name}
                                        className="text-muted-foreground hover:text-primary block"
                                    >
                                        <Icon className="h-6 w-6" />
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </motion.div>

            {/* Main content with links and newsletter */}
            <motion.div 
                variants={zoomInAnimation}
                className="mx-auto max-w-5xl px-6"
            >
                <div className="grid gap-12 md:grid-cols-5 md:gap-0 lg:grid-cols-4">
                    {/* Links grid */}
                    <motion.div 
                        variants={zoomInAnimation}
                        className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-5 md:row-start-1 lg:col-span-3"
                    >
                        {links.map((link, groupIndex) => (
                            <motion.div 
                                key={groupIndex}
                                variants={staggerUpAnimation}
                                custom={groupIndex}
                                className="space-y-4 text-sm"
                            >
                                <motion.span 
                                    variants={staggerUpAnimation}
                                    className="block font-medium"
                                >
                                    {link.group}
                                </motion.span>
                                {link.items.map((item, itemIndex) => (
                                    <motion.div 
                                        key={itemIndex}
                                        variants={staggerUpAnimation}
                                        custom={itemIndex}
                                        whileHover={{ x: 5 }}
                                    >
                                        <Link 
                                            href={item.href} 
                                            className="text-muted-foreground hover:text-primary block duration-150"
                                        >
                                            <span>{item.title}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Newsletter form */}
                    <motion.form 
                        variants={staggerUpAnimation}
                        className="row-start-1 border-b pb-8 text-sm md:col-span-2 md:border-none lg:col-span-1"
                    >
                        <div className="space-y-4">
                            <motion.div variants={staggerUpAnimation}>
                                <Label htmlFor="mail" className="block font-medium">
                                    Newsletter
                                </Label>
                            </motion.div>
                            <motion.div 
                                variants={staggerUpAnimation}
                                className="flex gap-2"
                            >
                                <Input 
                                    type="email" 
                                    id="mail" 
                                    name="mail" 
                                    placeholder="Your email" 
                                    className="h-8 text-sm" 
                                />
                                <Button size="sm">Submit</Button>
                            </motion.div>
                            <motion.span 
                                variants={staggerUpAnimation}
                                className="text-muted-foreground block text-sm"
                            >
                                Don't miss any update!
                            </motion.span>
                        </div>
                    </motion.form>
                </div>

                {/* Bottom section with copyright and language selector */}
                <motion.div 
                    variants={zoomInAnimation}
                    className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6"
                >
                    <motion.small 
                        variants={staggerUpAnimation}
                        className="text-muted-foreground order-last block text-center text-sm md:order-first"
                    >
                        © {new Date().getFullYear()} Tailus UI, All rights reserved
                    </motion.small>
                    
                    <motion.form 
                        variants={staggerUpAnimation}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="relative">
                            <ChevronsUpDown className="pointer-events-none absolute inset-y-0 right-2 my-auto opacity-75" size={12} />
                            <select
                                className={cn(
                                    'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground shadow-xs flex h-9 w-full min-w-32 appearance-none rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                                    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                                    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
                                )}
                                name="language">
                                <option value="1">English</option>
                                <option value="2">Espanol</option>
                                <option value="3">Français</option>
                                <option value="4">Swahili</option>
                                <option value="5">Lingala</option>
                            </select>
                        </div>
                    </motion.form>
                </motion.div>
            </motion.div>
        </motion.footer>
    )
}