import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const footerData = [
    {
        title: "Sitemap",
        links: [
            {
                name: "home",
                path: "/"
            },
            {
                name: "works",
                path: "/works"
            },
            {
                name: "about",
                path: "/about"
            },
            {
                name: "blog",
                path: "/blog"
            }
        ]
    },
    {
        title: "Sitemap",
        links: [
            {
                name: "resources",
                path: "/styleguide"
            },
            {
                name: "changelog",
                path: "/styleguide"
            },
            {
                name: "licenses",
                path: "/licenses"
            },
            {
                name: "404",
                path: "/not-found"
            }
        ]
    },
    {
        title: "Social",
        links: [
            {
                name: "facebook",
                path: "/facebook"
            },
            {
                name: "twitter",
                path: "/twitter"
            },
            {
                name: "instagram",
                path: "/instagram"
            },
            {
                name: "linkedin",
                path: "/linkedin"
            }
        ]
    }
]

export default function Footer() {
    return (
        <footer className='px-40 pt-20 bg-[#E7C285] text-black'>

            <Image src={'/images/dark-logo.svg'} width={150} height={150} alt={''}/>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>{footerData.map((section, index) => {
                return (
                    <div key={index}>
                        <h4>{section.title}</h4>
                        <ul>{section.links.map((link, i) => {
                            return (
                                <li key={i}>
                                    <Link href={link.path}>{link.name}</Link>
                                </li>
                            )
                        })}</ul>
                    </div>
                )
            })}</div>

            <div>
                <p>&copy; The samuel ayodeji. All rights reserved</p>
            </div>
        </footer>
    )
}
