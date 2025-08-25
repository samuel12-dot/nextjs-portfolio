import React from 'react'
import Link from 'next/link'
import FooterLink from './FooterLink'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='mx-40 mt-20'>
            <div className='flex items-start'>
                <Image src={'/images/logo.svg'} width={150} height={150} alt={''}/>

                <div className='flex gap-40 ml-[650px]'>
                    <ul>
                        <FooterLink li="Sitemap" link="/sitemap"/>
                        <FooterLink li="Home" link="/" />
                        <FooterLink li="Work" link="/work" />
                        <FooterLink li="About" link="/about" />
                        <FooterLink li="Blog" link="/blog" />
                    </ul>
                    <ul>
                        <FooterLink li="Resources" link="/resources" />
                        <FooterLink li="Styleguide" link="/styleguide" />
                        <FooterLink li="Changelog" link="/changelog" />
                        <FooterLink li="Licenses" link="/licenses" />
                        <FooterLink li="404" link="/not-found" />
                    </ul>
                    <ul>
                        <FooterLink li="Socials" link="/socials" />
                        <FooterLink li="Facebook" link="/facebook" />
                        <FooterLink li="Twitter" link="/twitter" />
                        <FooterLink li="Instagram" link="/instagram" />
                        <FooterLink li="LinkedIn" link="/linkedin" />
                    </ul>

                </div>
            </div>
            <div className='mb-10'>
                <p>&copy;The samuel ayodeji. All rights reserved</p>
            </div>
        </footer>
    )
}
